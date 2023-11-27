import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";

interface BookProps {
    book: {
        title: string,
        authors: string,
        imageLinks: string,
        link: string,
    }
}

const BookCard:React.FC<BookProps> = ({ book }) => {
    return (
        <Card className="review-card" 
                sx={{
                    width: "300px",
                    height: "400px",
                    display: "flex",
                    flexDirection: "",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "10px",
                    padding: "10px",
                    borderRadius: "0",
        }}>
            <CardMedia
                component="img"
                height="200"
                image={book.imageLinks}
                alt={book.title}
                sx={{objectFit: "contain"}}
            />
            <div>
                <CardContent>
                    <h3>{book.title}</h3>
                    <p>{book.authors}</p>
                </CardContent>
                <CardActions>
                    <Button size="small" href={book.link}>Learn More</Button>
                    <Button size="small" >Select</Button>
                </CardActions>
            </div>
            

        </Card>
    );
}

export default BookCard;