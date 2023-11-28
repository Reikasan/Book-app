import { Button, Card, CardActions, CardContent, CardMedia, Rating } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface ReviewProps {
    review: {
        rating: number,
        // authors: string,
        // image_link: string,
        // link: string,
        book: {
            title: string,
            authors: string,
            image_link: string,
            link: string,
        }, 
        user: {
            id: number
            name: string,
        }
    }
}


const ReviewThumbnailCard:React.FC<ReviewProps> = ({ review }) => {
    return (
        <Card className="review-card" 
                sx={{
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "10px",
                    padding: "10px",
                    borderRadius: "0",
        }}>
            <CardMedia
                component="img"
                height="200"
                image={review.book.image_link}
                alt={review.book.title}
                sx={{objectFit: "contain"}}
            />
            <div>
                <CardContent>
                    <div className="book-info">
                        <h3 className="text-overflow-title">{review.book.title}</h3>
                        <p className="text-overflow-ellipsis">{review.book.authors}</p>
                    </div>
                    <div className="rating-container">
                        <AccountCircleIcon className="user-icon"/>
                        <div>
                            <div className="rating"> 
                                <p>{review.rating}</p>
                                <Rating name="read-only" value={review.rating} precision={0.5} readOnly />
                            </div>
                            <p className="text-overflow-ellipsis">
                                by <a href={`/user/${review.user.id}`}>{review.user.name}</a>
                            </p>
                        </div>
                    </div>
                </CardContent>
                <CardActions sx={{justifyContent: "center", padding:"0"}}>
                    <Button size="small" href={review.book.link}>Check Book</Button>
                    <Button size="small" >Check Review</Button>
                </CardActions>
            </div>
            

        </Card>
    );
}

export default ReviewThumbnailCard;