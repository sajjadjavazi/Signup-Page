  import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import SignInForm from '../components/AuthForm/SignInForm';
import SignUpForm from '../components/AuthForm/SignUpForm';
import { useAuth } from '../hooks/useAuth';

const Login: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
  
    // Determine which form to show based on the URL parameter
    const searchParams = new URLSearchParams(location.search);
    const initialSignUp = searchParams.get('sign-up') === 'true';
  
    // Use local state to toggle between Sign In and Sign Up forms
    const [isSignUp, setIsSignUp] = useState(initialSignUp);
  
    React.useEffect(() => {
      if (isAuthenticated) {
        navigate('/'); // Redirect to home page if already authenticated
      }
    }, [isAuthenticated, navigate]);

    // Toggle function
    const toggleForm = () => {
      setIsSignUp(!isSignUp);
      navigate(isSignUp ? '/login?sign-up=false' : '/login?sign-up=true');
    };
  
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url(src/assets/images/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Typography>
          
          {/* Show the appropriate form based on isSignUp state */}
          {isSignUp ? <SignUpForm /> : <SignInForm />}
          
          {/* Button to toggle between Sign In and Sign Up */}
          <Button 
            variant="text" 
            fullWidth 
            sx={{ mt: 2 }} 
            onClick={toggleForm}
          >
            {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
          </Button>
        </Container>
      </Box>
    );
};

export default Login;
