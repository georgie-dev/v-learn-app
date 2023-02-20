import React from 'react'
import { Header } from '../../../components'
import { AiOutlineCloudDownload, AiOutlineCloudUpload } from 'react-icons/ai'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const CourseMaterials = () => {
  const select= [1,2,3,4,5,6,7,8,9,10]
  const [showModal, setshowModal] = useState(false)
  const [input, setInput] = useState({})

  const { courses } = useSelector(state => state.user.userDetails)

  const handleChange = (event)=>{
  const name = event.target.name;
  const value = event.target.value;
  setInput(values => ({ ...values, [name]: value }))
  }

  const handleSubmit= (e) =>{
      e.preventDefault()
      console.log(input)
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
    <Header category='Pages' title="Course Materials" />

    <div>
        <div className='flex justify-between my-2'>
        <input
      type='search'
      placeholder='Search by keyword'
      className='border px-3 py-1 w-80 rounded-md placeholder:font-rokkitt text-gray-50 dark:text-slate-600'
      />
                  <button
                onClick={() => { setshowModal(true) }}
                className='py-2 px-6 border rounded-full gap-1 flex justify-center items-center bg-main-dark-bg my-0 w-40 float-right text-white font-bold font-Machina cursor-pointer hover:bg-slate-700'
            >
                Upload <AiOutlineCloudUpload />
            </button>
        </div>
      <div className='mt-6 w-full '>
      <table className='mx-auto w-full rounded-md border'>
          <thead>
            <tr className='text-black text-sm lg:text-lg  dark:text-gray-300 border rounded-md'>
                <th className=' text-center p-3 font-bold font-Machina lg:text-md' scope="col">Course Code</th>
                <th className=' text-center p-3 font-bold font-Machina lg:text-md' scope="col">Title</th>
            </tr>
          </thead>
          <tbody className='mt-10'>
            {select.map((data)=>(
              <tr key={data} className=' border-b p-4 rounded-lg text-slate-900 odd:bg-gray-200 mt-12  odd:dark:bg-slate-500 dark:text-gray-200'>
                <td className=' text-center p-3 text-xs lg:text-sm font-bold font-display '>SEN 102</td>
                <td className=' text-center p-3 text-xs lg:text-sm font-bold font-display '> Complete AI</td>
                <td className=' justify-center items-center p-3 text-xs lg:text-sm font-bold font-display  flex gap-2'>
                  <button
                  type='button'
                  className= ' bg-sky-700 px-4 py-1 gap-1 rounded-full flex text-white font-bold items-center hover:bg-sky-900'
                  >
                    <AiOutlineCloudDownload className=' text-lg'/><span className='hidden lg:flex'>Download</span>
                  </button>
                </td>
              </tr>
            ))
              
            }
          </tbody>
        </table>
      </div>
      {showModal ?
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                    ></div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-white dark:bg-secondary-dark-bg rounded-md shadow-lg">
                            <header className='font-Machina lg:text-xl text-lg font-bold p-2'>Upload a Course Material</header>

                            <div className='mt-6 lg:px-8 px-3 w-100 lg:w-7/12 mx-auto'>
                                <form onSubmit={handleSubmit}>
                                    <div className='flex gap-3  mx-auto'>
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

                                        <div className='flex flex-col  w-full my-6 '>
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
                                            className= 'mt-2 p-2 w-40 text-white bg-main-dark-bg dark:text-black dark:bg-slate-300 rounded-md outline-none'
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
    </div>
  )
}

export default CourseMaterials