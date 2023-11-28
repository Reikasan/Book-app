import { Container, Grid }  from "@mui/material";
import NavBar from '../Components/nav-bar';
import SidebarMenu from '../Components/sidebar-menu';
import BookSearch from '../Components/book-search';
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewThumbnailCard from "../Components/review-thumbnail-card";
import Footer from "../Components/footer";

const IndexPage = () => {
    useEffect(() => {   
        getRecentlyAddedReviewsData();
    }, []);
    
    const [reviews, setReviews] = useState([]);

    const getRecentlyAddedReviewsData = () => {
        axios
            .get("/api/reviews/recent", {
                params: {
                    limit: 20,
                }
            })
            .then(res => {
            setReviews(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <NavBar isUserPage={true}/>
            <SidebarMenu isUserPage={true}/>
            <Container sx={{mt:"50px", position:"relative"}} className="container">
                <BookSearch />
                <div className="list added-recently">
                    <h1>Recently Added</h1>
                    <Grid container spacing={2}>
                        {reviews.map((review: any) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={review.id}>
                                <ReviewThumbnailCard review={review} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default IndexPage;