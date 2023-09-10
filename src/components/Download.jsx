import axios from 'axios'

import { AiOutlineCloudDownload } from "react-icons/ai";

const Download= ({arg='george.png', fileName='Lecture Note'})=>{
    const handleDownload = async(arg)=>{
        try{
            await axios.get(arg, {
                responseType: 'blob',
            })
                .then(blob=>{
                    const file =blob.data
                    const url =window.URL.createObjectURL(file)
                    const link = document.createElement('a')
                    link.href= url;
                    link.setAttribute('download', fileName)
                    link.click();
                })
            // window.URL.revokeObjectURL(arg);
        } catch(error){
            console.error('Download Failed:', error);
        }
    };

    return (
        <button
        className=' bg-sky-700 px-4 py-1 gap-1 rounded-full flex text-white font-bold items-center hover:bg-sky-900' rel="noreferrer"
        onClick={()=> handleDownload(arg)}
        >
          <AiOutlineCloudDownload className='text-lg' /><span className='hidden lg:flex'>Download</span>
        </button>
    )
}

export default Download