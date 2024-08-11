
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar , Doughnut} from "react-chartjs-2";
import { useState } from "react";

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
                            <svg width="18" height="18" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.56 7.52472C14.5695 -1.42776 7.52936 -1.36176 0.440002 7.72248C7.67792 16.3452 14.7178 16.2792 21.56 7.52472ZM15.9709 7.59888C15.9709 8.98368 15.4844 10.1626 14.5117 11.1353C13.539 12.108 12.3601 12.5945 10.9753 12.5945C9.59048 12.5945 8.43632 12.108 7.4636 11.1353C6.47432 10.1626 5.97968 8.98368 5.97968 7.59888C5.97968 6.21408 6.47432 5.05992 7.4636 4.0872C8.43632 3.09792 9.60704 2.60328 10.9753 2.60328C12.3435 2.60328 13.539 3.09792 14.5117 4.0872C15.4844 5.05992 15.9709 6.23064 15.9709 7.59888ZM13.5226 8.09352C13.4403 7.92864 13.3249 7.79664 13.1763 7.69776C13.028 7.59888 12.8713 7.54944 12.7064 7.54944C12.2943 7.54944 11.948 7.40112 11.6677 7.10424C11.3708 6.82392 11.2225 6.47784 11.2225 6.06552C11.2225 5.80176 11.2801 5.56272 11.3955 5.3484C11.3626 5.00208 11.1978 4.82904 10.9009 4.82904C10.1425 4.82904 9.49112 5.10096 8.94704 5.64504C8.40296 6.17256 8.13104 6.82392 8.13104 7.59888C8.13104 8.37384 8.40296 9.03336 8.94704 9.57744C9.49112 10.1215 10.1422 10.3934 10.9009 10.3934C11.6595 10.3934 12.3354 10.1215 12.8794 9.57744C13.0938 9.36312 13.2668 9.13224 13.3988 8.88504L13.6213 8.2668C13.5884 8.21736 13.5553 8.15952 13.5224 8.09376L13.5226 8.09352Z" fill="#313A4E"/>
                            </svg>
                            Website views
                        </h2>
                        <div className='flex items-center gap-2'>
                            <p className='text-xs'>updated <span className='text-[#65b946]'>1hour</span> ago</p>
                            <button className="btn border-none btn-sm bg-[#65b946] text-white hover:bg-[#313A4E]">
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
                        <svg fill="#313A4E" height="18px" width="18px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 396 396" xmlSpace="preserve">
                            <path d="M390,190.762h-47.635v-48.824c0-4.142-3.357-7.5-7.5-7.5h-16.932V46.346c0-5.523-4.478-10-10-10H10c-5.523,0-10,4.477-10,10
                            v191.182c0,5.523,4.477,10,10,10h103.467c-1.99,11.434-6.269,30.326-14.881,49.079c-1.422,3.096-1.169,6.703,0.67,9.571
                            c1.839,2.868,5.011,4.603,8.418,4.603h70.528v26.272c0,4.142,3.357,7.5,7.5,7.5h107.975v9.101c0,3.313,2.687,6,6,6H390
                            c3.314,0,6-2.687,6-6V196.762C396,193.448,393.314,190.762,390,190.762z M178.202,141.938v85.591H20V56.346h277.934v78.091H185.702
                            C181.56,134.438,178.202,137.795,178.202,141.938z M293.677,329.553H193.202v-8.709h59.583v0.704c0,4.143,3.357,7.5,7.5,7.5
                            c4.143,0,7.5-3.357,7.5-7.5v-0.704h25.892V329.553z M293.677,196.762v109.082H193.202V149.438h134.163v41.324h-27.688
                            C296.363,190.762,293.677,193.448,293.677,196.762z M384,347.654h-78.323v-7.065h33.162v0.597c0,3.314,2.686,6,6,6
                            c3.313,0,6-2.686,6-6v-0.597H384V347.654z M384,328.588h-78.323V221.827H384V328.588z M384,209.827h-78.323v-7.065H384V209.827z"/>
                        </svg>
                            Devices Used
                        </h2>
                        <p className='font-bold text-[#65b946]'>"%"</p>
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
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.8281 0.584381C7.66866 0.584381 6.5805 0.803021 5.56314 1.24054C4.53498 1.67806 3.64098 2.27686 2.88066 3.03694C2.12058 3.79702 1.52178 4.69126 1.08426 5.71942C0.64674 6.73654 0.428101 7.82494 0.428101 8.98438C0.428101 10.1438 0.64674 11.232 1.08426 12.2493C1.52178 13.2775 2.12058 14.1715 2.88066 14.9318C3.64074 15.6919 4.53498 16.2907 5.56314 16.7282C6.58026 17.1657 7.66866 17.3844 8.8281 17.3844C9.98754 17.3844 11.0757 17.1657 12.0931 16.7282C13.1212 16.2907 14.0152 15.6919 14.7755 14.9318C15.5359 14.1717 16.1344 13.2775 16.5719 12.2493C17.0095 11.2322 17.2281 10.1438 17.2281 8.98438C17.2281 7.82494 17.0095 6.73678 16.5719 5.71942C16.1344 4.69126 15.5356 3.79726 14.7755 3.03694C14.0155 2.27686 13.1212 1.67806 12.0931 1.24054C11.0759 0.803021 9.98754 0.584381 8.8281 0.584381ZM11.2399 12.8726L7.7781 9.42742V4.78438H9.8781V8.54134L12.7163 11.3961L11.2399 12.8726Z" fill="#313A4E"/>
                        </svg>
                        <div>
                            <p className='text-sm text-start'>Site Attendance Times</p>
                            <p className='text-[#65b946] text-sm text-start'>last 12 hours</p>
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



