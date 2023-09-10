import React from 'react';
import { RxCaretLeft } from 'react-icons/rx'
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import axiosInstance from '../../auth/axios'
import Header from '../../../components/Header'
import Toast from '../../auth/Toast';
import { ScaleLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const CreateAssessment = () => {

    const [questionSets, setQuestionSets] = useState([]);
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    const addNewQuestionSet = () => {
        setQuestionSets(prevSets => [
            ...prevSets,
            { question_text: '', options: ['', '', '', ''], correct_option: '', quiz: id }
        ]);
    };

    const handleQuestionChange = (index, value) => {
        const updatedSets = [...questionSets];
        updatedSets[index].question_text = value;
        setQuestionSets(updatedSets);
    };

    const handleOptionChange = (setIndex, optionIndex, value) => {
        const updatedSets = [...questionSets];
        updatedSets[setIndex].options[optionIndex] = value;
        setQuestionSets(updatedSets);
    };

    const handleCorrectAnswerChange = (setIndex, value) => {
        const updatedSets = [...questionSets];
        updatedSets[setIndex].correct_option = value;
        setQuestionSets(updatedSets);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(questionSets)
        axiosInstance.post('/api/questions/', questionSets)
            .then((res) => {
                Toast.fire({
                    icon: "success",
                    title: "Test uploaded successfully",
                });
                setTimeout(() => {
                    navigate('/admin/assessments')
                }, 2000)
            })
            .catch((error) => {
                Toast.fire({
                    icon: "error",
                    title: "Sorry, An error occured",
                });
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
            <Link to='/admin/assessments' className='p-4'>
                <RxCaretLeft
                    className='text-4xl text-gray-400 font-Machina cursor-pointer hover:text-gray-800'
                />
            </Link>
            <Header category='Pages' title="Enter Questions" />
            <div className='flex justify-end'>
                <button
                    onClick={addNewQuestionSet}
                    className='py-2 px-6 border rounded-md gap-3 flex justify-center items-center bg-main-dark-bg my-0 w-fit float-right text-white font-bold font-Machina cursor-pointer hover:bg-slate-700'
                >
                    Add New Question
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                {questionSets.map((set, index) => (
                    <div key={index} className='flex flex-col gap-4 p-3'>
                        <div className='font-Machina text-md font-semibold'>Question {index + 1}</div>
                        <input
                            type='text'
                            name='question_text'
                            className='p-2 border rounded-lg border-slate-300 w-2/3 my-0 placeholder:font-Machina '
                            placeholder='Enter Question'
                            value={set.question_text}
                            onChange={e => handleQuestionChange(index, e.target.value)}
                        />
                        <div className='flex flex-col md:flex-row gap-3 w-2/3'>
                            {set.options.map((option, optionIndex) => (
                                <input
                                    key={optionIndex}
                                    type='text'
                                    className='p-2 border rounded-lg border-slate-300 w-2/4 my-0 placeholder:font-Machina'
                                    placeholder={`Option ${optionIndex + 1}`}
                                    value={option}
                                    onChange={e => handleOptionChange(index, optionIndex, e.target.value)}
                                />
                            ))}
                        </div>
                        <select
                            className='p-2 border rounded-lg border-slate-300 w-1/3 my-0 placeholder:font-Machina'
                            value={set.correct_option}
                            onChange={e => handleCorrectAnswerChange(index, e.target.value)}
                        >
                            <option value="">Select Correct Option</option>
                            {set.options.map((option, optionIndex) => (
                                <option key={optionIndex} value={optionIndex}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
                <div className='flex justify-end'>
                    {questionSets.length > 0 ?
                        <button
                            type='submit'
                            className='mt-2 p-2 w-40 text-white bg-main-dark-bg dark:text-black flex justify-center dark:bg-slate-300 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-400 items-center'
                            disabled={loading}
                        >
                            Upload
                            <ScaleLoader
                                color='#B7E8EB'
                                loading={loading}
                                height={10}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </button>
                        :
                        null
                    }
                </div>
            </form>
        </div>
    )
}

export default CreateAssessment