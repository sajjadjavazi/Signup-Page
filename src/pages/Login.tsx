import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SignInForm from '../components/AuthForm/SignInForm';
import SignUpForm from '../components/AuthForm/SignUpForm';

const Login: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const isSignUp = searchParams.get('sign-up') === 'true';

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
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter:"blur(5px)",
                    borderRadius: 2,
                    p: 4,
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Typography>
                {isSignUp ? <SignUpForm /> : <SignInForm />}
            </Container>
        </Box>
    );
};

export default Login;
