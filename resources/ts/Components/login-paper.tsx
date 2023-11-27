import { Button, Link, Paper, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { useEffect, useState, FormEventHandler } from "react";
// import { useForm } from '@inertiajs/react';
import React from 'react';

interface LoginProps {
    data: {
        email: string,
        password: string,
        remember: boolean,
    },
    setFormData: (key: string, value: string | boolean) => void,
    handleSubmit: FormEventHandler<HTMLFormElement>,
    loginAsGuest: (e: React.MouseEvent<HTMLButtonElement>) => void,
}
const LoginPaper: React.FC<LoginProps> = ({data, setFormData, loginAsGuest, handleSubmit}) => {

    return (
        <Paper elevation={3} className="login-paper" color="secondary"
            sx={{ 
                width: "400px",
                mx: "auto",
                my: "20px",
                p: "40px",
        }}>
            <div className='login-section'>
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        fullWidth
                        required 
                        id="emailInput" 
                        label="Email" 
                        variant="standard"
                        value={data.email}
                        onChange={(e) => setFormData('email', e.target.value)}/>
                    <TextField 
                        required 
                        fullWidth
                        id="passwordInput"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        value={data.password} 
                        onChange={(e) => setFormData('password', e.target.value)}/>
                    {/* <div className='error-message'> */}
                    <div className='remember-me-section'>
                        <FormControlLabel control={
                            <Checkbox 
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setFormData('remember', e.target.checked)}
                            />
                        } label="Remember Me" />
                    </div>
                    {/* {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            underline="hover" 
                            rel="noopener"
                            sx={{ fontWeight: "bold", ml: "10px"}}
                        >
                            Forgot your password?
                        </Link>
                    )} */}
                    <div className='btn-container'>
                        <Button 
                            id='loginBtn'
                            variant="contained" 
                            type="submit"
                            color="primaryButton"
                            sx={{mt:"30px", width:"100%"}}
                            // disabled={processing}
                            value="submit">
                            Login
                        </Button>
                        <div className='divider'>
                            <p>OR</p>
                        </div>
                        <Button 
                            id='guestBtn'
                            variant="outlined" 
                            color="primaryButton"
                            sx={{ width: "100%"}}
                            onClick={loginAsGuest}>
                            Try as Guest
                        </Button>
                    </div>
                </form>
            </div>
            <div className='signup-section'>
                <p>No account yet?</p>
                <Link 
                    href="/signup" 
                    underline="hover" 
                    rel="noopener"
                    sx={{ fontWeight: "bold", ml: "10px"}}>Sign up</Link>
            </div>
        </Paper>
    );
}

export default LoginPaper;