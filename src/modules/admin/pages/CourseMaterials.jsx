import React, { useEffect } from 'react'
import { Header, Table } from '../../../components'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axiosInstance from '../../auth/axios'
import { UPLOAD_COURSE } from '../../../store/fileUpload'
import ScaleLoader from 'react-spinners/ScaleLoader'

const CourseMaterials = () => {
    const [showModal, setshowModal] = useState(false)
    const [input, setInput] = useState({})
    const [fileData, setFileData]= useState({})
    const [courseList, setCourseList] = useState([])

    const { title, firstname, courses } = useSelector(state => state.user.userDetails)
    const {isLoading} = useSelector(state=> state.fileUpload)
    const dispatch = useDispatch()

    const lecturer =title + ' ' + firstname
    const headerList=['Course', 'Title', 'Upload Date', 'Download']

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    useEffect(() => {
        axiosInstance.get(`api/coursematerials/?lecturer=${lecturer}`)
            .then((data) => {
                setCourseList(data.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [lecturer, firstname, title])

    const handleFileSelect = (e) =>{
        const file = e.target.files[0]
        setFileData(file)
      }
      

      const formReset = ()=>{
        setInput({})
        setFileData({})
        const file= document.getElementById('file')
        file.value=''
        setshowModal(false)
      }


    const handleSubmit = (e) => {
        e.preventDefault()
        uploadCourseMaterial()
        formReset()
    }

    const uploadCourseMaterial = () =>{
        const data = new FormData();
        data.append('file', fileData)
        data.append('title', input.title)
        data.append('lecturer', lecturer)
        data.append('course', input.course)

        dispatch(UPLOAD_COURSE(data))
    }
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
            <Header category='Pages' title="Course Materials" />
            <div>
                <div className='flex justify-between my-2'>
                    <input
                        type='search'
                        placeholder='Search by keyword'
                        className='border px-3 py-1 w-auto lg:w-80 rounded-md placeholder:font-rokkitt text-gray-50 dark:text-slate-600'
                    />
                    <button
                        onClick={() => { setshowModal(true) }}
                        className='py-2 px-6 border rounded-md gap-1 flex justify-center items-center bg-main-dark-bg my-0 w-40 float-right text-white font-bold font-Machina cursor-pointer hover:bg-slate-700'
                    >
                        Upload <AiOutlineCloudUpload />
                    </button>
                </div>
                <Table arg={courseList}  headers={headerList}></Table>
                {showModal ?
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white dark:bg-secondary-dark-bg rounded-md shadow-lg">
                                <header className='font-Machina lg:text-xl text-lg font-bold p-2'>Upload a Course Material</header>

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
                                                <small className='hidden'>Error message</small>
                                            </div>

                                            <div className='flex flex-col  w-1/2 '>
                                                <input
                                                    type='text'
                                                    name='title'
                                                    value={input.title || ""}
                                                    onChange={handleChange}
                                                    className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
                                                    placeholder='Title'
                                                    required
                                                />
                                                <small className='hidden'>Error message</small>
                                            </div>
                                        </div>

                                        <div className='flex flex-col  w-full my-6 '>
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
                                            <small className='hidden'>Error message</small>
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
                    :
                    null}
            </div>
        </div>
    )
}

export default CourseMaterials