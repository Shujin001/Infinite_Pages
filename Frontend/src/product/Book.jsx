import { Grid2 } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MyCard from '../components/MyCard';
import { getAllBooks } from '../api/bookApi';

const Book = () => {
        let [books, setBooks] = useState([])
        useEffect(() => {
                getAllBooks()
                    .then(data => {
                        if (data.error) {
                            console.log(data.error)
        
                        }
                        else {
                            setBooks(data)
                        }
                    })
            }, [])
  return (
    <>
        <Grid2 item size={{ xs: 12, m: 8, lg: 9 }} bgcolor={"#cccccc"} container>
                    {books.map((book) => {
                        return (
                            <Grid2 item size={{ xs: 12, md: 6, lg: 4 }} p={3} key={book._id}>
                               <MyCard book = {book}
                            //    name = {book.book_name}
                            //    price = {book.book_price}
                            //    image = {book.book_image}
                               />
                            </Grid2>
                        );
                    })}
                </Grid2>
    </>
  )
}

export default Book