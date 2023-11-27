import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import React from "react";

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
        <Card className="book-card" 
                sx={{
                    width: "300px",
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "10px",
                    padding: "10px",
                    borderRadius: "0",
                    // boxShadow: "0 0 10px 0 rgba(35, 87, 135, 0.3)",
        }}>
            <CardMedia
                component="img"
                height="200"
                image={book.imageLinks}
                alt={book.title}
                sx={{objectFit: "contain"}}
            />
            <CardContent>
                <h3>{book.title}</h3>
                <p>{book.authors}</p>
            </CardContent>
            <CardActions>
                <Button size="small" href={book.link}>Learn More</Button>
                <Button size="small" >Select</Button>
            </CardActions>

        </Card>
    );
}

export default BookCard;