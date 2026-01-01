import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";

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

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    };

    return (
        <header className="md:hidden bg-[#102c1e] shadow-md py-4 px-4 relative z-50">
            {/* Top Bar - Logo Left, Hamburger Right */}
            <div className="flex justify-between items-center">
                {/* Logo - Left */}
                <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
                    <img
                        src={`${process.env.PUBLIC_URL}/img/ragam kaltim.png`}
                        alt="Ragam Kaltim Logo"
                        className="h-10"
                    />
                    <div className="ml-2 text-lg font-bold leading-none text-white">
                        Ragam <br /> Kaltim
                    </div>
                </Link>

                {/* Hamburger / Close Button - Right */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="z-50 p-2"
                    aria-label="Toggle menu"
                >
                    {!mobileMenuOpen ? (
                        <div className="flex flex-col space-y-1.5">
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </div>
                    ) : (
                        <FaTimes className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <nav className="mt-4 pb-4">
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
            )}
        </header>
    );
};

export default HeaderMobile;
