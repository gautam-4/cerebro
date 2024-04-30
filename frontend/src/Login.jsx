import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/login', loginData);
            const { message } = response.data;

            if (response.status === 200) {
                console.log('Login Successful');
                navigate('/home');
            } else {
                console.log(message);
            }
        } catch (error) {
            console.error('Login error', error);
        }

        setLoginData({
            username: '',
            password: ''
        });
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className='loginForm'>
            <h1>Login</h1>
            <form onSubmit={handleLoginSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={loginData.username}
                    onChange={handleLoginChange}
                    required
                />
                <br />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                />
                <br />
                <button type='submit'>Login</button>
                <p>
                    Not registered Yet? <Link to='/register'><u>Register</u></Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
