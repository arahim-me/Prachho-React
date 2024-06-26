import './App.css';
import React from 'react';
import {  BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import TopNav from './Components/TopNav/TopNav';
import Explore from './Components/Explore/Explore';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import PackDetails from './Pages/PackDetails/PackDetails';


function App() {
  return (
      <BrowserRouter>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blog/>} />
        <Route path='/blog/:id' element={<BlogDetails/>} />
        <Route path='/packages' element={<Explore/>} />
        <Route path='/package/:id' element={<PackDetails/>} />
        <Route path='/photography-tour' element={<Explore/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
  )
}

export default App;
