import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllBooksByGenre } from '../api/bookApi';
import { Grid2 } from '@mui/material';
import MyCard from '../components/MyCard';

const Book = () => {
    const { id } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooksByGenre(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setBooks(data);
                }
            });
    }, [id]);

    return (
        <>
            {/* <div>
                <h1>Books in this Genre</h1>
                <ul>
                    {books.map(book => (
                        <li key={book._id}>{book.book_name}</li>
                    ))}
                </ul>
            </div> */}
            <Grid2 item size={{ xs: 12, m: 8, lg: 9 }} bgcolor={"#cccccc"} container>
                {books.map((book) => {
                    return (
                        <Grid2 item size={{ xs: 12, md: 6, lg: 4 }} p={3} key={book._id}>
                            <MyCard book={book}
                            //    name = {book.book_name}
                            //    price = {book.book_price}
                            //    image = {book.book_image}
                            />
                        </Grid2>
                    );
                })}
            </Grid2>
        </>
    );
};

export default Book;
