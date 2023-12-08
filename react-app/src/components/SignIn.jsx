// SignIn.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, TextField, Typography, Button } from '@mui/material';

const SignIn = () => {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLogin = () => {
        // You can handle the login logic here
        const loginData = {
            username: loginUsername,
            password: loginPassword,
        };
        console.log('Login Data:', loginData);
    };

    return (
        <Container>
            <Box mt={{ mt: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <TextField
                    
                            fullWidth
                            label="Username"
                            required
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                        />
                        <br/>
                    </Grid>
                    <Grid item xs={8} >
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            required
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={handleLogin}>
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" align="center">
                            Don't have an account? <Link to="/">Register</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default SignIn;