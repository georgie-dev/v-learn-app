import React from 'react';
import { RxCaretLeft} from 'react-icons/rx'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axiosInstance from '../modules/auth/axios'
import { Table } from '.'
import {Upload} from '.';


const Assignment = ({ page }) => {

  const { id } = useParams()

  const [assignments, setAssignments] = useState([])

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const headerList = ['Course', 'Title', 'Due Date', 'Download']
  const SubHeaderList= ['Student', 'Title', 'Submitted Date', 'Download']

  useEffect(() => {
    axiosInstance.get(`/api/${page}/?course=${id}`)
      .then((data) => {
        setAssignments(data.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id, page])


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <div className='mb-4 p-4'>
        <RxCaretLeft
          className='text-4xl text-gray-400 font-Machina cursor-pointer hover:text-gray-800'
          onClick={() => { window.history.back() }}
        />
        <h3 className='text-lg font-display font-extrabold tracking-tight text-slate-900 dark:text-slate-400'>Go Back</h3>
      </div>

      <div className='flex justify-between items-center'>
        <h3 className='text-lg px-4 py-2 font-display font-extrabold tracking-tight text-slate-400'>{id}</h3>
        {page === 'uploadassignment' ?
          <button
            onClick={openModal}
            className='py-2 px-6 border rounded-md gap-1 flex justify-center items-center bg-main-dark-bg mt-0 w-fit float-right text-white font-bold font-Machina cursor-pointer hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-gray-500'
            disabled={assignments.length === 0}
          >
            Submit an Assignment <AiOutlineCloudUpload />
          </button>
          : null}
      </div>
      <div className=' w-full mt-12'>
        <Table arg={assignments} headers={page === 'uploadassignment' ? headerList : SubHeaderList}></Table>
      </div>
      {showModal ?
        <Upload id={id} closeModal={closeModal} />
        :
        null}
    </div>
  )
}

export default Assignment