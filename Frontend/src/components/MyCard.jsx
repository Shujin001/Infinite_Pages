import { Button, Card, CardActions, CardContent, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { API } from '../consts'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBookDetails } from '../api/bookApi'

// const MyCard = ({book_name, book_price, book_image, rating, genre}) => {
const MyCard = ({book}) => {
    //book - {name:'xyz', price='124', image}
   let [qty, setQty] = useState(1)

   const { id } = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      getBookDetails(id)
         .then(data => {
            if (data.error) {
               console.log(data.error)
            }
            else {
               setBook(data)
            }
         })

   }, [])

    let cart_items = useSelector(store => store.cartStore.cart_items)
    const handleAddToCart = e => {
        e.preventDefault()

        let itemExists = cart_items.find(item => item.id == id)
        if (itemExists) {
            let new_quantity = Number(itemExists.quantity) + Number(qty)
            if (new_quantity > itemExists.stock) {
                Swal.fire("Attention!!", "Quantity is out of stock", "warning")
            }
            else {
                let cart_item = { ...itemExists, quantity: new_quantity }
                dispatch({ type: "UPDATE_CART", payload: cart_item })

                Swal.fire('Congrats!!', 'Quantity updated to Cart', 'success')
            }
        }
        else {
            let cart_item = {
                id: book._id,
                name: book.book_name,
                price: book.book_price,
                image: book.book_image,
                stock: book.count_in_stock,
                quantity: qty
            }
            dispatch({
                type: "ADD_TO_CART",
                payload: cart_item
            })
            Swal.fire('Congrats!!', 'Item added to Cart', 'success')
        }
    }
    //destructuring the object
    let { _id, book_name, book_price, book_image, rating, genre } = book
    return (
        <>
            <div className="flex">

                <img style={{ width: '40%'}} src={`${API}/${book_image}`} className='flex'
                    title={book_image}
                />
                <Card sx={{ width: '80%', padding:'3%'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" className='font-bold' component="div" sx={{ color: "Black",fontSize:"25px", fontWeight:"600"}}>
                            {book_name}
                        </Typography> <br />
                        <Typography variant="body2" sx={{ color: "text.secondary",fontSize:"20px"}}>
                            Rs.{book_price}
                        </Typography><br />
                        <Typography variant="body2" sx={{ color: "text.secondary", fontSize:"20px" }}>
                            Genre: {genre?.genre_name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href={`/book/${_id}`} size="small">View</Button>
                        <Button variant='contained' className='btn' onClick={handleAddToCart}>Add To Cart</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default MyCard