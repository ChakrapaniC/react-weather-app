import "./Weekweather.css";
import React from "react";
import axios from "axios";
import moment from "moment";
import Footer from "./Footer";

export default function Weekweather(props) {
  const [weather2, setWeather2] = React.useState([]);

  React.useEffect(() => {
    const show = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data2.coord.lat}&lon=${props.data2.coord.lon}&units=metric&appid=a487c3bb7ab43c488491055537f89ca9&units=metric`
      );
      //console.log(res.data.daily)
      setWeather2(res.data.daily.slice(0, 8));
    };
    show();
  }, []);

  return weather2 !== undefined ? (
    <div className="" style={{margin : '0'}} >
      <div className="header text-center" style={{}}>
        <h2 style={{ fontWeight: "bold", color: "black", margin: "25px auto" }}>
          NEXT 7 DAYS WEATHER FORECAST
        </h2>

        <div
          className="row d-flex justify-content-around container" style={{ padding: "10px 0px" ,margin : '0 auto' }}
        >
          {weather2 &&
            weather2.map((item, index) => {
              if (index === 0) {
                return null;
              }

              return (
                <div
                  className="card col-12 mx-3 col-lg-6 mb-3 d-flex justify-content-around"
                  style={{
                    backgroundColor: "rgb(104,4,66)",
                    borderRadius: "30px",
                    width: "250px",
                  }}
                >
                  <div class="card-body">
                    <div>
                      <h5>{moment.unix(item.dt).format("MMM Do")}</h5>
                    </div>
                    <div className="icon-wrapper">
                      <img
                        src={` http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt={item.weather[0].description}
                      />
                    </div>
                    <h5 ><img id="temp_icon" src={'https://cdn-icons-png.flaticon.com/512/578/578135.png'} alt="loading" />&nbsp;&nbsp;{item.humidity} %</h5>
                    <h5 class="card-title">
                      <img
                        id="icon"
                        src="https://img.icons8.com/color/344/thermometer.png"
                        alt="loading"
                      />
                      {item.temp.max}
                      <sup>o</sup>C
                    </h5>
                    <h5><img src="https://img.icons8.com/arcade/2x/experimental-wind-arcade.png"  id="temp_icon" alt="loading" />&nbsp;&nbsp;{item.wind_speed} km</h5>
                    {/* <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a> */}
                  </div>
                </div>
                // <div>hi</div>
              );
            })}
        </div>
      </div>
    
      <Footer/>
    </div>
  ) : null;
}
