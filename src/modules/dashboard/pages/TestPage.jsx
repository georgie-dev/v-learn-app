import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../auth/axios';
import { Header } from '../../../components';
import { ScaleLoader } from 'react-spinners';
import { TiCancel } from 'react-icons/ti'
import Toast from '../../auth/Toast';
import { useNavigate } from 'react-router-dom';


const CountdownTimer = ({ baseMinutes }) => {
    const [remainingTime, setRemainingTime] = useState(baseMinutes * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            if (remainingTime <= 0) {
                clearInterval(interval);
            } else {
                setRemainingTime(prevTime => prevTime - 1);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [remainingTime]);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
        <div className='text-lg font-semibold font-Machina'>
           Time: {minutes}:{seconds < 10 ? "0" : ""}{seconds}
        </div>
    );
};

const TestPage = () => {
    const { id } = useParams()
    const [testDetails, setTestDetails] = useState([])
    const [testQuestions, setTestQuestions] = useState([])
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(true)
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [Submit, setSubmit] = useState(false)
    const [originalOrder, setOriginalOrder] = useState([])
    const [testResult, setTestResult] = useState({})
    const [showResult, setShowResult] = useState(false)
    const currentDate = new Date()

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        axiosInstance.get(`/api/quizzes/filter_by_course/?id=${id}`)
            .then((res) => {
                setTestDetails(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [id])

    const shuffleArray = (array) => {
        const shuffledArray = [...array];  // Fisher-Yutes Algorithm
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    const fetchQuestions = async () => {
        setLoading(true)
        axiosInstance.get(`/api/questions/?quiz=${id}`)
            .then((res) => {
                const originalOrder = res.data.map(question => question.id);
                const shuffledQuestions = shuffleArray(res.data);
                setTestQuestions(shuffledQuestions);
                setOriginalOrder(originalOrder);
                Toast.fire({
                    icon: "success",
                    title: "Starting",
                });
            })
            .catch((error) => {
                console.log(error)
                Toast.fire({
                    icon: "error",
                    title: "Failed to get questions, try again",
                });
            })
            .finally(() => {
                setLoading(false)
                setShowModal(false)
            })
    }


    const handleOptionChange = (questionIndex, optionIndex) => {
        setSelectedOptions(prevOptions => {
            const updatedOptions = [...prevOptions];
            updatedOptions[questionIndex] = {
                question_id: questionIndex,
                selected_option: optionIndex
            };
            return updatedOptions;
        });
    };

    const finishTest = () => {
        setShowResult(false)
        navigate('/dashboard/assessments')
    }
    const closeModal = ()=>{
        setShowModal(false)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
        const answers = selectedOptions.filter(Boolean);
        const data = {
            quiz_id: id,
            answers: answers,
            original_order: originalOrder
        }
        console.log(data)
        axiosInstance.post('/api/submissions/', data)
            .then((res) => {
                console.log(res)
                setTestResult(res.data)
                setShowResult(true)
            })
            .catch((error) => {
                Toast.fire({
                    icon: "error",
                    title: error,
                });
            })
            .finally(() => {
                setSubmit(false)
            })
    };


    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
            <div className='flex justify-between items-center'>
                <div>
                {testDetails.map((data, dataIndex) => (
                <Header key={dataIndex} category='Test' title={data.course} />
            ))}
                </div>
                {testQuestions.length !== 0 ?
                <div>
                {testDetails.map((data)=>(
                    <CountdownTimer baseMinutes={data.duration}/>
                ))}
            </div>
            :
            null
            }
            </div>
            <div className='p-5 h-auto block gap-4 mt-12 w-full'>
                {
                    loading ?
                        <div className='flex flex-col justify-center items-center h-80 mx-auto'>

                            <ScaleLoader
                                color='#B7E8EB'
                                loading={loading}
                                height={20}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                        :
                        testQuestions.length === 0 ?
                            <div className='flex flex-col justify-center items-center h-80 mx-auto'>
                                <TiCancel className='text-6xl text-gray-300' />
                                <p className='text-gray-300 text-2xl font-Machina'>Test Not Available Yet</p>
                            </div>
                            :
                            <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                                {
                                    testQuestions.map((data, dataIndex) => (
                                        <div key={dataIndex} className='flex flex-col gap-4'>
                                            <div className='font-Machina flex gap-3 items-center text-xl font-semibold'>
                                                <small>Question {dataIndex + 1} :</small>
                                                <small>{data.question_text}</small>
                                            </div>
                                            <div className='flex gap-5 items-center'>
                                                {data.options.map((option, optionIndex) => (
                                                    <div key={optionIndex} className='flex gap-3 items-center'>
                                                        <input
                                                            type='radio'
                                                            name={`question-${dataIndex}`}
                                                            value={optionIndex}
                                                            onChange={() => handleOptionChange(dataIndex, optionIndex)}
                                                        />
                                                        <label className='text-md'>{option}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className='flex justify-end'>
                                    <button
                                        type='submit'
                                        className='mt-2 p-2 w-40 text-white bg-main-dark-bg dark:text-black flex gap-3 justify-center dark:bg-slate-300 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-400 items-center'
                                        disabled={Submit}
                                    >
                                        Upload
                                        <ScaleLoader
                                            color='#B7E8EB'
                                            loading={Submit}
                                            height={10}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                    </button>
                                </div>
                            </form>
                }
            </div>
            {
                showModal &&
                <div className="fixed inset-0 z-10 overflow-y-auto md:ml-72">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                    ></div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                        {testDetails.map((data) => (
                            <div className="relative w-full max-w-sm p-4 mx-auto bg-white dark:bg-secondary-dark-bg rounded-md shadow-lg">
                                <div className='flex justify-between items-center'>
                                    <header className='font-Machina lg:text-xl text-lg font-bold p-2'>{data.course} Test details</header>
                                </div>
                                <div className='mt-6 px-3 w-full justify-center flex flex-col gap-4'>
                                    <div className='flex gap-0 border items-center'>
                                        <div className='flex flex-col border font-Machina w-1/2 p-3 items-center font-semibold'>
                                            <small>Test Duration</small>
                                            <small className='text-lg'>{data.duration} mins</small>
                                        </div>
                                        <div className='flex flex-col border font-Machina w-1/2 p-3 items-center font-semibold'>
                                            <small>Total Marks</small>
                                            <small className='text-lg'>{data.total_marks} marks</small>
                                        </div>
                                    </div>
                                    <div className='flex flex-col font-Machina font-semibold gap-3'>
                                        <small className='text-sm'>Instructions:</small>
                                        <div className='text-md'>{data.instructions}</div>
                                    </div>
                                </div>
                                <button
                                    onClick={currentDate < new Date(data.assessment_date) ? fetchQuestions : fetchQuestions}
                                    className='mt-6 p-2 w-40 text-white bg-main-dark-bg dark:text-black flex gap-3 justify-center dark:bg-slate-300 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-400 items-center'
                                    disabled={loading}
                                >
                                    Start
                                    <ScaleLoader
                                        color='#B7E8EB'
                                        loading={loading}
                                        height={10}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            }
            {
                showResult &&
                (
                    <div className="fixed inset-0 z-10 overflow-y-auto md:ml-72">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-sm p-4 mx-auto bg-white dark:bg-secondary-dark-bg rounded-md shadow-lg">
                                <div className='flex justify-between items-center'>
                                    <header className='font-Machina lg:text-xl text-lg font-bold p-2'>Here's your test results</header>
                                </div>
                                <div className='mt-6 px-3 w-full justify-center flex flex-col gap-4'>
                                    <div className='flex flex-wrap gap-0 border items-center'>
                                        <div className='flex flex-col border font-Machina w-1/2 p-3 items-center font-semibold'>
                                            <small>Total Questions</small>
                                            <small className='text-lg'> {testResult.total}</small>
                                        </div>
                                        <div className='flex flex-col border font-Machina w-1/2 p-3 items-center font-semibold'>
                                            <small>Correct Answers</small>
                                            <small className='text-lg'> {testResult.correct}</small>
                                        </div>
                                        <div className='flex flex-col border font-Machina w-1/2 p-3 items-center font-semibold'>
                                            <small>Wrong Answers</small>
                                            <small className='text-lg'> {testResult.wrong}</small>
                                        </div>
                                        <div className='flex flex-col border font-Machina w-1/2 p-3 items-center font-semibold'>
                                            <small>Percentage Scores</small>
                                            <small className='text-lg'>{`${testResult.percent}%`}</small>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={finishTest}
                                    className='mt-6 p-2 w-40 text-white bg-main-dark-bg dark:text-black flex gap-3 justify-center dark:bg-slate-300 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-400 items-center'
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TestPage