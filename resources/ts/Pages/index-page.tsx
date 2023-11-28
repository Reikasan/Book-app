import { Container, Grid }  from "@mui/material";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import NavBar from '../Components/nav-bar';
import SidebarMenu from '../Components/sidebar-menu';
import BookSearch from '../Components/book-search';
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewThumbnailCard from "../Components/review-thumbnail-card";
import BookCard from "../Components/book-card";

const IndexPage = () => {
    useEffect(() => {   
        getRecentlyAddedReviewsData();
    }, []);
    
    const [books, setBooks] = useState([]);
    const [reviews, setReviews] = useState([]);

    
    const getRecentlyAddedReviewsData = () => {
        axios
            .get("/api/reviews/recent")
            .then(res => {
            setReviews(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getPopularBooksData = () => { 
        axios
            .get("/api/books/popular")
            .then(res => {
            setBooks(res.data);
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
                <div className="list added-recently">
                    <h2>Recently Added</h2>
                    <Grid container spacing={2}>
                        {reviews.map((review: any) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={review.id}>
                                <ReviewThumbnailCard review={review} />
                            </Grid>
                        ))}
                    </Grid>
                    <div className="more">
                        <a href="/guest#list">See more</a>
                    </div>
                </div>
                <div className="list popular-books">
                <h2>Popular Books</h2>
                    <Grid container spacing={2}>
                        {books.map((book: any) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={review.id}>
                                <BookCard book={book} />
                            </Grid>
                        ))}
                    </Grid>
                    <div className="more">
                        <a href="/guest#list">See more</a>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default IndexPage;