import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { isAuthenticated } from '../../api/userApi'
import Swal from 'sweetalert2'
import { editGenre, getGenreDetails } from '../../api/genreApi'

const EditGenre = () => {

    const { id } = useParams()
    let { token } = isAuthenticated()

    let [genre, setGenre] = useState('')
    useEffect(() => {
        getGenreDetails(id)
            .then(data => {
                if (data.error) {
                    console.log(error)
                }
                else {
                    setGenre(data.genre_name)
                }
            })

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        editGenre(id, genre, token)
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    Swal.fire({
                        title: "Congrats",
                        text: "Genre updated successfully.",
                        icon: "success",
                        timer: 3000,
                        timeProgressBar: true
                    })
                }
            })

    }
    return (
        <>
            <main className="form-signin w-11/12 sm:w-10/12  md:w-8/12 lg:w-1/2 m-auto p-5 shadow-xl my-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal text-xl md:text-5xl"> Edit Genre</h1>

                    <div className="form-floating">
                        <input type="genre_name" className="form-control"
                            onChange={(e) => {
                                setGenre(e.target.value)
                            }}
                            value={genre}
                        />
                        <label for="floatingInput">Genre Name</label>
                    </div>
                    <button className="btn btn-danger w-100 mt-2 p-2" onClick={handleSubmit}>Edit Genre</button>
                    <Link to={'/admin/genre'} className="btn btn-warning w-100 mt-2 p-2">Go Back</Link>

                </form>
            </main>
        </>
    )
}

export default EditGenre