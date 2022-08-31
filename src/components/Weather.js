import React from "react";
import axios from "axios";
import "./Weather.css";
import moment from "moment";
import Weekweather from "./Weekweather";
import Lineweat from "./Lineweat"
export default function Weather(props) {
  // const [weather, setweather] = React.useState({});
  // React.useEffect(() => {
  //   if(navigator.geolocation){
  //   const pos =   navigator.geolocation.getCurrentPosition((position) => {
  //       const lat = position.coords.latitude;
  //       const lon = position.coords.longitude;
  //       console.log(lat,lon);

  //       const getdata = async () => {
  //         const res = await axios.get(
  //           `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a487c3bb7ab43c488491055537f89ca9&units=metric`
  //         );
  //         console.log(res);
  //         setweather(res.data);
  //       };
  //       getdata();
  //     })
  //     }else{
  //       alert("Geoloaction is not supported in your browser")
  //     }
  // }, []);
  //
  const [LineChart, setLineChart] = React.useState({});
  const again = async () =>{
     const res = await axios.get( `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.coord.lat}&lon=${props.data.coord.lon}&units=metric&appid=a487c3bb7ab43c488491055537f89ca9&units=metric`)
    // console.log(res.data)
     setLineChart(res.data)
  }
  React.useEffect(() => {
    
   again();
   
  }, [])
  

  return props.data.main != undefined ? (
    <div className=''>
      <div className="main" style={{}}>
        <div className="container " style={{margin:"20px auto" ,minHeight:"490px"}}>
           <div className='row pt-4 ' style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '30px', Height: '250px' }}>
            
              <div className='col-lg-5 col-md-12 col-sm-12 d-flex justify-content-around flex-column' style={{}}>
                <div className="main_details d-flex justify-content-center ">
                      <img id="img" src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`} alt={props.data.weather[0].description} />
                      {/* <p>{props.data.weather[0].description}</p> */}
                      <span id="temp">
                            {(props.data.main.temp).toFixed(0)}<sup>o</sup>C
                          
                      </span>
                </div>
                <div className="description">
                     <p>{props.data.weather[0].description}</p>
                     <p> feels like {(props.data.main.feels_like).toFixed(0)}<sup>o</sup>C</p>
                    
                </div>
              </div>
              <div className='col-md-12 col-lg-7 col-sm-12 d-flex justify-content-around align-items-center mt-4'style={{}} >
                 <div className="temp_details">
                     <div className="one">
                       <p>min temp</p>
                       <p><img id="temp_icon" src="https://cdn-icons-png.flaticon.com/512/6726/6726889.png" alt="loading" />&nbsp;&nbsp;{props.data.main.temp_min}<sup>o</sup>C</p>
                     </div>
                     <div className="one">
                       <p>max temp</p>
                       <p><img id="temp_icon" src="https://cdn-icons-png.flaticon.com/128/1684/1684375.png"  alt="loading" />&nbsp;&nbsp;{props.data.main.temp_max}<sup>o</sup>C</p>
                     </div>
                     <div className="one">
                       <p>pressure</p>
                       <p><img src="https://img.icons8.com/color/344/barometer-gauge.png"  id="temp_icon" alt="loading"/>&nbsp;&nbsp;{props.data.main.pressure} hPa</p>
                     </div>
                     <div className="one">
                       <p>humidity</p>
                       <p ><img id="temp_icon" src={'https://cdn-icons-png.flaticon.com/512/578/578135.png'} alt="loading"/>&nbsp;&nbsp;{props.data.main.humidity} %</p>
                     </div>
                </div>   
                 <div className="temp_details">
                     <div className="one">
                       <p>wind speed</p>
                       <p><img src="https://img.icons8.com/arcade/2x/experimental-wind-arcade.png"  id="temp_icon" alt="loading"/>&nbsp;&nbsp;{props.data.wind.speed} km</p>
                     </div>
                     <div className="one">
                       <p>sunrise</p>
                       <p><img src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/2x/external-sunrise-weather-tulpahn-outline-color-tulpahn.png"  id="temp_icon"alt="loading" />&nbsp;&nbsp;{moment.unix(props.data.sys.sunrise).format("h:mm a")}</p>
                     </div>
                     <div className="one">
                       <p>sunset</p>
                       <p><img id="temp_icon" src="https://img.icons8.com/external-tulpahn-flat-tulpahn/2x/external-sunset-weather-tulpahn-flat-tulpahn.png" alt="loading" />&nbsp;&nbsp;{moment.unix(props.data.sys.sunset).format("h:mm a")}</p>
                     </div>
                     <div className="one">
                       <p>clouds</p>
                       <p ><img src={'https://cdn-icons-png.flaticon.com/512/414/414825.png'} id="temp_icon" alt="loading"/>&nbsp;&nbsp;{props.data.clouds.all} %</p>
                     </div>
                </div>   
                     
             </div>     
           </div>    
        </div>
     </div>
      <Lineweat data = {LineChart}/>
      <Weekweather data2={props.data} />
          </div>
  ) : null;
}
