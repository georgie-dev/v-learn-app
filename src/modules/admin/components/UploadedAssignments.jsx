import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { ScaleLoader } from 'react-spinners'

const UploadedAssignments = () => {
    const [showModal, setshowModal] = useState(false)
    const [input, setInput] = useState({})

    const { courses } = useSelector(state => state.user.userDetails)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

    return (
        <div className=' mx-auto h-80 mt-10 p-2'>
            <button
                onClick={() => { setshowModal(true) }}
                className='py-2 px-6 border dark:border-slate-400 dark:text-gray-300 rounded-full gap-1 flex justify-center items-center bg-main-dark-bg my-0 w-40 float-right text-white font-bold font-Machina cursor-pointer hover:bg-slate-700'
            >
                Upload <AiOutlineCloudUpload />
            </button>


            {showModal ?
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                    ></div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-white dark:bg-secondary-dark-bg rounded-md shadow-lg">
                            <header className='font-Machina lg:text-xl text-lg font-bold p-2'>Upload an Assignment</header>

                            <div className='mt-6  px-3 w-full mx-auto'>
                                <form onSubmit={handleSubmit}>
                                    <div className='flex gap-3 '>
                                        <div className='flex flex-col  w-1/2 '>
                                            <select
                                                name="course"
                                                onChange={handleChange}
                                                value={input.course}
                                                className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina'
                                            >
                                                <option value="" disabled>Select Course</option>
                                                {courses.map((course, key) => (
                                                    <option key={key} value={course.courseCode}>
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
                                            />
                                            <small className='hidden'>Error message</small>
                                        </div>
                                    </div>

                                    <div className='flex gap-3 mt-6 mx-auto'>
                                        <div className='flex flex-col  w-1/2 '>
                                            <input
                                                type='date'
                                                name='first_name'
                                                value={input.date || ""}
                                                onChange={handleChange}
                                                className='p-2 border rounded-lg border-slate-300 my-0 placeholder:font-Machina'
                                                placeholder='First Name'
                                            />
                                            <small className='hidden'>Error message</small>
                                        </div>

                                        <div className='flex flex-col  w-1/2 '>
                                            <input
                                                type='file'
                                                name='file'
                                                // id='image'
                                                // accept='image/*'
                                                // onChange={handleImageSelect}
                                                className='block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
               file:bg-violet-50 file:text-slate-500
               hover:file:bg-main-dark-bg
                font-Machina'
                                            />
                                            <small className='hidden'>Error message</small>
                                        </div>
                                    </div>

                                    <div className='flex flex-col mt-6 w-full'>
                                        <textarea
                                            name='comment'
                                            value={input.comment || ""}
                                            onChange={handleChange}
                                            className=' bg-gray-100 h-40 rounded-lg placeholder:p-2 placeholder:font-Machina'
                                            placeholder='Comment'
                                        ></textarea>
                                        <small className='hidden'>Error message</small>
                                    </div>

                                    <div className='flex justify-between my-2'>
                                        <button
                                            className=" mt-2 p-2 w-40 text-gray-800 dark:text-black dark:bg-slate-300 rounded-md outline-none border "
                                            onClick={() => setshowModal(false)}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type='submit'
                                            // onClick={courseRegister}
                                            className='mt-2 p-2 w-40 text-white dark:text-black dark:bg-slate-500 rounded-md outline-none border  bg-main-dark-bg'
                                        >
                                            Upload
                                            {/* {!isLoading? <BsBoxArrowRight /> :
              <ScaleLoader
                color='#B7E8EB'
                // loading={isLoading}
                height={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            } */}


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
    )
}

export default UploadedAssignments