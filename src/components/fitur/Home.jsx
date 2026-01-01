// Home.jsx
import React from 'react';
import Header from './HeaderDesktop';
import Footer from './Footer';
import Banner from './Banner';
import Destination from './Destination';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Destination />
            <Footer />
        </div>
    );
};

export default Home;
