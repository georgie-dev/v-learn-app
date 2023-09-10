import React, { useEffect } from 'react'
import { Header, Table } from '../../../components'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useState } from 'react'
import { useSelector} from 'react-redux'
import axiosInstance from '../../auth/axios'
import {Upload} from '../../../components'

const CourseMaterials = () => {
    const [showModal, setShowModal] = useState(false)
    const [courseList, setCourseList] = useState([])

    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };

    const { title, firstname } = useSelector(state => state.user.userDetails)

    const lecturer = title + ' ' + firstname
    const headerList = ['Course', 'Title', 'Upload Date', 'Download']

    useEffect(() => {
        axiosInstance.get(`api/coursematerials/?lecturer=${lecturer}`)
            .then((data) => {
                setCourseList(data.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [lecturer, firstname, title])


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
                        onClick={openModal}
                        className='py-2 px-6 border rounded-md gap-1 flex justify-center items-center bg-main-dark-bg my-0 w-40 float-right text-white font-bold font-Machina cursor-pointer hover:bg-slate-700'
                    >
                        Upload <AiOutlineCloudUpload />
                    </button>
                </div>
                <Table arg={courseList} headers={headerList}></Table>
                {showModal ?
                <Upload uploadType='course material' closeModal={closeModal}/>
                    :
                    null}
            </div>
        </div>
    )
}

export default CourseMaterials