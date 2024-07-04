import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSignin } from '../app/recognize/Action';
import useAuth from '../hook/useAuth';
import Error from "./Error";
import Spinner from './Spinner';

const SignInForm = () => {
    const { isLoading, error, isConnected } = useAuth()
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        const rememberedPassword = localStorage.getItem('rememberedPassword');
        const rememberedRememberMe = localStorage.getItem('rememberedRememberMe');

        if (rememberedRememberMe === 'true') {
            setRememberMe(true);
        }

        if (rememberedEmail && rememberedPassword && rememberedRememberMe === 'true') {
            setValue('email', rememberedEmail);
            setValue('password', rememberedPassword);
        }
    }, [setValue]);

    useEffect(() => {
        if (isConnected) {
            navigate('/dashboard');
        }
    }, [isConnected, navigate]);

    const submitForm = (data) => {
        dispatch(userSignin({ ...data, rememberMe }));
        if (rememberMe) {
            localStorage.setItem('rememberedEmail', data.email);
            localStorage.setItem('rememberedPassword', data.password);
            localStorage.setItem('rememberedRememberMe', rememberMe);
        } else {
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
            localStorage.removeItem('rememberedRememberMe');
        }
    }

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}
            <div className="input-wrapper">
                {errors.email && <Error>{errors.email.message}</Error>}
                <label htmlFor="email">Email</label>
                <input autoComplete='username' type="email" id="email" name='email' {...register('email', { required: 'email is required' })} />
            </div>
            <div className="input-wrapper">
                {errors.password && <Error>{errors.password.message}</Error>}
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name='password' {...register('password', { required: 'password is required' })} autoComplete="current-password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" onChange={handleRememberMeChange} checked={rememberMe} />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button 
                type='submit' 
                className='sign-in-button' 
                disabled={ isLoading }
            >
                {isLoading ?   <Spinner />: 'Sign In'}
            </button>
        </form>
    );
};

export default SignInForm;
