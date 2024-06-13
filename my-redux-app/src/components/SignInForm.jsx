// src/components/SignInForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Ici, vous devriez implémenter la logique d'appel API pour la connexion utilisateur
    // Simulons simplement la réussite de la connexion pour l'exemple
    const user = { username, password, name: 'Tony Jarvis', accounts: [] };
    dispatch(loginUser(user));
  };

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="button" onClick={handleSignIn} className="sign-in-button">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
