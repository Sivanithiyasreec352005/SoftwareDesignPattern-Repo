import { auth } from '@/firebase/setup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Business = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      console.error();
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          placeholder="your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLoginClick}>Signup</button>
      </form>
      <p>Needd to login</p>
      <Link to="/login">Sign up</Link>
    </div>
  );
};

export default Business;
