import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import loadDrilldown from 'highcharts/modules/drilldown';
import { useStateContext } from '../../../contexts/ContextProvider';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

loadDrilldown(Highcharts)

const Attendance = () => {
  const {screenSize, setscreenSize}= useStateContext()
  const select = useSelector(state=>state.user.userDetails.courses)

  const [values, setvalues] = useState([])

  useEffect(() => {

    select.map((items)=>{
      console.log(items)
      setvalues([
        {
          name: items.courseCode,
          y: items.courseUnit,
          drilldown: items.courseCode
         }
      ])
    })
    
  }, [select])
  
  console.log(values)
  console.log(select)

  useEffect(() => {
    
    const handleScreen=()=>{
      setscreenSize( window.innerWidth )
    }

    window.addEventListener("resize", handleScreen)

    handleScreen()
  
    return () => {
      window.removeEventListener("resize", handleScreen)
    }
  }, [setscreenSize])



  const options ={
    
    chart: {
      type: 'column',
      backgroundColor:'lightgray',
      borderRadius: 20,
      width: screenSize <900 ? 350 :1000,
      height: 500,
    },
    title: {
      align: 'left',
      text: 'Attendance Distribution Per course'
    },
    subtitle: {
      align: 'left',
      text: 'Click the columns to view the Weekly distribution per course'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total percent Attendance per Course'
      }
  
    },
    legend: {
      enabled: false
    },
    credits:{
      enabled: false
  },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
      {
        name: 'Courses',
        data: [
          {
            name: 'BIO 101',
            y: 78,
            drilldown: 'BIO 101'
           },
           {
            name: 'MTH 101',
            y: 87,
            drilldown: 'MTH 101'
           },
           {
            name: 'GST 101',
            y: 92,
            drilldown: 'GST 101'
           },
           {
            name: 'GST 103',
            y: 79.4,
            drilldown: 'GST 103'
           },
           {
            name: 'GST 105',
            y: 69.78,
            drilldown: 'GST 105'
           },
           {
            name: 'CSC 101',
            y: 82,
            drilldown: 'CSC 101'
           },
           {
            name: 'MTH 103',
            y: 70.12,
            drilldown: 'MTH 103'
           },
           {
            name: 'PHY 101',
            y: 84,
            drilldown: 'PHY 101'
           },
           {
            name: 'PHY 107',
            y: 100,
            drilldown: 'PHY 107'
           }
        ]
      }
    ],
    drilldown : {
      breadcrumbs: {
        position: {
          align: 'right'
        }
      },
      series: [
        {
          name: 'BIO 101',
          id: 'BIO 101',
          data: [
            [
              'Week 1',
              50
            ],
            [
              'Week 2',
              100
            ],
            [
              'Week 3',
              100
            ],
            [
              'Week 4',
              100
            ],
            [
              'Week 5',
              100
            ],
            [
              'Week 6',
              100
            ],
            [
              'Week 7',
              50
            ],
            [
              'Week 8',
              100
            ],
            [
              'Week 9',
              50
            ],
            [
              'Week 10',
              50
            ],
            [
              'Week 11',
              100
            ],
            [
              'Week 12',
              50
            ]
          ]
        },
        {
          name: 'MTH 101',
          id: 'MTH 101',
          data: [
            [
              'Week 1',
              50
            ],
            [
              'Week 2',
              100
            ],
            [
              'Week 3',
              100
            ],
            [
              'Week 4',
              100
            ],
            [
              'Week 5',
              100
            ],
            [
              'Week 6',
              100
            ],
            [
              'Week 7',
              50
            ],
            [
              'Week 8',
              100
            ],
            [
              'Week 9',
              50
            ],
            [
              'Week 10',
              50
            ],
            [
              'Week 11',
              100
            ],
            [
              'Week 12',
              50
            ]
          ]
        },
        {
          name: 'GST 101',
          id: 'GST 101',
          data: [
            [
              'Week 1',
              50
            ],
            [
              'Week 2',
              100
            ],
            [
              'Week 3',
              100
            ],
            [
              'Week 4',
              100
            ],
            [
              'Week 5',
              100
            ],
            [
              'Week 6',
              100
            ],
            [
              'Week 7',
              50
            ],
            [
              'Week 8',
              100
            ],
            [
              'Week 9',
              50
            ],
            [
              'Week 10',
              50
            ],
            [
              'Week 11',
              100
            ],
            [
              'Week 12',
              50
            ]
          ]
        },
        {
          name: 'GST 103',
          id: 'GST 103',
          data: [
            [
              'Week 1',
              50
            ],
            [
              'Week 2',
              100
            ],
            [
              'Week 3',
              100
            ],
            [
              'Week 4',
              100
            ],
            [
              'Week 5',
              100
            ],
            [
              'Week 6',
              100
            ],
            [
              'Week 7',
              50
            ],
            [
              'Week 8',
              100
            ],
            [
              'Week 9',
              50
            ],
            [
              'Week 10',
              50
            ],
            [
              'Week 11',
              100
            ],
            [
              'Week 12',
              50
            ]
          ]
        },
        {
          name: 'GST 105',
          id: 'GST 105',
          data: [
            [
              'Week 1',
              50
            ],
            [
              'Week 2',
              100
            ],
            [
              'Week 3',
              100
            ],
            [
              'Week 4',
              100
            ],
            [
              'Week 5',
              100
            ],
            [
              'Week 6',
              100
            ],
            [
              'Week 7',
              50
            ],
            [
              'Week 8',
              100
            ],
            [
              'Week 9',
              50
            ],
            [
              'Week 10',
              50
            ],
            [
              'Week 11',
              100
            ],
            [
              'Week 12',
              50
            ]
          ]
        },
        {
          name: 'CSC 101',
          id: 'CSC 101',
          data: [
            [
              'Week 1',
              50
            ],
            [
              'Week 2',
              100
            ],
            [
              'Week 3',
              100
            ],
            [
              'Week 4',
              100
            ],
            [
              'Week 5',
              100
            ],
            [
              'Week 6',
              100
            ],
            [
              'Week 7',
              50
            ],
            [
              'Week 8',
              100
            ],
            [
              'Week 9',
              50
            ],
            [
              'Week 10',
              50
            ],
            [
              'Week 11',
              100
            ],
            [
              'Week 12',
              50
            ]
          ]
        },
        {
          name: 'MTH 103',
          id: 'MTH 103',
          data: [
            [
              'Week 1',
              50
            ],
            [
              'Week 2',
              100
            ],
            [
              'Week 3',
              100
            ],
            [
              'Week 4',
              100
            ],
            [
              'Week 5',
              100
            ],
            [
              'Week 6',
              100
            ],
            [
              'Week 7',
              50
            ],
            [
              'Week 8',
              100
            ],
            [
              'Week 9',
              50
            ],
            [
              'Week 10',
              50
            ],
            [
              'Week 11',
              100
            ],
            [
              'Week 12',
              50
            ]
          ]
        },
        {
          name: 'PHY 101',
          id: 'PHY 101',
          data: [
            [
              'Week 1',
              50
            ],
            [
              'Week 2',
              100
            ],
            [
              'Week 3',
              100
            ],
            [
              'Week 4',
              100
            ],
            [
              'Week 5',
              100
            ],
            [
              'Week 6',
              100
            ],
            [
              'Week 7',
              50
            ],
            [
              'Week 8',
              100
            ],
            [
              'Week 9',
              50
            ],
            [
              'Week 10',
              50
            ],
            [
              'Week 11',
              100
            ],
            [
              'Week 12',
              50
            ]
          ]
        },
        {
          name: 'PHY 107',
          id: 'PHY 107',
          data: [
            [
              'Week 1',
              50
            ],
            [
              'Week 2',
              100
            ],
            [
              'Week 3',
              100
            ],
            [
              'Week 4',
              100
            ],
            [
              'Week 5',
              100
            ],
            [
              'Week 6',
              100
            ],
            [
              'Week 7',
              50
            ],
            [
              'Week 8',
              100
            ],
            [
              'Week 9',
              50
            ],
            [
              'Week 10',
              50
            ],
            [
              'Week 11',
              100
            ],
            [
              'Week 12',
              50
            ]
          ]
        },
      ]
    }
  };
return (
<>
<HighchartsReact highcharts={Highcharts} options={options}/>
</>
)
}

export default Attendance