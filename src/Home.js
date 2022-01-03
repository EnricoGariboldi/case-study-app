import "./Home.css";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Home = () => {

    const [isNickConf, setIsNickConf] = useState(false)
    let navigate = useNavigate();

    const redirect = () => {
        navigate("/PhotoApp");
    }

const confirmInput = () => {
const nickname = document.getElementById("fname").value;
    if(nickname !== ""){
        document.getElementById("Homeform").innerHTML = nickname;
        setIsNickConf(true);
    } else {
        alert("Please insert a nickname")
    }
}

  return (

    <div className="Home">
    <h1>Home</h1>

        <div className="Home-form" id="Homeform">
           <label>Nickname</label><br></br>
           <input type="text" id="fname" name="fname" placeholder="insert nickname"></input><br></br>
        </div>

            {isNickConf? (<div className="Home-button-container Button-primary" onClick={redirect} >
        Go to Photoboot</div> ) : (<div className="Home-button-container Button-primary" onClick={confirmInput} >
           Confirm Nickname </div>) }
 

    </div>

  );
};
export default Home;
