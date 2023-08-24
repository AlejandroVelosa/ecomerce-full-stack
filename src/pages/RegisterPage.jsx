import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './Styles/RegisterPage.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
const RegisterPage = () => {

    const { register, handleSubmit, reset } = useForm()
    const { CreateUser } = useAuth()
    const [showPassword, setShowPassword] = useState(false);

    const submit = data => {
        const BASE_URL = import.meta.env.VITE_REACT_APP_URL;
        const url = `${BASE_URL}/users`
        CreateUser(url, data)
        reset({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
        })
    }



    return (
        <div className="register">
            <form className="form" onSubmit={handleSubmit(submit)}>
                <div className="register_title">
                    <h2>register user</h2>
                </div>
                <div>
                    <label htmlFor="firstName"></label>
                    <input className="inputField" {...register('firstName')} type="text" id='firstName' placeholder="First name..." />
                </div>
                <div>
                    <label htmlFor="lastName"></label>
                    <input className="inputField" {...register('lastName')} type="text" id='lastName' placeholder="Last name..." />
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input className="inputField"  {...register('email')} type="email" id='email' placeholder="Email..." />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <div className="password-input">
                        <input className="inputField" type={showPassword ? 'text' : 'password'} {...register('password')} id='password' placeholder="Password" />
                        <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <div>
                    <label htmlFor="phone"></label>
                    <input className="inputField" {...register('phone')} type="number" id='phone' placeholder="Phone number..." />
                </div>

                <div className="register_button">
                    <button className="form--submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage