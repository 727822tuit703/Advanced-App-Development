import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        role: 'customer',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.phone) {
            setError('Please fill out all fields');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (!isValidEmail(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (formData.role === 'customer') {
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Error registering user:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    const isValidEmail = (email) => {
        const emailPattern = /\S+@\S+\.\S+/;
        return emailPattern.test(email);
    };

    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-6'>
                    <form onSubmit={handleRegister} className='bg-light p-4 rounded shadow'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            className='form-control mb-3'
                            value={formData.name}
                            onChange={handleChange}
                        />
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
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder='Confirm Password'
                            className='form-control mb-3'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder='Phone'
                            className='form-control mb-3'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className='form-control mb-3'
                        >
                            <option value="customer">Customer</option>
                        </select>

                        <button type="submit" className='btn btn-primary btn-block mb-3'>Register</button>
                        {error && <div className="text-danger mt-3">{error}</div>}
                        <p>Already have an account ? <span className='text-primary cursor-pointer font-bold' onClick={() => navigate('/login')}> Login ! </span></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
