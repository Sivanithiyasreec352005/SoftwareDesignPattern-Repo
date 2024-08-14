import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    // Clear error and navigate to dashboard
    setError('');
    navigate('/user/dashboard');
  };

  return (
    <>
      <div className="wrapper">
        <div className="sct brand">
          <BookOpen size={100} />
        </div>
        <div className="sct login">
          <form onSubmit={handleSubmit}>
            <h3>User Login</h3>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="forgot-remember">
              <label className="control control-checkbox">
                Remember me
                <input type="checkbox" />
                <div className="control_indicator"></div>
              </label>
              <div className="forgot">
                <a href="www.gmail.com">Forgot Password?</a>
              </div>
            </div>
            <input type="submit" name="send" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
