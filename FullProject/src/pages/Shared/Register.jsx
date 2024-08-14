import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignUp } from '../../services/api';

function Register() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const navigate = useNavigate();

  const paperStyle = {
    padding: 30,
    height: '80vh', // Increased height for better spacing
    width: 360,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10, // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
  };

  const imageStyle = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover', // Ensures the image covers the entire area without distortion
  };

  const buttonStyle = {
    marginTop: 20,
    backgroundColor: '#007BFF', // Distinct color
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0056b3', // Darker shade on hover
    },
    borderRadius: 20, // Rounded button corners
  };

  const typo = {
    marginTop: 20,
    textAlign: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
  };

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await SignUp(registerData.name, registerData.email, registerData.password, registerData.role);
      
      if (res.message === 'An error occurred during registration.') {
        toast.error("Signup failed");
      } else {
        toast.success(res.message || "Registration Success");
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <>
      <Grid container style={{ height: '100vh' }}>
        <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Paper elevation={10} style={paperStyle}>
            <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="https://ik.imagekit.io/sns3305/SDPPRO/916ab313-26c3-445c-8cc8-23619e755280-1527074242569-school-pic.png?updatedAt=1723047549513" // Replace this with your desired image URL
                alt="Logo"
                style={{ width: 80, height: 80, marginBottom: 20 }}
              />
              <Typography variant="h5" style={{ marginBottom: 20, fontWeight: 'bold' }}>
                SIGN UP
              </Typography>
              <TextField
                id="name"
                label="Name"
                type="text"
                variant="outlined"
                fullWidth
                required
                style={{ marginBottom: 20 }}
                onChange={handleChange}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                style={{ marginBottom: 20 }}
                onChange={handleChange}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                style={{ marginBottom: 20 }}
                onChange={handleChange}
              />
              <TextField
                id="role"
                label="Role"
                type="text"
                variant="outlined"
                fullWidth
                required
                style={{ marginBottom: 20 }}
                onChange={handleChange}
              />
              <Button type="submit" fullWidth variant="contained" style={buttonStyle}>
                Create an Account
              </Button>
              <Typography style={typo}>
                Have an Account? <Link to="/login" style={linkStyle}>Sign In</Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="https://ik.imagekit.io/sns3305/SDPPRO/istockphoto-1066324992-612x612.jpg?updatedAt=1723227009835" // Replace this with your image URL
            alt="Side Image"
            style={imageStyle}
          />
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
}

export default Register;
