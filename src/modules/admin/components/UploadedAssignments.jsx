import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axiosInstance from '../../auth/axios'
import { Table } from '../../../components'
import { Upload } from '.'

const UploadedAssignments = () => {
    const [showModal, setShowModal] = useState(false)
    const [assignments, setAssignments] = useState([])

    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };

    const { title, firstname } = useSelector(state => state.user.userDetails)

    const lecturer = title + ' ' + firstname

    const headerList = ['Course', 'Title', 'Due Date', 'Download']

    useEffect(() => {
        axiosInstance.get(`/api/uploadassignment/?lecturer=${lecturer}`)
            .then((data) => {
                setAssignments(data.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [lecturer, firstname, title])

    return (
        <div>
            <div className='flex justify-end my-4'>
                <button
                    onClick={openModal}
                    className='py-2 px-6 border rounded-md gap-1 flex justify-center items-center bg-main-dark-bg mt-0 w-40 float-right text-white font-bold font-Machina cursor-pointer hover:bg-slate-700'
                >
                    Upload <AiOutlineCloudUpload />
                </button>
            </div>
            <Table arg={assignments} headers={headerList}></Table>
            {showModal ?
                <Upload uploadType='assignment' closeModal={closeModal} />
                :
                null}
        </div>
    )
}

export default UploadedAssignments