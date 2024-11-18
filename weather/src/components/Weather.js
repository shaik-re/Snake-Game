import React, { useEffect, useState } from "react";
import './Weather.css'; // Ensure the CSS file exists and is correctly referenced
import search_icon from '../assets/searchbar1.png'; 
import clear_icon from '../assets/clear_icon.png';
import cloud_icon from '../assets/cloud_icon.png'; 
import drizzle_icon from '../assets/drizzle_icon.png';
import rain_icon from '../assets/rain_icon.png';
import wind_icon from '../assets/w2.png'; 
import h_icon from '../assets/h.png';

const Weather = () => { 
    const [weatherData,setWeatherData] = useState(false);
    
    const search = async(city)=>{
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setWeatherData({
                humidity:
            })
        } catch(error){

        }
        
    }
    useEffect(() =>{
        search("London");
    },[])
    
    
    
    
   
    return (
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <img src={search_icon} alt="" /> {/* Corrected 'serch_icon' to 'search_icon' */}
            </div>
            <img src={clear_icon} alt="" className="weather-icon"/>
            <p className="temperature">16 c</p>
            <p className="location">London</p>
            <div className="weather-data">
                <div  className="col">
                 <img src={h_icon} alt=""/>   
                <div>
                <p>91%</p>
                 <span>Humidity</span>
                </div>
            </div>
            <div  className="col">
                 <img src={h_icon} alt=""/>   
                <div>
                <p>2.8 k/h</p>
                 <span>Wind Speed</span>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Weather;
