import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../consts'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { getBookDetails } from '../api/bookApi'

const BookDetails = () => {
    let [book, setBook] = useState({})
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
    const handleAddToCart = e => {
        e.preventDefault()
        let cart_item = {
            name : book.book_name,
            price : book.book_price,
            image : book.book_image,
            stock : book.count_in_stock,
            quantity : qty
        }

        dispatch({
            type:"ADD_TO_CART",
            payload: cart_item
        })
        Swal.fire('Congrats!!', 'Items added to Cart', 'success')

    }

    return (
        <div className='bg-slate-200 p-10 flex'>
            <div>
                <img src={`${API}/${book.book_image}`} alt="" className='w-full' />
            </div>
            <div className='w-1/2 p-20'>
                <h1 className='text-3xl'>{book.book_name}</h1>
                <h1 className='text-2xl'>Price: Rs.{book.book_price}</h1>
                <h1 className='text-2xl'>Description:</h1>
                <p className='text-xl'>
                    {book.book_description}
                </p>
                <h1 className='text-2xl'>In stock: {book.count_in_stock}</h1>
                <h1 className='text-2xl'>Rating: {book.rating}</h1>

                <h1 className='text-2xl'>Quantity:</h1>
                <input type="number" min={1} max={book.count_in_stock} onChange={e => setQty(e.target.value)} defaultValue={1} className='text-xl text-center' />
                <br />
                <br />
                <Button variant='contained' className='btn' onClick={handleAddToCart}>Add To Cart</Button>

            </div>

        </div>
    )
}

export default BookDetails