import React from 'react';
import { Button, TextField, Box } from '@mui/material';

const SignInForm: React.FC = () => {
    return (
        <Box component="form" noValidate autoComplete="off">
            <TextField label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Sign In
            </Button>
        </Box>
    );
};

export default SignInForm;
