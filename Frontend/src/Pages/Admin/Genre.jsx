import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { isAuthenticated } from '../../api/userApi'
import { deleteGenre, getAllGenres } from '../../api/genreApi'

const Genre = () => {
    let [genres, setGenres] = useState([])
    let [success, setSuccess] = useState(false)
    const { token } = isAuthenticated()

    useEffect(() => {
        getAllGenres()
            .then(data => {

                setGenres(data)
                setSuccess(false)
            })
            .catch(error => console.log(error))
    }, [success])

    const handleDelete = id => e => {
        e.preventDefault()
        Swal.fire({
            text: "Are you sure you want to delete this genre?",
            title: "Confirm",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "orange",
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "No!!!"
        })
            .then(confirmDelete => {
                if (confirmDelete.isConfirmed) {
                    deleteGenre(id, token)
                        .then(data => {
                            if (data.error) {
                                console.log(data.error)
                            }
                            else {
                                Swal.fire("Success", data.message, "success")
                                setSuccess(true)
                            }
                        })
                }
            })

    }

    return (
        <>
            <div className='p-5'>
                <h1 className='h3'>Genres</h1>
                <ol>
                    {
                        genres.map((genre, i) => {
                            // <Link to={`/admin/genre/${genre._id}`}>
                            //     <li>{i + 1}. {genre.genre_name}</li>
                            //     </Link>
                            return <>
                                <li className='text--2xl'>{i + 1}. {genre.genre_name}
                                    <Link className='edit-btn ms-3' to={`/admin/genre/${genre._id}`}>Edit</Link>
                                    <button className='delete-btn' onClick={handleDelete(genre._id)}>Delete</button>
                                </li>
                            </>
                        })
                    }

                </ol>
                <Link to={'/admin/genre/new'} className='add-btn'>Add New Genre</Link>
            </div>
        </>
    )
}

export default Genre