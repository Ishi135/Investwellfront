import React from 'react';
import { Link } from 'react-router-dom';
import "../../media/css/style.css";

const LoginForm = ({ email, password, result, loginUser, setEmail, setPassword }) => {
    
    return (
        <>
            <h1 className='result custom-toast '>{result}</h1>
            <form className='form' onSubmit={loginUser} >
                <h1>Login Form</h1>
                <label htmlFor="email" className='emailLabel'>Email : </label>
                <br/>
                <input type="email" name="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} className='inputFields'/>
                <br/>
                <label htmlFor="password" className='passwordLabel'>Password : </label>
                <br/>
                <input type="password" name="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputFields'/>
                <br/>
                <button className='btn' type='submit'>Login</button>
                <br/>
                <Link to='/signup' className='redirectLink'> <span className='para'>A New User? </span> Sign Up</Link>
            </form>
        </>
    )
}
export default LoginForm;