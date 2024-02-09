import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Toast from '../toast/toast';

const Main = () => {
    const [showToast, setShowToast] = useState(false);
    const location = useLocation();
    const name = location.state.props;
    console.log(`My name ${name}`)

    useEffect(() => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false);
        }, 5000);
    }, []);


    return (
        <>
            <h1 className="home">Hey, {name}</h1>
            {showToast && <Toast message={"Login successful"}/>}
        </>
    );
};

export default Main;