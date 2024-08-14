
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar , Doughnut} from "react-chartjs-2";
import { useState } from "react";
import EyeIcon from "../../../shared/icons/EyeIcon";
import DevicesIcon from "../../../shared/icons/DevicesIcon";
import ClockIcon from "../../../shared/icons/ClockIcon";

Chart.register(CategoryScale); 

const Charts = () => {

    const Data = [
        {
          id: 1,
          day: 'M',
          views: 45
        },
        {
          id: 2,
          day: 'T',
          views: 20
        },
        {
          id: 3,
          day: 'W',
          views: 10
        },
        {
          id: 4,
          day: 'T',
          views: 20
        },
        {
          id: 5,
          day: 'F',
          views: 45
        },
        {
            id: 6,
            day: 'S',
            views: 10
        },
        {
            id: 7,
            day: 'S',
            views: 40
        }
    ];

    const DataH = [
        {
          id: 1,
          hour: '00:00',
          views: 27
        },
        {
          id: 2,
          hour: '01:00',
          views: 18
        },
        {
          id: 3,
          hour: '02:00',
          views: 27
        },
        {
          id: 4,
          hour: '03:00',
          views: 28
        },
        {
          id: 5,
          hour: '04:00',
          views: 45
        },
        {
            id: 6,
            hour: '05:00',
            views: 40
        },
        {
            id: 7,
            hour: '06:00',
            views: 45
        },
        {
            id: 8,
            hour: '07:00',
            views: 5
          },
          {
            id: 9,
            hour: '08:00',
            views: 30
          },
          {
            id: 10,
            hour: '09:00',
            views: 25
          },
          {
              id: 11,
              hour: '10:00',
              views: 45
          },
          {
              id: 12,
              hour: '11:00',
              views: 43
          },
          {
              id: 13,
              hour: '12:00',
              views: 2
          }
    ];

    const DataD = [
        {
          id: 1,
          type: 'Android',
          views: 40
        },
        {
          id: 2,
          type: 'IOS',
          views: 10
        },
        {
          id: 3,
          type: 'Windows',
          views: 30
        },
        {
          id: 4,
          type: 'Linux',
          views: 20
        }
    ];
    
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.day), 
        datasets: [
          {
            label: "views",
            data: Data.map((data) => data.views),
            backgroundColor: "#313A4E",
            hoverBackgroundColor: '#65b946',
            barThickness: 10,
            borderRadius: 3,
          }
        ]
    });

    const [chartDataH, setChartDataH] = useState({
        labels: DataH.map((data) => data.hour), 
        datasets: [
          {
            label: "views",
            data: DataH.map((data) => data.views),
            backgroundColor: "#313A4E",
            hoverBackgroundColor: '#65b946',
            barThickness: 10,
            borderRadius: 3,
          }
        ]
    });

    const [chartDataD, setChartDataD] = useState({
        labels: DataD.map((data) => data.type), 
        datasets: [
          {
            label: "",
            data: DataD.map((data) => data.views),
            backgroundColor: [
                '#f0f2f5',
                '#ef4444',
                '#313A4E',
                '#65b946',
            ],
            hoverOffset: 4,
            
          }
        ]
    });

    
    
    return (
        <div className="container px-5 m-auto mb-10">
            <div className='flex flex-wrap justify-between  gap-5'>
                <div className="w-full sm:w-[63%] bg-white rounded-lg p-2">
                    <div className='flex justify-between mb-2'>
                        <h2 className='flex items-center gap-2' style={{ textAlign: "center" }}>
                            <EyeIcon />
                            Website views
                        </h2>
                        <div className='flex items-center gap-2'>
                            <p className='text-xs'>updated <span className='text-main-color'>1hour</span> ago</p>
                            <button className="btn border-none btn-sm bg-main-color text-white hover:bg-second-color">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6998 2.92664L15.6204 4.27208C14.3294 2.38304 12.5558 1.21424 10.2998 0.765916C8.0304 0.331036 5.93064 0.759196 4.0008 2.05016C2.08464 3.34112 0.909123 5.12144 0.474243 7.39112C0.025683 9.67424 0.447123 11.774 1.73808 13.6902C3.04272 15.6063 4.82304 16.7888 7.07904 17.2371H7.09944C9.36888 17.672 11.4619 17.2438 13.3781 15.9529C15.2671 14.689 16.4426 12.9495 16.9046 10.7343C16.9046 10.7206 16.2523 10.5781 14.9477 10.3062C14.5944 11.9914 13.6973 13.3232 12.2568 14.3017C10.8026 15.2802 9.21264 15.5996 7.48656 15.2598C5.74704 14.9199 4.38792 14.023 3.40944 12.5689C2.41728 11.101 2.09112 9.50432 2.43096 7.77824C2.7708 6.0524 3.66768 4.7 5.12184 3.72152C6.58968 2.72936 8.1864 2.4032 9.91248 2.74304H9.93288C11.6316 3.0692 12.977 3.95264 13.9692 5.39312L11.7881 6.94232L16.7417 8.0228L17.6998 2.9264V2.92664Z" fill="white"/>
                                </svg>
                                refresh
                            </button>
                        </div>
                        
                    </div>
                    <Bar
                    data={chartData}
                    options={{
                        scales: {
                            y: {
                                max: 50,
                                min: 0,
                                ticks: {
                                    stepSize: 10
                                }
                            }
                        },
                        plugins: {
                            title: {
                                display: false,
                            },
                            legend: {
                                display: false
                            }
                        }
                    }}
                    />
                </div>
                <div className="w-full sm:w-[33%] bg-white rounded-lg p-2">
                    <div className='flex justify-between items-center h-[32px] mb-2'>
                        <h2 className='flex items-center gap-2' style={{ textAlign: "center" }}>
                        <DevicesIcon />
                            Devices Used
                        </h2>
                    </div>
                    <Doughnut
                    data={chartDataD}
                    options={{
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return `${context.formattedValue}%`;
                                    },
                                },
                                displayColors: false,
                            },
                            title: {
                                display: false,
                                text: "Devices"
                            },
                            legend: {
                                display: true
                            }
                        }
                    }}
                    />
                </div>
            </div>
            <div className="bg-white rounded-lg p-2 my-5">
                <div className='flex justify-between mb-2'>
                    <div className='flex items-center gap-2 ' style={{ textAlign: "center" }}>
                        <ClockIcon />
                        <div>
                            <p className='text-sm text-start'>Site Attendance Times</p>
                            <p className='text-main-color text-sm text-start'>last 12 hours</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className=''>11:35:12 PM</p>
                    </div>
                </div>
                <Bar
                    data={chartDataH}
                    options={{
                        scales: {
                            y: {
                                max: 50,
                                min: 0,
                                ticks: {
                                    stepSize: 10
                                }
                            }
                        },
                        plugins:{
                            title: {
                                display: false,
                            },
                            legend: {
                                display: false,
                            },
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Charts



