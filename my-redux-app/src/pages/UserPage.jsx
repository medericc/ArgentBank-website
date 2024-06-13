// src/pages/UserPage.jsx
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import EditUsernameForm from '../components/EditUsernameForm';

const UserPage = () => {
  const user = useSelector(selectUser);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{user.username}!</h1>
        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
      </div>
      {isEditing && <EditUsernameForm onClose={() => setIsEditing(false)} />}
      {/* Afficher les informations des comptes de l'utilisateur */}
    </main>
  );
};

export default UserPage;
