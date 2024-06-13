import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, selectUser, selectError } from '../features/userSlice';

const ProfileForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const [newUsername, setNewUsername] = useState(user.username);

  const handleUpdateProfile = () => {
    dispatch(updateProfile({ username: newUsername }));
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <div>
        <label>New Username:</label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default ProfileForm;
