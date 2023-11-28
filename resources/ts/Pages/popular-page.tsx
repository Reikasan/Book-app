import { Container, Grid, Pagination }  from "@mui/material";
import NavBar from '../Components/nav-bar';
import SidebarMenu from '../Components/sidebar-menu';
import BookSearch from '../Components/book-search';
import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../Components/book-card";
import Footer from "../Components/footer";
import { enumType } from "../types";

const PopularPage = () => {
    useEffect(() => {   
        getPopularBooksData();
    }, []);
    
    const [popularBooks, setPopularBooks] = useState([]);

    const getPopularBooksData = () => { 
        axios
            .get("/api/reviews/popular", {
                params: {
                    limit: 10,
                }
            })
            .then(res => {
            setPopularBooks(res.data);
            console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <>
            <NavBar isUserPage={true}/>
            <SidebarMenu isUserPage={true}/>
            <Container sx={{mt:"50px", position:"relative"}} className="container">
                
                <BookSearch />
                <div className="list popular-books">
                    <h1>Popular Books</h1>
                    <Grid container spacing={2}>
                        {popularBooks.map((bookData: any, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <BookCard book={bookData.book} type={enumType.popular}/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <Pagination 
                    count={10} 
                    color="primary"
                    sx={{margin: "20px auto", display: "flex", justifyContent: "center"}} />
            </Container>
            <Footer />
        </>
    );
}

export default PopularPage;