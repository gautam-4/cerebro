import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;
        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', registrationData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        setRegistrationData({
            username: '',
            email: '',
            password: '',
        });
        navigate('/login');
    };

    return (
        <div className='loginForm'>
            <h1>Register</h1>

            <form onSubmit={handleRegistrationSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={registrationData.username}
                    onChange={handleRegistrationChange}
                    required
                />
                <br />

                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={registrationData.email}
                    onChange={handleRegistrationChange}
                    required
                />
                <br />

                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={registrationData.password}
                    onChange={handleRegistrationChange}
                    required
                />
                <br />

                <button type='submit'>Sign Up</button>
                <p>
                    Already Registered? <Link to='/login'><u>Login Here</u></Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
