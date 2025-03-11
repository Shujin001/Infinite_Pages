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
    <div className='p-5'>
        <h3 className='text-3xl underline'>Books</h3>

        <table className='w-full mt-3 border-3 text-center'>
            <thead>
                <tr>
                    <td>S.No</td>
                    <td>Book Image</td>
                    <td>Book Name</td>
                    <td>Price</td>
                    <td>Count in Stock</td>
                    <td>Genre</td>
                    <td>Action</td>
                    
                </tr>
            </thead>
            <tbody>
                {
                    books.length > 0 &&
                    books.map((book, index)=>{
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <img src={`${API}/${book.book_image}`} alt={book.book_name} />
                            </td>
                            <td>{book.book_name}</td>
                            <td>{book.book_price}</td>
                            <td>{book.count_in_stock}</td>
                            <td>{book.genre?.genre_name}</td>
                            <td>
                            <Link to={`/admin/books/${book._id}`} className='edit-btn'>Update</Link>
                            <button className='delete-btn' onClick={handleDelete(book._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={7}>
                    <Link to={'/admin/book/new'} className='add-btn'>Add New Book</Link>
                    </td>
                </tr>
            </tfoot>
        </table>

    </div>
  )
}

export default AdminBooks