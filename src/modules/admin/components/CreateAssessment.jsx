import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineCancel } from 'react-icons/md'
// import axiosInstance from '../../../modules/auth/axios'



const Upload = ({ uploadType = '', closeModal, id = '' }) => {
    const [input, setInput] = useState({})
    const [step, setStep] = useState(1)

    const { courses } = useSelector(state => state.user.userDetails)

    // const lecturer = title + ' ' + firstname
    const { isLoading } = useSelector(state => state.fileUpload)
    // const dispatch = useDispatch()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const formReset = () => {
        setInput({})
        // setFileData({})
        const file = document.getElementById('file')
        file.value = ''
        closeModal()
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        formReset()
    }
    console.log(input)
    return (

        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-3xl p-4 mx-auto bg-white dark:bg-secondary-dark-bg rounded-md shadow-lg">
                    <div className='flex justify-between items-center'>
                        <header className='font-Machina lg:text-xl text-lg font-bold p-2'>Create an Assessment</header>
                        <MdOutlineCancel onClick={closeModal} />
                    </div>
                    {step === 1 ?
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
                                            {/* {courses.map((course) => (
                                                <option key={course.id} value={course.courseCode}>
                                                    {course.courseCode}
                                                </option>
                                            ))} */}
                                        </select>
                                    </div>

                                    <div className='flex flex-col  w-1/2 '>
                                        <select
                                            name="course"
                                            onChange={handleChange}
                                            value={input.course}
                                            className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina'
                                            required
                                        >
                                            <option value="">Assessment Type</option>
                                            <option value="tests">Tests</option>
                                            <option value="">Exams</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='flex gap-3 mt-6 mx-auto'>
                                    <div className='flex flex-col  w-1/2 '>
                                        <input
                                            type='datetime-local'
                                            name='due_date'
                                            value={input.due_date || ""}
                                            onChange={handleChange}
                                            className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
                                            placeholder='First Name'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='flex justify-end my-2'>
                                    <button
                                        type='submit'
                                        // onClick={courseRegister}
                                        className='mt-2 p-2 w-40 text-white bg-main-dark-bg dark:text-black flex justify-center dark:bg-slate-300 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-400 items-center'
                                        onClick={() => { setStep(2) }}
                                    >
                                        Proceed
                                    </button>
                                </div>
                            </form>
                        </div>
                        :
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
                                            <option value="">Step 2</option>
                                            {/* {courses.map((course) => (
                                                <option key={course.id} value={course.courseCode}>
                                                    {course.courseCode}
                                                </option>
                                            ))} */}
                                        </select>
                                    </div>

                                    <div className='flex flex-col  w-1/2 '>
                                        <select
                                            name="course"
                                            onChange={handleChange}
                                            value={input.course}
                                            className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina'
                                            required
                                        >
                                            <option value="">Assessment Type</option>
                                            <option value="tests">Tests</option>
                                            <option value="">Exams</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='flex gap-3 mt-6 mx-auto'>
                                    <div className='flex flex-col  w-1/2 '>
                                        <input
                                            type='datetime-local'
                                            name='due_date'
                                            value={input.due_date || ""}
                                            onChange={handleChange}
                                            className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
                                            placeholder='First Name'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='flex justify-between my-2'>
                                    <button
                                        className=" mt-2 p-2 w-40 text-gray-800 dark:text-black dark:bg-slate-300 rounded-md outline-none border "
                                        onClick={() => { setStep(1) }}
                                    >
                                        Back
                                    </button>

                                    <button
                                        type='submit'
                                        // onClick={courseRegister}
                                        className='mt-2 p-2 w-40 text-white bg-main-dark-bg dark:text-black flex justify-center dark:bg-slate-300 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-400 items-center'
                                        // disabled={isLoading}
                                    >
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Upload