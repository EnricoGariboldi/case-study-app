import "./Home.css";
import {useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Home = () => {

    const [isNickConf, setIsNickConf] = useState(false)
    const [nickname, setNickname] = useState("")
    let navigate = useNavigate();

    const redirect = () => {
        navigate('/PhotoApp', {state: nickname});
    }

const confirmInput = () => {
     const nick = document.getElementById("fname").value;

    if(nick !== "" && nick !== undefined){
        document.getElementById("HomeForm").innerHTML = "<div style='font-size: 2em; color:gold; font-weight:bold;'>"+nick+"</div>"
        setIsNickConf(true);
        setNickname(nick);

    } else {
        document.getElementById("HomeForm-1").innerHTML = "<label id='Home-Label' style='font-weight:bold; color: white; background-color: red;'>*Nickname Required</label>"
        document.getElementById("HomeForm-2").innerHTML = "<input type='text' style='border-color: red; border-width: 5px; width: 60%; height: 4em; font-size: 1.5em; text-align: center;' id='fname' name='fname' placeholder='insert Nickname'></input>"
    }
}

  return (

    <div className="Home">
        
    <div className="Home-title"><h1>Home</h1></div>
        <div className="Home-form" id="HomeForm">
           <div id="HomeForm-1"><label className="Home-label">Nickname</label></div>
           <div id="HomeForm-2"><input type="text" className="Home-input" id="fname" name="fname" placeholder="insert Nickname"></input></div>
        </div>
            {isNickConf? (<div className="Home-button-container Button-primary" onClick={redirect} >
        Go to Photoboot</div> ) : (<div className="Home-button-container Button-primary" onClick={confirmInput} >
           Confirm Nickname </div>) }
    </div>

  );
};
export default Home;
