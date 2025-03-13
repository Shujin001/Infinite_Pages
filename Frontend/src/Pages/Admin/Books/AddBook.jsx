import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { isAuthenticated } from '../../../api/userApi'
import { getAllGenres } from '../../../api/genreApi'
import { addBook } from '../../../api/bookApi'

const AddBook = () => {
    let [book, setBook] = useState('')
    let [genres, setGenres] = useState([])
    const { token } = isAuthenticated()

    useEffect(() => {
        getAllGenres()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setGenres(data)
                }
            })
            .catch(error => console.log(error))

    }, [])
    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value })
    }

    const handleFileChange = e => {
        setBook({...book, [e.target.name]: e.target.files[0] })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let formdata = new FormData()
        for (var key in book) {
            formdata.append(key, book[key])
            console.log(key, book[key])
        }
        addBook(formdata, token)
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
        <main className="form-signin w-11/12 sm:w-10/12  md:w-8/12 lg:w-1/2 m-auto p-5 shadow-xl my-5 text-white">
            <form style={{ maxWidth: "400px", margin: "auto" }}>
                <h2 className='font-bold'>Add Book</h2>

                <label>Book Name:</label>
                <input type="text" className='w-full text-slate-700 px-5 py-2 border border-blue-900 focus:bg-gray-100' name="book_name" placeholder="Enter book name" required onChange={handleChange} /><br />


                <label>Price:</label>
                <input type="number" className='w-full text-slate-700 pl-12 pr-1 py-2 border border-blue-900 focus:bg-gray-100' name="book_price" placeholder="Enter price" required onChange={handleChange} /><br />


                <label>Description:</label>
                <textarea rows={5} type="description" className='w-full text-slate-700 px-5 py-2 border border-blue-900 focus:bg-gray-100 resize-none' name='book_description' placeholder="Enter description" required onChange={handleChange} /><br />


                <label>Genre:</label>
                <select name="genre" required className='w-full text-slate-700 px-5 py-2 border border-blue-900 ' defaultValue={''} onChange={handleChange} >
                    <option value=""  disabled>Select Genre</option>
                    {
                        genres.length > 0 &&
                        genres.map((genre) => {
                            return <option key={genre._id} value={genre._id}>{genre.genre_name}</option>
                        })
                    }
                </select><br />


                <label>Count:</label>
                <input type="number" className='w-full text-blue-700 pl-12 pr-1 py-2 border border-blue-900 focus:bg-gray-100' name="count_in_stock" placeholder="Enter count" required onChange={handleChange} /><br />


                <label>Image:</label>
                <input type="file" className='w-full text-white px-5 py-2 border border-blue-900 focus:bg-gray-100' name="book_image" accept="image/*" required onChange={handleFileChange} /><br />

                <button className="btn btn-danger w-50 mt-2 p-2" onClick={handleSubmit}>Add Book</button>
                <Link to={'/admin/books'} className="btn btn-warning w-50 flex mt-2 p-2">Go Back</Link>

            </form>
        </main>
    )
}

export default AddBook