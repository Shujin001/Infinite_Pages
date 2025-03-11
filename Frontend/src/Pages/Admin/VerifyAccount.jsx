import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { verifyAccount } from '../../api/userApi'


const VerifyAccount = () => {
    //get token from url
    const { token } = useParams()

    let [error,setError] = useState('')
    let [success, setSuccess] = useState('')

    useEffect(() => {
        verifyAccount(token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(data.message)
                }
            })
    }, [])

    return (
        <>
        {
            error &&
        <div className='h-[80vh] bg-red-200 text-2xl text-center pt-9'>
            {error} . <Link to={'/'} className='block'>HOME</Link>
        </div>
        }
        {
            success &&
        <div className='h-[80vh] bg-green-200 text-2xl text-center pt-9'>
            {success} . <Link to={'/login'} className='block'>Login Now</Link>
        </div>
        }
        </>
    )
}

export default VerifyAccount