import React from 'react';
import Blog from '../Blog/Blog';
import Explore from '../../Components/Explore/Explore';
import Subscribe from '../../Components/Subscribe/Subscribe';
import Services from '../../Components/Services/Services';
import Header from '../../Components/Header/Header';

function Home() {
    return ( 
        <>
        <Header></Header>
        <Services></Services>
        <Explore></Explore>
        <Blog></Blog>
        <Subscribe></Subscribe>
        </>
     );
}

export default Home;