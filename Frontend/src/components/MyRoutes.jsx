import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './Login'
import Contact from '../Contact'
import Homepage from '../Homepage'
import Services from '../Services'
import Gallery from '../Gallery'
import Counter from '../Counter'
import Register from '../Pages/Register'
import VerifyAccount from '../Pages/Admin/VerifyAccount'
import ForgetPassword from '../Pages/Admin/ForgetPassword'
import ResetPassword from '../Pages/Admin/ResetPassword'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import AdminRoutes from '../protectedRoutes/AdminRoutes'
import Counter2 from '../redux/Counter2'
import Games from '../redux/Games'
import Cart from '../Pages/Admin/Cart'
import BookDetails from '../product/BookDetails'
import Genre from '../Pages/Admin/Genre'
import AddGenre from '../Pages/Admin/AddGenre'
import EditGenre from '../Pages/Admin/EditGenre'
import AdminBooks from '../Pages/Admin/Products/AdminBooks'
import AddBook from '../Pages/Admin/Products/AddBook'
import EditBook from '../Pages/Admin/Products/EditBook'
import First from './First'
import Books from '../Pages/Admin/Books'
import Book from '../product/Book'
import Genres from '../category/Genres'
const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/first' element={<First />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/' element={<Homepage />} />
                    <Route path='/counter' element={<Counter />} />

                    <Route path='/register' element={<Register />} />

                    /* Admin Pages */


                    <Route path='/forgetpassword' element={<ForgetPassword />} />
                    <Route path='/resetpassword/:token' element={<ResetPassword />} />
                    <Route path='/verify/:token' element={<VerifyAccount />} />
                    <Route path='/products' element={<Books/>}/>
                    {/* <Route path='product/:id' element={<BookDetails/>}/> */}
                    <Route path='/:genreName/:id'  element={<Book/>}/>
                    <Route path='book/:id' element={<BookDetails/>}/>

                </Route>
                <Route path='/cart' element= {<Cart/>}/>
                
                {/* <Route path='/' element={<AdminRoutes />}> */}
                    <Route path='/admin' element={<AdminLayout/>}>
                        <Route path='dashboard' element={<AdminDashboard />} />
                        <Route path='genre' element={<Genre />} />
                        <Route path='genre/new' element={<AddGenre />} />
                        <Route path='genre/:id' element={<EditGenre />} />
                        <Route path='books' element={<AdminBooks />} />
                        <Route path='book/new' element={<AddBook />} />
                        <Route path='books/:id' element={<EditBook />} />
                    </Route>
                {/* </Route> */}
                <Route path='/reduxcounter' element={<Counter2/>}/>
                <Route path='/game' element={<Games/>}/>

                <Route path='/genres' element={<Genres/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes