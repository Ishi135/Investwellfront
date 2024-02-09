import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Toast from '../Toast/Toast';
import {useNavigate}  from 'react-router-dom' ;
import axios from 'axios';
const Main = () => {
    const location = useLocation();
    const name = location.state.props;
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate(); 
   
    console.log(`My name ${name}`)

    useEffect(() => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    }, []);

    const handleData = ()=>{
        axios.get('http://localhost:8000/home' ,{withCredentials: true })
      .then(response => {
        console.log("respose",response)
        console.log(response.data)
        if(response.data === "Token verification failed" || response.data ==="User not authenticated"  ){
            document.getElementById('userdata').innerText = `${response.data}`;
            
            navigate("/login");
          
          
        }else{
          
          document.getElementById('userdata').innerText = `${response.data}`;
        }
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      }
      
    return (
        <>
            <h1 className="home">Hello {name}</h1>
            <button className="auth" onClick={handleData}>GETDATA</button>
            <div id='userdata'></div>
            {showToast && <Toast message={"Login successful"}/>}

        </>
    );
};

export default Main;