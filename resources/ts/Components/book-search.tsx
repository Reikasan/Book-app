import { Button, TextField } from "@mui/material";
import useSearch from "../Hooks/useSearch";
import BookCard from "./book-card";

const BookSearch: React.FC = () => {
    const { handleNewBooks, searchBooks, value, items } = useSearch();

    return (
        <div className="book-search">
            <form className="book-search-bar" onSubmit={searchBooks}>
                <TextField 
                    id="emailInput" 
                    label="Book Title" 
                    variant="outlined"
                    onChange={handleNewBooks} 
                    value={value}
                    sx={{ width: "50vw", borderRadius: "0" }}
                />
                <Button 
                    id='searchBtn'
                    variant="contained" 
                    type="submit"
                    color="primaryButton"
                    sx={{height: "56px"}}
                >
                    Search
                </Button>
            </form>
            <div className="book-search-results">
                {items.map((book: any) => (
                    <BookCard book={book} key={book.id} />
                    // <div className="book-search-result" key={book.id}>

                    //     <img src={book.imageLinks} alt={book.title} />
                    //     <h3>{book.title} :</h3>
                    //     <p>{book.authors} san</p>
                    // </div>
                ))}
            </div>
        </div>
    )
}

export default BookSearch;