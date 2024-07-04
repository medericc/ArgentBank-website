import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { editUsername } from '../app/recognize/Action';
import Button from '../layouts/Button'
import Error from './Error'
import Spinner from './Spinner';
import useAuth  from '../hook/useAuth';

const EditUserForm = () => {
    const [displayEditForm, setDisplayEditForm] = useState(false)
    const { userInfo, isLoading, token } = useAuth()

    const firstName = userInfo?.body.firstName;
    const lastName = userInfo?.body.lastName;
    const userName = userInfo?.body.userName;

    const { register, handleSubmit, formState: { errors }} = useForm();
    const dispatch =  useDispatch()

    const handleDisplayEditForm = () => {
        setDisplayEditForm(!displayEditForm)
    }
    
    const  notify = () => {
        toast.success("User name successfully updated");
    };

    const submitForm = (data) => {
        const capitalizedUsername = data.username.charAt(0).toUpperCase() + data.username.slice(1);
        dispatch(editUsername({ userName: capitalizedUsername, token }));
        setDisplayEditForm(!displayEditForm)
        notify()
    }

    return (
        <React.Fragment>
        <ToastContainer />
            {
                !displayEditForm ? (
                    <React.Fragment>
                        <h1 className='blackfont'>Welcome back<br />{firstName} {lastName}!</h1>
                        <Button 
                            txt="Edit Name"
                            className="edit-button"
                            func={handleDisplayEditForm}
                        />
                    </React.Fragment>
                ) : (
                    <div className='edit-content'>
                        <h1>Edit user info</h1>
                        <form onSubmit={handleSubmit(submitForm)}>
                        {errors.username && <Error>{errors.username.message}</Error>}
                            <div className="edit-input-wrapper">
                                <label htmlFor="username">User name: </label>
                                <input type="text" id="username" defaultValue={userName} {...register('username', { required: 'User name is required' })}  />
                            </div>
                            <div className="edit-input-wrapper">
                                <label htmlFor="firstname">First name: </label>
                                <input type="text" id="firstname" placeholder={firstName} disabled ={true}/>
                            </div>
                            <div className="edit-input-wrapper">
                                <label htmlFor="lastname">Last name: </label>
                                <input type="text" id="lastname" placeholder={lastName} disabled ={true} />
                            </div>
                            <div className='edit-btn-wrapper'>
                                <button 
                                    type='submit' 
                                    className='edit-form-button' 
                                    disabled={isLoading}
                                >
                                    {isLoading ?  <Spinner /> : 'Save'}
                                </button>
                                <Button
                                    txt="Cancel"
                                    className="edit-form-button"
                                    func={handleDisplayEditForm}
                                />
                            </div>
                        </form>  
                    </div>
                )
            }
       </React.Fragment> 
    )
}

export default EditUserForm
