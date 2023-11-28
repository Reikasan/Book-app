import { Button, Card, CardActions, CardContent, CardMedia, Rating } from "@mui/material";

interface ReviewProps {
    review: {
        rating: number,
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
        <Card className="card review-thumbnail-card">
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
                        <h3 className="text-overflow-ellipsis-title">{review.book.title}</h3>
                        <p className="text-overflow-ellipsis">{review.book.authors}</p>
                    </div>
                    <div className="rating-container">
                        <div className="rating"> 
                            <p>{review.rating}</p>
                            <Rating name="read-only" value={review.rating} precision={0.5} readOnly />
                        </div>
                        <p className="text-overflow-ellipsis">
                            by <a href={`/user/${review.user.id}`}>{review.user.name}</a>
                        </p>
                    </div>
                </CardContent>
                <CardActions className="btn-container" sx={{justifyContent: "center", padding:"0"}}>
                    <Button className="btn" size="small" variant="outlined" href={review.book.link}>Check Book</Button>
                    <Button className="btn" size="small" variant="outlined" >Check Review</Button>
                </CardActions>
            </div>
            

        </Card>
    );
}

export default ReviewThumbnailCard;