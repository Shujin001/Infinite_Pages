import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { isAuthenticated } from '../../../api/userApi'
import { API } from '../../../consts'
import { editBook, getBookDetails } from '../../../api/bookApi'
import { getAllGenres } from '../../../api/genreApi'

const EditBook = () => {
    let [book, setBook] = useState('')
    let [genres, setGenres] = useState([])
    let { token } = isAuthenticated()
    const { id } = useParams()

    let select_ref = useRef()

    useEffect(() => {

        getBookDetails(id)
            .then(data => {
                setBook(data)
                select_ref.current.value = data.genre.id
            })


        getAllGenres()
            .then(data => {
                if (data.error) {
                    setBook({ ...data, genre: data.genre?._id })
                    console.log(data.error)
                } else {
                    setGenres(data)
                }
            })
            .catch(error => console.log(error))
    }, [])

    let { book_name, book_price, book_description, count_in_stock, book_image, genre } = book

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const handleFileChange = e => {
        setBook({ ...book, [e.target.name]: e.target.files[0] })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let formdata = new FormData()// used to send photo
        for (var key in book) {
            formdata.append(key, book[key])
            console.log(key, book[key])
        }


        editBook(id, formdata, token)
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    Swal.fire({
                        title: "Congrats",
                        text: "Book added successfully.",
                        icon: "success",
                        timer: 3000,
                        timeProgressBar: true
                    })
                }
            })

    }
    return (
        <main className="form-signin w-11/12 sm:w-10/12  md:w-8/12 lg:w-1/2 m-auto p-5 shadow-xl my-5">
            <form style={{ maxWidth: "400px", margin: "auto" }}>
                <h2 className='text-2xl underline my-2 font-bold text-center'>Update Book</h2>

                <label>Book Name:</label>
                <input type="text" className='w-full text-blue-700 px-5 py-2 border border-blue-900 focus:bg-gray-100' name="book_name" placeholder="Enter book name" required onChange={handleChange} value={book_name} /><br />


                <label>Price:</label>
                <input type="number" className='w-full text-blue-700 px-5 py-2 border border-blue-900 focus:bg-gray-100' name="book_price" placeholder="Enter price" required onChange={handleChange} value={book_price} /><br />


                <label>Description:</label>
                <input rows={5} type="description" className='w-full text-blue-700 px-5 py-2 border border-blue-900 focus:bg-gray-100 resize-none' name='book_description' placeholder="Enter description" required onChange={handleChange} value={book_description} /><br />


                <label>Genre:</label>
                <select name="genre" required className='w-full text-blue-700 px-5 py-2 border border-blue-900 focus:bg-gray-100' onChange={handleChange} ref={select_ref}>
                    <option value="">Select Genre</option>
                    {
                        genres.length > 0 &&
                        genres.map((genre) => {
                            return <option key={genre._id} value={genre._id}>{genre.genre_name}</option>
                        })
                    }
                </select><br />


                <label>Count:</label>
                <input type="number" className='w-full text-blue-700 px-5 py-2 border border-blue-900 focus:bg-gray-100' name="count_in_stock" placeholder="Enter count" required onChange={handleChange} value={count_in_stock} /><br />


                <label>Image:</label>
                <img src={`${API}/${book_image}`}></img>
                <input type="file" className='w-full text-blue-700 px-5 py-2 border border-blue-900 focus:bg-gray-100' name="book_image" accept="image/*" required onChange={handleFileChange} /><br />
                <div className='flex'>
                    <button className="btn btn-danger w-50 mt-2 p-2" onClick={handleSubmit}>Update Book</button>
                    <Link to={'/admin/books'} className="btn btn-warning w-50 flex mt-2 p-2">Go Back</Link>
                </div>

            </form>
        </main>
    )
}

export default EditBook