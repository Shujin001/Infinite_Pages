import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { isAuthenticated } from '../../api/userApi'
import { addGenre } from '../../api/genreApi'


const AddGenre = () => {
    let [genre, setGenre] = useState('')

    let {token} = isAuthenticated()

    const handleSubmit = (e) => {
        e.preventDefault()
        addGenre(genre, token)
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                Swal.fire({
                    title:"Congrats",
                    text:"Genre added successfully.",
                    icon:"success",
                    timer:3000,
                    timeProgressBar: true
                })
            }
        })
        
    }
  return (
    <>
        <main className="form-signin w-11/12 sm:w-10/12  md:w-8/12 lg:w-1/2 m-auto p-5 shadow-xl my-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal text-xl md:text-5xl"> Add Genre</h1>

                    <div className="form-floating">
                        <input type="genre_name" className="form-control"
                        onChange={(e)=>{
                            setGenre(e.target.value)
                        }} />
                        <label for="floatingInput">Genre Name</label>
                    </div>
                    <button className="btn btn-danger w-100 mt-2 p-2" onClick={handleSubmit}>Add Genre</button>
                    <Link to={'/admin/genre'} className="btn btn-warning w-100 mt-2 p-2">Go Back</Link>
                </form>
            </main>
    </>
  )
}

export default AddGenre