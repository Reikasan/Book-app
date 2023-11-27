import { Container, Grid } from "@mui/material";
import LoginPaper from "../Components/login-paper";
import NavBar from "../Components/nav-bar";
import "../../sass/app.scss";
import React from "react";
import { useState } from "react";
import test from "node:test";

const WelcomePage: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    const loginAsGuest = (e) => {
        e.preventDefault();
        setFormData({
            'email': 'guest@test.com', 
            'password': 'guest', 
            'remember': true 
        });
        handleSubmit(e);
        return;
    }

    return ( 
        <>
            <NavBar isUserPage={ false }/>
            <div className="hero-section">
                <Container sx={{ 
                    alignItems: "center",
                    display: "flex", 
                    height: "100%",
                    pt: "50px"
                }}>
                    <Grid container spacing={5} sx={{ my: "auto"}}>
                        <Grid item xs={12} sm={6}>
                            <h1>Read, Write...</h1>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LoginPaper 
                                data={formData} 
                                setFormData={setFormData}
                                handleSubmit={handleSubmit} 
                                loginAsGuest={loginAsGuest}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
        
    );
}

export default WelcomePage;