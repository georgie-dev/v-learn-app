import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import axiosInstance from '../../auth/axios'
import { AiFillFileAdd } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import { dateFormatter } from '../../../components'


const Tests = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { courses } = useSelector(state => state.user.userDetails);
  const courseCodes = courses.map(course => course.courseCode);
  const joinedCourseCodes = courseCodes.join(',');
  const currentDate = new Date()

  useEffect(() => {
    const fetchClass = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/api/quizzes/filter_by_course/', {
          params: { course: joinedCourseCodes }
        });
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchClass();

  }, [joinedCourseCodes]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
      <Header category='Pages' title="Tests" />
      <div className='p-5 h-auto block gap-4 mt-12 w-full'>
        {
          loading ?
            <div className='flex flex-col justify-center items-center h-80 mx-auto'>

              <ScaleLoader
                color='#B7E8EB'
                loading={loading}
                height={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
            :
            data.length === 0 ?
              <div className='flex flex-col justify-center items-center h-80 mx-auto bg-light-gray'>
                <AiFillFileAdd className='text-6xl text-gray-300' />
                <p className='text-gray-300 text-2xl font-Machina'>No class yet</p>
              </div>
              :
              <table className='mx-auto w-full rounded-xl'>
                <thead className='bg-light-gray border rounded-md'>
                  <tr className='text-black text-sm lg:text-lg  dark:text-gray-300 rounded-t-xl'>
                    <th className='lg:px-16 text-center p-5 font-bold font-Machina lg:text-md' scope="col">Course</th>
                    <th className='lg:px-16 text-center p-5 font-bold font-Machina lg:text-md' scope="col">Assessment Date</th>
                    <th className='lg:px-16 text-center p-5 font-bold font-Machina lg:text-md' scope="col">Status</th>
                  </tr>
                </thead>
                <tbody className='mt-10'>
                  {data.slice(0).reverse().map((data) => (
                    <tr key={data.id} className=' w-full rounded-lg text-slate-900 mt-10 bg-white dark:text-gray-200'>
                      <td className='lg:px-16 text-center p-5 text-xs lg:text-sm font-semibold font-inter '>{data.course}</td>
                      <td className='lg:px-16 text-center p-5 text-ellipsis text-xs lg:text-sm font-semibold font-inter '>{dateFormatter(data.assessment_date)}</td>
                      <td className='lg:px-16 text-center p-5 text-xs lg:text-sm font-semibold font-inter '>
                        <Link to={currentDate < new Date(data.assessment_date) ? null : `/dashboard/assessments/${data.id}`}
                          className={`rounded-md py-3 shadow-md px-6 text-white text-md font-semibold ${currentDate < new Date(data.assessment_date) ? 'bg-gray-400 cursor-not-allowed' :'bg-blue-400 cursor-pointer'}`}
                        >{currentDate < new Date(data.assessment_date) ? 'Not available Yet' : 'Take Test'}
                        </Link>
                      </td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
        }
      </div>
    </div>

  )
}

export default Tests