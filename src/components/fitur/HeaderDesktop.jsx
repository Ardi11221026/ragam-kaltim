import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const HeaderDesktop = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Data statis untuk pencarian
    const pages = [
        { title: "Balikpapan", url: "/balikpapan" },
        { title: "Berau", url: "/berau" },
        { title: "Bontang", url: "/bontang" },
        { title: "Kutai Barat", url: "/kutai-barat" },
        { title: "Kutai Kartanegara", url: "/kutai-kartanegara" },
        { title: "Kutai Timur", url: "/kutai-timur" },
        { title: "Mahakam Ulu", url: "/mahakam-ulu" },
        { title: "Paser", url: "/paser" },
        { title: "Penajam Paser Utara", url: "/penajam-paser-utara" },
        { title: "Samarinda", url: "/samarinda" },
        
        // Tempat Wisata Balikpapan
        { title: "Kebun Raya Balikpapan", url: "/kebun-raya-balikpapan" },
        { title: "Pantai BSB", url: "/pantai-bsb" },
        { title: "Pantai Kemala", url: "/pantai-kemala" },
        { title: "Pantai Manggar", url: "/pantai-manggar" },
        { title: "Wisata Bamboe Wanadesa", url: "/wisata-bamboe-wanadesa" },
        
        // Tempat Wisata Berau
        { title: "Air Terjun Bawan Batu", url: "/air-terjun-bawan-batu" },
        { title: "Danau Labuan Cermin", url: "/danau-labuan-cermin" },
        { title: "Pulau Derawan", url: "/pulau-derawan" },
        { title: "Pulau Kakaban", url: "/pulau-kakaban" },
        { title: "Pulau Maratua", url: "/pulau-maratua" },
        
        // Tempat Wisata Bontang
        { title: "Bontang Kuala", url: "/bontang-kuala" },
        { title: "Bontang Mangrove Park", url: "/bontang-mangrove-park" },
        { title: "Pantai Marina", url: "/pantai-marina" },
        { title: "Pantai Tanjung Laut", url: "/pantai-tanjung-laut" },
        { title: "Pulau Beras Basah", url: "/pulau-beras-basah" },
        
        // Tempat Wisata Kutai Barat
        { title: "Air Terjun Jantur Inar", url: "/air-terjun-jantur-inar" },
        { title: "Danau Aco", url: "/danau-aco" },
        { title: "Danau Jempang", url: "/danau-jempang" },
        { title: "Lamin Eheng", url: "/lamin-eheng" },
        { title: "Taman Budaya Sentawar", url: "/taman-budaya-sentawar" },
        
        // Tempat Wisata Kutai Kartanegara
        { title: "Bukit Bangkirai", url: "/bukit-bangkirai" },
        { title: "Museum Mulawarman", url: "/museum-mulawarman" },
        { title: "Pantai Ambalat", url: "/pantai-ambalat" },
        { title: "Pulau Kumala", url: "/pulau-kumala" },
        { title: "Taman Kota Raja", url: "/taman-kota-raja" },
        
        // Tempat Wisata Kutai Timur
        { title: "Bukit Pelangi", url: "/bukit-pelangi" },
        { title: "Taman Nasional Kutai", url: "/taman-nasional-kutai" },
        { title: "Pantai Teluk Lombok", url: "/pantai-teluk-lombok" },
        { title: "Wisata Teluk Prancis", url: "/wisata-teluk-prancis" },
        
        // Tempat Wisata Mahakam Ulu
        { title: "Batu Dinding Long Melaham", url: "/batu-dinding-long-melaham" },
        { title: "Datah Bilang Ilir", url: "/datah-bilang-ilir" },
        { title: "Desa Batu Majang", url: "/desa-batu-majang" },
        { title: "Kampung Long Tuyoq", url: "/kampung-long-tuyoq" },
        { title: "Riam Udang", url: "/riam-udang" },
        
        // Tempat Wisata Paser
        { title: "Air Terjun Doyam Seriam", url: "/air-terjun-doyam-seriam" },
        { title: "Gunung Embun", url: "/gunung-embun" },
        { title: "Museum Sadurengas", url: "/museum-sadurengas" },
        { title: "Pantai Pasir Mayang", url: "/pantai-pasir-mayang" },
        { title: "Telaga Ungu", url: "/telaga-ungu" },
        
        // Tempat Wisata PPU
        { title: "Pantai Saloloang", url: "/pantai-saloloang" },
        { title: "Pantai Sipakario Nipah-Nipah", url: "/pantai-sipakario-nipah-nipah" },
        { title: "Taman Alun-Alun", url: "/taman-alun-alun" },
        { title: "Taman Bunga Rozeline", url: "/taman-bunga-rozeline" },
        { title: "Wisata Sawah Gunung Mulia", url: "/wisata-sawah-gunung-mulia" },
        
        // Tempat Wisata Samarinda
        { title: "Air Terjun Tanah Merah", url: "/air-terjun-tanah-merah" },
        { title: "Masjid Islamic Center", url: "/masjid-islamic-center" },
        { title: "Taman Tepian Mahakam", url: "/taman-tepian-mahakam" },
    ];

    const toggleSearch = () => setSearchOpen((prev) => !prev);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            const results = pages.filter((page) =>
                page.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

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

    return (
        <header className="hidden md:block bg-[#102c1e] shadow-md py-6 px-6 relative z-50">
            <div className="flex justify-between items-center">
                {/* Logo - Left */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/ragam kaltim.png`}
                            alt="Ragam Kaltim Logo"
                            className="h-12"
                        />
                        <div className="ml-3 text-xl font-bold leading-none text-white">
                            Ragam <br /> Kaltim
                        </div>
                    </Link>
                </div>

                {/* Navigation - Right */}
                <nav>
                    <ul className="flex space-x-6 items-center">
                        <li>
                            <Link
                                to="/"
                                className="font-bold text-white hover:bg-[#0a1f13] px-3 py-2 rounded transition-all duration-300"
                            >
                                Beranda
                            </Link>
                        </li>

                        {/* Destinasi Dropdown */}
                        <li className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="font-bold text-white hover:bg-[#0a1f13] px-3 py-2 rounded flex items-center transition-all duration-300"
                            >
                                Destinasi
                                <FaChevronDown className={`ml-1 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute top-full mt-2 bg-[#102c1e] text-white rounded shadow-lg w-52 z-50 border border-gray-700">
                                    {destinations.map((destination) => (
                                        <li key={destination.url}>
                                            <Link
                                                to={destination.url}
                                                className="block px-4 py-2 hover:bg-[#0a1f13] transition-all duration-300"
                                                onClick={() => setDropdownOpen(false)}
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
                                className="font-bold text-white hover:bg-[#0a1f13] px-3 py-2 rounded transition-all duration-300"
                            >
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="font-bold text-white hover:bg-[#0a1f13] px-3 py-2 rounded transition-all duration-300"
                            >
                                Tentang
                            </Link>
                        </li>

                        {/* Search Icon */}
                        <li className="relative">
                            <button
                                onClick={toggleSearch}
                                className="text-white hover:bg-[#0a1f13] px-2 py-2 rounded transition-all duration-300"
                            >
                                <FaSearch className="h-5 w-5" />
                            </button>
                            {searchOpen && (
                                <form
                                    onSubmit={handleSearchSubmit}
                                    className="absolute top-full right-0 mt-2 bg-white rounded shadow-lg p-3 w-64 z-50"
                                >
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Cari..."
                                        className="w-full p-2 border border-gray-300 rounded text-gray-800"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-2 w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition-all duration-300"
                                    >
                                        Cari
                                    </button>
                                </form>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
                <div className="mt-4 bg-white shadow-lg rounded p-4 w-96 ml-auto mr-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Hasil Pencarian:</h3>
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.url} className="border-b border-gray-200 py-2 last:border-b-0">
                                <Link 
                                    to={result.url} 
                                    className="text-gray-800 hover:text-blue-600 hover:underline"
                                    onClick={() => setSearchResults([])}
                                >
                                    {result.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default HeaderDesktop;
