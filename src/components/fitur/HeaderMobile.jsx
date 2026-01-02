import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const HeaderMobile = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const destinations = [
        { title: "Balikpapan", url: "/balikpapan" },
        { title: "Berau", url: "/berau" },
        { title: "Bontang", url: "/bontang" },
        { title: "Kutai Barat", url: "/kutai-barat" },
        { title: "Kutai Kartanegara", url: "/kutai-kartanegara" },
        { title: "Kutai Timur", url: "/kutai-timur" },
        { title: "Mahakam Ulu", url: "/mahakam-ulu" },
        { title: "Paser", url: "/paser" },
        { title: "Penajam Paser Utara", url: "/penajam-paser-utara" },
        { title: "Samarinda", url: "/samarinda" }
    ];

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (mobileMenuOpen) {
            setDropdownOpen(false);
        }
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#102c1e] shadow-md py-4 px-4 z-50">
            {/* Top Bar - Logo Left, Hamburger Right */}
            <div className="flex justify-between items-center">
                {/* Logo - Left */}
                <Link to="/" className="flex items-center mr-[350px]" onClick={closeMobileMenu}>
                    <img
                        src={`${process.env.PUBLIC_URL}/img/ragam kaltim.png`}
                        alt="Ragam Kaltim Logo"
                        className="h-10"
                    />
                    <div className="ml-2 text-lg font-bold leading-none text-white">
                        Ragam <br /> Kaltim
                    </div>
                </Link>

                {/* Hamburger Button with Animation */}
                <button
                    onClick={toggleMenu}
                    className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none mr-[5px]"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                            mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                            mobileMenuOpen ? 'opacity-0' : ''
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                            mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu Dropdown with Transition */}
            <div
                className={`transition-all duration-300 ease-out overflow-hidden ${
                    mobileMenuOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="mt-4 pb-4 mr-[350px]">
                    <ul className="flex flex-col space-y-1">
                        <li>
                            <Link
                                to="/"
                                className="block text-left font-bold text-white hover:bg-[#0a1f13] px-4 py-3 rounded transition-all duration-300"
                                onClick={closeMobileMenu}
                            >
                                Beranda
                            </Link>
                        </li>

                        {/* Destinasi Dropdown */}
                        <li>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-full text-left font-bold text-white hover:bg-[#0a1f13] px-4 py-3 rounded flex items-center justify-between transition-all duration-300"
                            >
                                Destinasi
                                <FaChevronDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {dropdownOpen && (
                                <ul className="mt-2 bg-[#0a1f13] rounded-lg overflow-hidden">
                                    {destinations.map((destination) => (
                                        <li key={destination.url}>
                                            <Link
                                                to={destination.url}
                                                className="block text-left text-white hover:bg-[#102c1e] px-6 py-2 transition-all duration-300 text-sm"
                                                onClick={closeMobileMenu}
                                            >
                                                {destination.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                to="/blog"
                                className="block text-left font-bold text-white hover:bg-[#0a1f13] px-4 py-3 rounded transition-all duration-300"
                                onClick={closeMobileMenu}
                            >
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="block text-left font-bold text-white hover:bg-[#0a1f13] px-4 py-3 rounded transition-all duration-300"
                                onClick={closeMobileMenu}
                            >
                                Tentang
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderMobile;
