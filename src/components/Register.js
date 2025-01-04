import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await axios.post('http://localhost:5000/api/register', { username, password });
            alert('Registration successful');
            navigate('/login');
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <h1 className="register-title">Register</h1>
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="register-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        className="register-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit" className="register-button">Register</button>
                    {error && <p className="register-error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Register;
