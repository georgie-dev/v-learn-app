import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UPLOAD_COURSE, UPLOAD_ASSIGNMENT, SUBMIT_ASSIGNMENT } from '../store/fileUpload'
import { ScaleLoader } from 'react-spinners'
import axiosInstance from '../modules/auth/axios'



const Upload = ({ uploadType = '', closeModal, id = '' }) => {
    const [input, setInput] = useState({})
    const [fileData, setFileData] = useState({})
    const [assignments, setAssignments] = useState([])

    const { title, firstname, lastname, courses } = useSelector(state => state.user.userDetails)

    const lecturer = title + ' ' + firstname
    const student = firstname + ' ' + lastname
    const { isLoading } = useSelector(state => state.fileUpload)
    const dispatch = useDispatch()

    useEffect(() => {
        axiosInstance.get(`/api/uploadassignment/?course=${id}`)
            .then((data) => {
                setAssignments(data.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const handleFileSelect = (e) => {
        const file = e.target.files[0]
        setFileData(file)
    }


    const formReset = () => {
        setInput({})
        setFileData({})
        const file = document.getElementById('file')
        file.value = ''
        closeModal()
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        uploadCourseMaterial()
        formReset()
    }
    console.log(input)
    const uploadCourseMaterial = () => {
        const date = new Date()
        const data = new FormData();
        data.append('file', fileData)
        data.append('title', input.title)
        data.append('course', input.course)

        if (uploadType === 'assignment') {
            data.append('due_date', input.due_date)
            data.append('lecturer', lecturer)
            dispatch(UPLOAD_ASSIGNMENT(data))
        } else if (uploadType === 'course material') {
            data.append('lecturer', lecturer)
            dispatch(UPLOAD_COURSE(data))
        } else {
            data.append('student', student)
            data.append('course', id)
            data.append('submit_date', date.toISOString() )
            dispatch(SUBMIT_ASSIGNMENT(data))
        }

    }
    return (

        <div className="fixed inset-0 z-10 overflow-y-auto md:ml-72">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white dark:bg-secondary-dark-bg rounded-md shadow-lg">
                    <header className='font-Machina lg:text-xl text-lg font-bold p-2'>{uploadType === "assignment" ? `Upload an ${uploadType}` : uploadType===' course material' ? `Upload a ${uploadType}`: 'Submit an Assignment'}</header>

                    <div className='mt-6 lg:px-8 px-3 w-full mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex gap-3  mx-auto'>
                                <div className='flex flex-col  w-1/2 '>
                                    {id === '' ?
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
                                        </select> :
                                        <input
                                            type='text'
                                            value={id}
                                            className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina disabled:cursor-not-allowed disabled:bg-gray-300'
                                            disabled
                                        />
                                    }
                                </div>

                                <div className='flex flex-col  w-1/2 '>
                                    {id === '' ?
                                        <input
                                            type='text'
                                            name='title'
                                            value={input.title || ""}
                                            onChange={handleChange}
                                            className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
                                            placeholder='Title'
                                            required
                                        /> :
                                        <select
                                            name="title"
                                            onChange={handleChange}
                                            value={input.title}
                                            className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina'
                                            required
                                        >
                                            <option value="">Select Assignment</option>
                                            {assignments.map((assignment) => (
                                                <option key={assignment.id} value={assignment.title}>
                                                    {assignment.title}
                                                </option>
                                            ))}
                                        </select>
                                    }
                                </div>
                            </div>

                            <div className='flex gap-3 mt-6 mx-auto'>
                                {uploadType === 'assignment' ?
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
                                    </div> :
                                    null
                                }

                                <div className='flex flex-col  w-1/2 '>
                                    <input
                                        type='file'
                                        name='file'
                                        id='file'
                                        onChange={handleFileSelect}
                                        className='block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
               file:bg-violet-50 file:text-slate-500
               hover:file:bg-main-dark-bg
                font-Machina'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex justify-between my-2'>
                                <button
                                    className=" mt-2 p-2 w-40 text-gray-800 dark:text-black dark:bg-slate-300 rounded-md outline-none border "
                                    onClick={formReset}
                                >
                                    Cancel
                                </button>

                                <button
                                    type='submit'
                                    // onClick={courseRegister}
                                    className='mt-2 p-2 w-40 text-white bg-main-dark-bg dark:text-black flex justify-center dark:bg-slate-300 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-400 items-center'
                                    disabled={isLoading}
                                >
                                    Upload
                                    <ScaleLoader
                                        color='#B7E8EB'
                                        loading={isLoading}
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