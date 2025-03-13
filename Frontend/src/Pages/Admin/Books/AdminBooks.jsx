import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { isAuthenticated } from '../../../api/userApi'
import { deleteBook, getAllBooks } from '../../../api/bookApi'

const AdminBooks = () => {
    let [books, setBooks] = useState([])
    let [success, setSuccess] = useState(false) 
    const API = `http://localhost:5000`
    const {token} = isAuthenticated()

    useEffect(()=>{
        getAllBooks()
            .then(data=>{
                if(data.error){
                    console.log(data.error)
                }
                else{
                    setBooks(data)
                    setSuccess(false)
                }   
            
            })
    },[success])

    const handleDelete = id => e => {
            e.preventDefault()
            Swal.fire({
                text:"Are you sure you want to delete this book?",
                title:"Confirm",
                icon:"question",
                showCancelButton:true,
                confirmButtonColor:"orange",
                confirmButtonText:"Yes, Delete",
                cancelButtonText:"No!!!"
            })
            .then(confirmDelete=>{
                if(confirmDelete.isConfirmed){
                    deleteBook(id, token)
                    .then(data=>{
                        if(data.error){
                            console.log(data.error)
                        }
                        else{
                            Swal.fire("Success",data.message,"success")
                            setSuccess(true)
                        }
                    })
                }
            })
            
        }

  return (
    <div className='p-5 text-white'>
        <h3 className='text-3xl underline'>Books</h3>

        <table className='w-full mt-3 border-3 text-center text-white'>
            <thead>
                <tr className='text-white'>
                    <td className='border-2'>S.No</td>
                    <td className='border-2 w-16'>Book Image</td>
                    <td className='border-2'>Book Name</td>
                    <td className='border-2'>Price</td>
                    <td className='border-2'>Count in Stock</td>
                    <td className='border-2'>Genre</td>
                    <td className='border-2'>Action</td>
                    
                </tr>
            </thead>
            <tbody>
                {
                    books.length > 0 &&
                    books.map((book, index)=>{
                        return <tr key={index}>
                            <td className='border-2'>{index+1}</td>
                            <td className='border-2'>
                                <img src={`${API}/${book.book_image}`} alt={book.book_name} />
                            </td>
                            <td className='border-2'>{book.book_name}</td>
                            <td className='border-2'>{book.book_price}</td>
                            <td className='border-2'>{book.count_in_stock}</td>
                            <td className='border-2'>{book.genre?.genre_name}</td>
                            <td className='border-2'>
                            <Link to={`/admin/books/${book._id}`} className='edit-btn'>Update</Link>
                            <button className='delete-btn' onClick={handleDelete(book._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td className='border-2' colSpan={7}>
                    <Link to={'/admin/book/new'} className='add-btn'>Add New Book</Link>
                    </td>
                </tr>
            </tfoot>
        </table>

    </div>
  )
}

export default AdminBooks