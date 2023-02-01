import React from 'react'
import {Header} from '../components'
import axios from 'axios'
import { useState } from 'react'

const Tests = () => {
  const [data, setdata] = useState([])

  const getList =async()=>{
    axios.get('/students/')
    .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }

  console.log(data)
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
    <Header category='Pages' title="Tests" />
    <button
    onClick={getList}
    >Get Data</button>
    </div>
  )
}

export default Tests