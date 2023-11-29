import { Container, Grid }  from "@mui/material";
import NavBar from '../Components/nav-bar';
import SidebarMenu from '../Components/sidebar-menu';
import BookSearch from '../Components/book-search';
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewThumbnailCard from "../Components/review-thumbnail-card";
import BookCard from "../Components/book-card";
import Footer from "../Components/footer";
import { enumType } from "../types";

const IndexPage = () => {
    useEffect(() => {   
        getRecentlyAddedReviewsData();
        getPopularBooksData();
    }, []);
    
    const [popularBooks, setPopularBooks] = useState([]);
    const [reviews, setReviews] = useState([]);

    const getRecentlyAddedReviewsData = () => {
        axios
            .get("/api/reviews/recent", {
                params: {
                    limit: 5,
                }
            })
            .then(res => {
            setReviews(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getPopularBooksData = () => { 
        axios
            .get("/api/reviews/popular", {
                params: {
                    limit: 5,
                }
            })
            .then(res => {
            setPopularBooks(res.data);
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
                <div className="list shrink added-recently">
                    <h2>Recently Added</h2>
                    <Grid container spacing={2}>
                        {reviews.map((review: any) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={review.id}>
                                <ReviewThumbnailCard review={review} />
                            </Grid>
                        ))}
                    </Grid>
                    <div className="more">
                        <a href="/guest/recently-added">See more</a>
                    </div>
                </div>
                <div className="list shrink popular-books">
                <h2>Popular Books</h2>
                    <Grid container spacing={2}>
                        {popularBooks.map((bookData: any, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <BookCard book={bookData.book} type={enumType.popular}/>
                            </Grid>
                        ))}
                    </Grid>
                    <div className="more">
                        <a href="/guest/popular">See more</a>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default IndexPage;