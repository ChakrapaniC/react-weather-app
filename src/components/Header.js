import React from "react";
import Weather from "./Weather";
import axios from 'axios';
import moment from "moment-timezone";
import './Header.css'

export default function Header() {
  const current = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = `  ${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const show = days[`${current.getDay()}`];

  const [weather, setWeather] = React.useState({});
  const [city, setCity] = React.useState("mumbai");
  
  async function getweather() {
    
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a487c3bb7ab43c488491055537f89ca9&units=metric`);
      console.log(data);
      setWeather(data);
      setCity('')
      
    } catch {
      alert("Please Enter Correct City Name or Check Spelling")
    }

}
React.useEffect(() => {

    getweather();
  }, [])


  return weather.main !== undefined ? (
    <>
      <div className="container mt-2 " style={{}}>
        <div className="row">
          <div id="main" className="col-sm-8  " style={{ display: "flex", mragin: "20px 20px" }}>
            <span className="d-flex justify-content-center align-items-center mx-2"><i className="fa-solid fa-5x fa-cloud-sun" style={{ color: "yellow" }}></i></span>
          
            <form className="input-group input" onSubmit={(e)=> {e.preventDefault(); getweather()}}>
              <input
                className=""
                onChange={(e) => setCity(e.target.value)}
                type="text"
                class="form-control"
                id="in"
                placeholder="Search location"
              />
              <button type="submit" className="btn btn-primary" onClick={(e)=> {e.preventDefault(); getweather()}}  > <i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
           
          </div>
          <div className="col-sm-4  city" style={{ width: "32%"}}>
            <div className="text-center">
              <h4 style={{ fontSize: "40px" }}>{weather.name},  {weather.sys.country}</h4>
              <p style={{ fontSize: "20px" }}>   {moment.unix(weather.dt).format("dddd , MMMM Do YY ")} </p>
            </div>
          </div>
        </div>
      </div>
      <Weather data={weather}  />
    </>

  ) : null
}
