import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';

const OverviewAttendance = () => {

  const {screenSize, setscreenSize}= useStateContext()

  useEffect(() => {
    
    const handleScreen=()=>{
      setscreenSize( window.innerWidth )
    }

    window.addEventListener("resize", handleScreen)

    handleScreen()
  
    return () => {
      window.removeEventListener("resize", handleScreen)
    }
  }, [])


    const options = {
        chart: {
          type: 'areaspline',
          backgroundColor:'lightgray',
          borderRadius: 20,
          width: screenSize <900 ? 350 :1000
        },
        title: {
          text: 'Attendance Summary',
          style: {
            color: "#0EA5E9",
            fontFamily: 'serif'
          }
        },
        xAxis: {
            categories: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9'],
            labels: {
                overflow: 'justify'
              }
        },
        yAxis: {
            title: {
                text: "No of Classes Attended"
            }
        },
        credits:{
            enabled: false
        },
        series: [
          {
            name: "Weekly OverviewAttendance",
            data: [1, 2, 1, 4, 3, 6, 3, 4, 8],
          }
        ]
      };
  return (
    <>
    <HighchartsReact highcharts={Highcharts} options={options}/>
    </>
  )
}

export default OverviewAttendance