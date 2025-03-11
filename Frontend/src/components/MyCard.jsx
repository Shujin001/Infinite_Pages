import { Button, Card, CardActions, CardContent, Rating, Typography } from '@mui/material'
import React from 'react'
import { API } from '../consts'

// const MyCard = ({book_name, book_price, book_image, rating, genre}) => {
    const MyCard = ({book}) => {
    //book - {name:'xyz', price='124', image}

    //destructuring the object
    let {_id, book_name, book_price, book_image, rating, genre} = book
  return (
    <>
     <Card sx={{ maxWidth: 345 }}>
                                    <img style={{ height: 140 }} src={`${API}/${book_image}`}
                                        title={book_image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {book_name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                            Rs.{book_price}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                            Rating: <Rating value={rating} readOnly/>
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                            Genre: {genre?.genre_name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button href={`/book/${_id}`} size="small">About</Button>
                                        <Button href='' size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
    </>
  )
}

export default MyCard