import React from 'react'
import { useSelector } from 'react-redux'
import { API } from '../../consts'

const Cart = () => {
    let cart_items = useSelector(store=>store.cartStore.cart_items)

  return (
    cart_items.length > 0 ?
    <table className='my-5 w-[75vw] mx-auto text-center'>
        <thead>
            <tr>
                <th>S.No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                cart_items.map((item, i)=>{
                    return <tr key={i}>
                        <td>{i+1}</td>
                        <td>
                            <img src={`${API}/${item.image}`} alt="" className='h-48' />
                        </td>
                        <td>{item.name}</td>
                        <td>Rs.{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>Rs.{item.price * item.quantity}</td>
                        <td>
                            <button>Remove</button>
                        </td>
                    </tr>
                })
            }
        </tbody>

    </table>:
    <div className='flex h-[50vh] justify-center items-center'>NO ITEMS IN CART</div>
  )
}

export default Cart