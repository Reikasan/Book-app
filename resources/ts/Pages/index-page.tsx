import { Container }  from "@mui/material";
import NavBar from '../Components/nav-bar';
import SidebarMenu from '../Components/sidebar-menu';
import BookSearch from '../Components/book-search';
import React, { useEffect, useState } from "react";
import axios from "axios";

const IndexPage = () => {
    useEffect(() => {   
        getBooksData();
    }, []);
    
    const [books, setBooks] = useState([]);
    
    const getBooksData = () => {
        axios
            .get("/api/books")
            .then(res => {
            setBooks(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <NavBar isUserPage={true}/>
            <SidebarMenu isUserPage={true}/>
            <Container sx={{mt:"50px"}} className="container">
                
                <BookSearch />
                <div className="book-list added-recently">
                    <h2>Recently Added</h2>
                    <div>

                    </div>
                </div>
            </Container>
        </>
    );
}

export default IndexPage;