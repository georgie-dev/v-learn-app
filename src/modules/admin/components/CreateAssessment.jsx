import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineCancel } from 'react-icons/md'
import axiosInstance from '../../../modules/auth/axios'
import { ScaleLoader } from 'react-spinners'
import Toast from '../../auth/Toast'
import { useNavigate } from 'react-router-dom'



const Upload = ({ closeModal }) => {
    const [input, setInput] = useState({})
    const { courses } = useSelector(state => state.user.userDetails)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        console.log(input)
        axiosInstance.post('/api/quizzes/', input)
            .then((res) => {
                Toast.fire({
                    icon: "success",
                    title: "Test created successfully",
                });
                navigate(`/admin/assessments/${res.data.id}`)
            })
            .catch((error) => {
                Toast.fire({
                    icon: "error",
                    title: "Sorry, An error occured",
                });
            })
            .finally(() => {
                setLoading(false)
                closeModal()
            })
    }
    console.log(input)

    return (

        <div className="fixed inset-0 z-10 overflow-y-auto md:ml-72">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-3xl p-4 mx-auto bg-white dark:bg-secondary-dark-bg rounded-md shadow-lg">
                    <div className='flex justify-between items-center'>
                        <header className='font-Machina lg:text-xl text-lg font-bold p-2'>Create an Assessment</header>
                        <MdOutlineCancel onClick={closeModal} />
                    </div>
                    <div className='mt-6 lg:px-8 px-3 w-full mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex gap-3  mx-auto'>
                                <div className='flex flex-col  w-1/2 '>
                                    <select
                                        name="course"
                                        onChange={handleChange}
                                        value={input.course}
                                        className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina'
                                        required
                                    >
                                        <option value="">Select Course</option>
                                        {courses.map((course) => (
                                            <option key={course.id} value={course.courseCode}>
                                                {course.courseCode}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex flex-col  w-1/2 '>
                                    <input
                                        type="number"
                                        name='duration'
                                        value={input.duration || ""}
                                        onChange={handleChange}
                                        className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
                                        placeholder='Duration of test (in min.)'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex gap-3 mt-6 mx-auto'>
                                <div className='flex flex-col  w-1/2 '>
                                    <input
                                        type='datetime-local'
                                        name='assessment_date'
                                        value={input.assessment_date || ""}
                                        onChange={handleChange}
                                        className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col  w-1/2 '>
                                    <input
                                        type="number"
                                        name='total_marks'
                                        value={input.total_marks || ""}
                                        onChange={handleChange}
                                        className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
                                        placeholder='Total Marks'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-full my-4 '>
                                <textarea
                                    className='p-2 border rounded-lg w-full border-slate-300 my-0 placeholder:font-Machina'
                                    rows={6}
                                    placeholder='Enter Instructions'
                                    name='instructions'
                                    value={input.instructions || ""}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className='flex justify-end my-2'>
                                <button
                                    type='submit'
                                    className='mt-2 p-2 w-40 text-white bg-main-dark-bg dark:text-black flex justify-center dark:bg-slate-300 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-400 items-center'
                                    disabled={loading}
                                >
                                    Proceed
                                    <ScaleLoader
                                        color='#B7E8EB'
                                        loading={loading}
                                        height={10}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload