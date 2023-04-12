import React from 'react';
import { RxCaretLeft } from 'react-icons/rx'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axiosInstance from '../../auth/axios'
import { Table } from '../../../components'


const Course = () => {

  const { id } = useParams()

  const [courseMaterials, setCourseMaterials] = useState([])


  const headerList=['Course', 'Title', 'Due Date', 'Download']

  useEffect(() => {
      axiosInstance.get(`/api/coursematerials/?course=${id}`)
          .then((data) => {
              setCourseMaterials(data.data.results)
          })
          .catch((error) => {
              console.log(error)
          })
  }, [id])


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <div className='mb-4 p-4'>
        <RxCaretLeft
          className='text-4xl text-gray-400 font-Machina cursor-pointer hover:text-gray-800'
          onClick={() => { window.history.back() }}
        />
        <h3 className='text-lg font-display font-extrabold tracking-tight text-slate-900 dark:text-slate-400'>Go Back</h3>
      </div>
      <div className=' w-full mt-12 p-2 h-auto flex flex-wrap gap-3 items-center justify-center'>
        <Table arg={courseMaterials} headers={headerList}></Table>
      </div>
    </div>
  )
}

export default Course