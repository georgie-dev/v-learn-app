import React from 'react'
import Download from './Download'
import {AiFillFileAdd} from 'react-icons/ai'
import { dateFormatter } from '.'

const Table = ({arg=[], headers=[]}) => {
  return (
    <div className='shadow-md rounded-xl'>
    {arg.length === 0 ?
        <div className='flex flex-col justify-center items-center h-80 mx-auto'>
            <AiFillFileAdd className='text-6xl text-gray-300' />
            <p className='text-gray-300 text-2xl font-Machina'>No data to display</p>
        </div>
        :
        <table className='mx-auto w-full rounded-xl'>
        <thead>
          <tr className='text-black text-sm lg:text-lg  dark:text-gray-300 rounded-t-xl'>
            {headers.map((list)=>(
              <th key={list} className='lg:px-16 text-center p-3 font-bold font-Machina lg:text-md' scope="col">{list}</th>
            ))}
          </tr>
        </thead>
        <tbody className='mt-10'>
          {arg.slice(0).reverse().map((data) => (
            <tr key={data.id} className=' border-b p-4 rounded-lg text-slate-900 odd:bg-gray-200 mt-12  odd:dark:bg-slate-500 dark:text-gray-200'>
              <td className='lg:px-16 text-center p-3 text-xs lg:text-sm font-semibold font-inter '>{headers[0]=== 'Student' ? data.student : data.course}</td>
              <td className='lg:px-16 text-center p-3 text-ellipsis text-xs lg:text-sm font-semibold font-inter '>{data.title}</td>
              <td className='lg:px-16 text-center p-3 text-xs lg:text-sm font-semibold font-inter '>{dateFormatter(data.uploaded_at|| data.due_date || data.submit_date)}</td>
              <td className='lg:px-16 justify-center items-center p-3 text-xs lg:text-sm font-semibold font-inter  flex gap-2'>
                <Download arg={data.file} fileName={headers[0]=== 'Student' ? `${data.student} ${data.title}` :`${data.course} ${data.title}`}/>
              </td>
            </tr>
          ))

          }
        </tbody>
      </table>
    }
</div>
  )
}

export default Table