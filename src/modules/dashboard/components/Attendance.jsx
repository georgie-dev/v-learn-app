import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Attendance = () => {

    const options = {
        chart: {
          type: 'areaspline',
          backgroundColor:'lightgray',
          borderRadius: 20
        },
        title: {
          text: 'Total Attendance',
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
            name: "Weekly Attendance",
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

export default Attendance