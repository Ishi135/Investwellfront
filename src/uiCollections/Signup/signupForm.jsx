import React from 'react';
import { Link } from 'react-router-dom';
import "../../media/css/style.css";

const SignUpForm = ({name, email, password, result, signupUser, setName, setEmail, setPassword}) => {

    return (
        <>
            <h1 className='result'>{result}</h1>
            <form className='signup form' onSubmit={signupUser}>
                <h1>Sign Up Form</h1>
                <label htmlFor="name" className='emailLabel'>Name : </label>
                <br/>
                <input type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} className='inputFields' />
                <br/>
                <label htmlFor="email" className='emailLabel'>Email : </label>
                <br/>
                <input type="email" name="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} className='inputFields' />
                <br/>
                <label htmlFor="password" className='passwordLabel'>Password : </label>
                <br/>
                <input type="password" name="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputFields' />
                <br/>
                <button className='btn' type='submit'>SignUp</button>
                <br/>
                <Link to='/' className='redirectLink'> <span className='para'>Already Registered?</span> Login</Link>
            </form>
        </>
    )
}

export default SignUpForm;