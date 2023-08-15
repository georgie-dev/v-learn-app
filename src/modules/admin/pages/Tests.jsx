import React from 'react'
import { Header} from '../../../components'
import { useState } from 'react'
import {CreateAssessment} from '../components'
import {BsPlusCircleFill} from 'react-icons/bs'

const CourseMaterials = () => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
            <Header category='Pages' title="Assessments" />
            <div>
                <div className='flex justify-end'>
                    <button
                        onClick={openModal}
                        className='py-2 px-6 border rounded-md gap-3 flex justify-center items-center bg-main-dark-bg my-0 w-fit float-right text-white font-bold font-Machina cursor-pointer hover:bg-slate-700'
                    >
                        Create Assessment <BsPlusCircleFill/>
                    </button>
                </div>
                {showModal ?
                <CreateAssessment uploadType='course material' closeModal={closeModal}/>
                    :
                    null}
            </div>
        </div>
    )
}

export default CourseMaterials