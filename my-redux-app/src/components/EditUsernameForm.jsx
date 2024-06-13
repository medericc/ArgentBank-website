// src/components/EditUsernameForm.jsx
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../features/userSlice';
import PropTypes from 'prop-types';

const EditUsernameForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUsername(newUsername));
    onClose(); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">New Username</label>
        <input 
          type="text" 
          id="username" 
          value={newUsername} 
          onChange={(e) => setNewUsername(e.target.value)} 
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

EditUsernameForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditUsernameForm;
