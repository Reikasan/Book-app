import { useState } from 'react';

const useSearch = () => {
    const [items, setItems] = useState<string[]>([]);
    const [value, setValue] = useState<string>("");

    const handleNewBooks: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const searchBooks = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(value === "") return;
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`);
        const data = await response.json();
        const dataFomat = data.items.map((item: any) => {
            const Info = item.volumeInfo;
            return {
                title: Info.title,
                authors: Info.authors,
                description: Info.description,
                link: Info.infoLink,
                imageLinks: Info.imageLinks ? Info.imageLinks.thumbnail : "",
            };
        });
        setItems(dataFomat);
    }

    return {handleNewBooks, searchBooks, items, value}
}

export default useSearch;