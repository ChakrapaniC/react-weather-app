import React from 'react'

export default function Alter() {
  return (
    <div>
          <div
        className="container "
        style={{
          borderRadius: "12px",
          background: "rgb(104, 4, 66)",
          // marginTop: "15px",
        }}
      >
        <h4>Current Weather</h4>
        <p>
          {" "}
          {moment
            .unix(props.data.dt)
            .parseZone(props.data.timezone)
            .format("h:mm a")}
        </p>
        <div className="left"></div>
        <div class="row " style={{border:"2px solid yellow"}}>
          <div class="col-sm-2" style={{border:"2px solid black"}}>
            <div className="temp-item-1">
            <img
              id="main-icon"
              style={{ position: "relative", top: "-50px", left: "0" }}
              src={` http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`}
            />
            <span
            id="description"
              style={{
                position: "relative",
                top: "-95px",
                left: "40px",
                fontSize: "1.2rem",
              }}
            >
              {props.data.weather[0].description}
            </span>
            </div>
          </div>
          <div class="col-sm-2" style={{ height: "50%" }}>
            <div className="temp-item ">
            {" "}
            <div id="one" style={{ fontSize: "4.5rem", color: "" }}>
              {Math.round(props.data.main.temp)}
              <sup>o</sup>c
            </div>
            <p style={{ fontSize: "1.2rem" }}>
              {" "}
              FEELS LIKE {Math.round(props.data.main.feels_like)}
              <sup>o</sup>C
            </p>
            </div>
          </div>
          <div class="col-sm-2" style={{ fontSize: "1.2rem", height: "50%" }}>
            <div className="temp-item 3">
            <div style={{ marginTop: "20px" }}>MIN TEMP</div>
            <p style={{ padding: "10px " }}>
              <i
                class="fa-solid fa-lg fa-temperature-low "
                style={{ color: "blue" }}
              ></i>{" "}
              {props.data.main.temp_min}
              <sup>o</sup>C
            </p>

            <div>Max TEMP</div>
            <p style={{ padding: "10px " }}>
              <i
                class="fa-solid fa-lg fa-temperature-high"
                style={{ color: "orange" }}
              ></i>{" "}
              {props.data.main.temp_max}
              <sup>o</sup>C
            </p>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="temp-item 4">
            <div style={{ marginTop: "20px", fontSize: "1.2rem" }}>
              WIND SPEED
            </div>
            <p style={{ padding: "10px" }}>
              <i class="fa-solid fa-xl fa-wind" style={{color:"skyblue"}}></i> {props.data.wind.speed} km
            </p>
            <div style={{ marginTop: "20px", fontSize: "1.2rem" }}>
              PRESSURE
            </div>
            <p style={{ padding: "10px" }}> <img id="icon" src="https://img.icons8.com/color/344/barometer-gauge.png" alt="" /> {props.data.main.pressure} MB</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
