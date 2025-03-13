import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { getBookDetails } from '../api/bookApi'
import { API } from '../consts'

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

   return (
      <div className=' pt-10 flex bg-[#525462] text-white gap-5'>
         <div className='w-1/2 pl-36'>
            <img src={`${API}/${book.book_image}`} alt="" className='w-[50%]' />
         </div>
         <div className='w-1/2 p-20 text-white'>
            <h2 className='text-3xl'>{book.book_name}</h2>
            <h2 className='text-2xl'>Price: Rs.{book.book_price}</h2>
            <h2 className='text-2xl'>Description:</h2>
            <p className='text-xl'
            >
               {book.book_description}
            </p>
            <h2 className='text-2xl'>In Stock: {book.count_in_stock}</h2>
            <h2 className='text-2xl'>Rating:{book.book_price}</h2>
            <h2 className='text-2xl'>Quantity:</h2>
            <input type="number" min={1} max={book.count_in_stock} onChange={e =>
               setQty(e.target.value)} defaultValue={1} className='text-x1 text-center text-slate-600' />
            <br />
            <br />
            <Button variant='contained' className='btn' onClick={handleAddToCart}>Add To Cart</Button>
         </div>
      </div>
   )
}

export default BookDetails