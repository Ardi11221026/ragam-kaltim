// Home.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Destination from './Destination';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="pt-16 md:pt-0">
                <Banner />
                <Destination />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
