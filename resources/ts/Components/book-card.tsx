import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { bookType, enumType } from "../types";

interface BookProps {
    book: bookType,
    type: enumType,
}

const BookCard:React.FC<BookProps> = ({ book, type }) => {
    return (
        <Card className="card book-card">
            <CardMedia
                component="img"
                height="200"
                image={book.image_link}
                alt={book.title}
                sx={{objectFit: "contain"}}
            />
            <div>
                <CardContent>
                    <div className="book-info">
                        <h3>{book.title}</h3>
                        <p>{book.authors}</p>
                    </div>
                </CardContent>
                {type === enumType.search ? (
                <CardActions sx={{justifyContent: "center", padding:"0"}}>
                    <Button className="btn" size="small" href={book.link}>Learn More</Button>
                    <Button className="btn" size="small" >Select</Button>
                </CardActions>
                ): type === enumType.popular ? (
                <CardActions sx={{justifyContent: "center", padding:"0"}}>
                    <Button className="btn" size="small" variant="outlined" href={`/books/${book.id}`}>Check Book</Button>
                </CardActions>
                ):(<></>)}
            </div>
        </Card>
    );
}

export default BookCard;