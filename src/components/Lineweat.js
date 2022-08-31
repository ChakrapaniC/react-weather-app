import React, { PureComponent } from 'react';
import Linechart from './Linechart';
import { Line } from "react-chartjs-2";
import moment from 'moment';

export default function Lineweat(props) {
    function timeconvert(time) {
        var myDate = new Date(time * 1000);
        return myDate.toLocaleTimeString();
    }
    const { data } = props;
    //console.log(props )
    const [userData, setUserData] = React.useState({ labels: ['a', 'b', 'c'], datasets: [{ data: [1, 2, 3] }] });
    React.useEffect(() => {
        
        if(Object.keys(data).length >0 ){
            setUserData({
                labels: data?.hourly.slice(0, 24).map((item) => timeconvert(item.dt)),
                datasets: [
                    {
                        label: "Next 24 Hours Temp.",
                        data: data?.hourly.slice(0, 24).map((item) => item.temp),
                        borderColor: "#fbbc04",
                        fill: true,
                        backgroundColor : 'rgba(255, 204, 0, 0.2)',
                        borderWidth: 2,
                    },
                ],
            })
        }
        // console.log('hi' , data)
    }, [data]);
    return (
        <div className='container' style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '50px 0',borderRadius: '30px' }}>
             <Line style={{ height: '400px', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '15px', padding: "10px" }} data={userData} options={{ maintainAspectRatio: false }} option={{
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'black',
                            font: {
                                size: 18,
                                family: 'Source Sans Pro'
                            }
                        }
                    }
                },
                scales: {
                    yAxes: {
                        grid: {
                            drawBorder: true,
                            color: '#fff',
                        },
                        ticks: {
                            beginAtZero: true,
                            color: '#fff',
                            fontSize: 14,
                        }
                    },
                    xAxes: {
                        grid: {
                            drawBorder: true,
                            color: '#ffff',
                        },
                        ticks: {
                            beginAtZero: true,
                            color: '254e58',
                            fontSize: 14,
                        }
                    },
                }
            }} />
        </div>
    )
}

