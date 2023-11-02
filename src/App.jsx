import './App.css';
import React from 'react';
import {  BrowserRouter, Route, Routes, Link, Outlet, useRoutes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>} />
        <Route path='/blog' element={<Blog></Blog>} />
        <Route path='/contact' element={<Contact></Contact>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
  )
}

export default App;
