import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const getImagePath = (path) => `${process.env.PUBLIC_URL}/${path}`;

const BlogSection = () => {
    const blogs = [
        {
            name: 'Balikpapan',
            description: 'Pantai BSB',
            image: getImagePath('img/bpp/pantai bsb.jpg'),
            link: '/pantai-bsb',
        },
        {
            name: 'Berau',
            description: 'Pulau Derawan',
            image: getImagePath('img/berau/pulau derawan.jpg'),
            link: '/pulau-derawan',
        },
        {
            name: 'Bontang',
            description: 'Pantai Marina',
            image: getImagePath('img/bontang/pantai marina.jpg'),
            link: '/pantai-marina',
        },
        {
            name: 'Kutai Barat',
            description: 'Air Terjun Jantur Inar',
            image: getImagePath('img/kubar/air terjun jantur inar.jpg'),
            link: '/air-terjun-jantur-inar',
        },
        {
            name: 'Kutai Kartanegara',
            description: 'Museum Mulawarman',
            image: getImagePath('img/kukar/museum mulawarman.jpg'),
            link: '/museum-mulawarman',
        },
        {
            name: 'Kutai Timur',
            description: 'Taman Nasional Kutai',
            image: getImagePath('img/kutim/taman nasional kutai.jpg'),
            link: '/taman-nasional-kutai',
        },
        {
            name: 'Mahakam Ulu',
            description: 'Batu Dinding Long Melaham',
            image: getImagePath('img/mahulu/batu dinding long melaham.jpg'),
            link: '/batu-dinding-long-melaham',
        },
        {
            name: 'Paser',
            description: 'Pantai Pasir Mayang',
            image: getImagePath('img/paser/pantai pasir mayang.jpg'),
            link: '/pantai-pasir-mayang',
        },
        {
            name: 'Penajam Paser Utara',
            description: 'Taman Alun-alun',
            image: getImagePath('img/ppu/taman alun-alun.jpg'),
            link: '/taman-alun-alun',
        },
        {
            name: 'Samarinda',
            description: 'Masjid Islamic Center',
            image: getImagePath('img/smd/masjid islamic center.jpg'),
            link: '/masjid-islamic-center',
        },
    ];

    const firstFive = blogs.slice(0, 5);
    const nextFive = blogs.slice(5);

    return (
        <section id="blogs" className="py-[30px] bg-[#2c5845]">
            {/* Heading Section */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-orange-400 mb-[20px] tracking-tight">RAGAM KALTIM'S BLOG</h1>
                <h2 className="text-xl font-semibold text-gray-200 mb-[20px] max-w-3xl mx-auto">
                    <span className="text-gray-300">Tempat Wisata yang terkenal di setiap Kota dan Kabupaten di Kalimantan Timur</span>
                </h2>
            </div>

            {/* First 5 Blog Cards */}
            <div className="flex flex-wrap justify-between gap-5 mt-7 px-5">
                {firstFive.map((blog, index) => (
                    <Link to={blog.link} key={index} className="block flex-1 min-w-[280px] max-w-sm no-underline">
                        <div
                            className="bg-[#102c1e] p-6 shadow-md rounded-xl hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 border border-gray-700 overflow-hidden h-full cursor-pointer"
                        >
                            <div className="w-full h-48 bg-[#1a3a2a] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                                <img
                                    src={blog.image}
                                    alt={blog.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-sm text-gray-400 mb-2 font-medium">{blog.name}</h3>
                            <p className="text-white font-semibold text-base">{blog.description}</p>
                            <div className="mt-4 text-orange-400 font-semibold text-sm">Baca Selengkapnya →</div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Second 5 Blog Cards */}
            <div className="flex flex-wrap justify-between gap-5 mt-8 px-5 pb-3">
                {nextFive.map((blog, index) => (
                    <Link to={blog.link} key={index} className="block flex-1 min-w-[280px] max-w-sm no-underline">
                        <div
                            className="bg-[#102c1e] p-6 shadow-md rounded-xl hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 border border-gray-700 overflow-hidden h-full cursor-pointer"
                        >
                            <div className="w-full h-48 bg-[#1a3a2a] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                                <img
                                    src={blog.image}
                                    alt={blog.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-sm text-gray-400 mb-2 font-medium">{blog.name}</h3>
                            <p className="text-white font-semibold text-base">{blog.description}</p>
                            <div className="mt-4 text-orange-400 font-semibold text-sm">Baca Selengkapnya →</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

const Blog = () => {
    return (
        <div>
            <Header />
            <BlogSection />
            <Footer />
        </div>
    );
};

export default Blog;
