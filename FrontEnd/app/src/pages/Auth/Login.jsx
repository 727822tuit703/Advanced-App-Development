import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError('Please fill out all fields');
            return;
        }
        try {
            if (formData.email === 'admin@gmail.com' && formData.password === 'Admin123$') {
                navigate('/admin');
            } else if (formData.email === 'deshini@gmail.com' && formData.password === '12345678') {
                navigate('/dashboard');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center' style={{ minHeight: '90vh' }}>
                <div className='col-md-6'>
                    <form className='bg-light p-4 rounded shadow' onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            className='form-control mb-3'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            className='form-control mb-3'
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button type="submit" className='btn btn-primary btn-block mb-3 d-flex justify-content-center'>Login</button>
                        {error && <p className="text-danger">{error}</p>}
                        <p>Don't have an account ? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/register')}> Register ! </span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
