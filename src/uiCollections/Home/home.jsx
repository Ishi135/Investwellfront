import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Toast from '../toast/toast';
import Navbar from '../Navbar/index';

const Main = () => {
    const [showToast, setShowToast] = useState(false);
    const [userData, setUserData] = useState(null);
    const location = useLocation();
    const name = location.state.props;
    console.log('Completed by ${name}');

    useEffect(() => {
        handleUser();
    }, []);

    const handleUser = () => {
        axios.get('http://localhost:8000/home', { withCredentials: true })
            .then(response => {
                const data = response.data[0];
                if (response.data === "user logged out") {
                    // Redirect the user to the login page or display a message
                    console.log("User logged out");
                    document.getElementsByClassName('showData').innerHTML = "User logged out";
                    
                } else {
                    setUserData(data);
                    document.getElementsByClassName('showData').innerHTML = response.data;
                    setShowToast(true);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 5000);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <>
        <Navbar/>
            <h1 className="home">Hey, {name}</h1>
            {userData && (
                <div>
                    <p>User Data:</p>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                </div>
            )}
            <button className="showBtn" onClick={handleUser}>Check User</button>
            <div className='showData'></div>
            {showToast && <Toast message={"LOGIN SUCCESSFUL!"} />}
        </>
    );
};

export default Main;
