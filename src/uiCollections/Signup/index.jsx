import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignUpForm from './signupForm';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState('');
    
    const navigate = useNavigate();

    const signupUser = async (e) => {
        e.preventDefault();
        const signupData = { name, email, password };
        const res = await axios.post('http://localhost:8000/signup', signupData);

        console.log(res);

        if (res && res.data.sucess) {
            setResult('Signup Successful');
            navigate('/', { state: { props: result} });
        } else {
            setResult(res.data.message);
        }
    };

    return (
        <>
            <SignUpForm name={name} email={email} password={password} result={result} signupUser={signupUser} setName={setName} setEmail={setEmail} setPassword={setPassword} />
        </>
    )
}

export default SignUp