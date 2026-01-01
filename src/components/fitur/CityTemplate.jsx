import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/HeaderDesktop';
import Footer from '../fitur/Footer';
import ProfileCard from '../fitur/ProfileCard';
import { citiesData } from '../../data/citiesData';

// Template komponen untuk semua kota - import dan gunakan sesuai kota
// Contoh: const cityKey = 'balikpapan'; const cityData = citiesData[cityKey];

const CityTemplate = ({ cityKey, cityUrl }) => {
  const cityData = citiesData[cityKey];

  if (!cityData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600 text-lg">Data kota tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="bg-[#2c5845] min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="max-w-8xl mx-auto px-0 sm:px-0 lg:px-0 py-6 sm:py-8">
          {/* Breadcrumb Navigation */}
          <nav className="text-xs sm:text-sm mb-5 mt-[-10px] text-white px-4 sm:px-6 lg:px-8">
            <Link to="/" className="text-white hover:underline hover:decoration-white">Home</Link> 
            <span className="mx-2 text-white">{'>>'}</span>
            <Link to={cityUrl} className="text-white hover:underline hover:decoration-white font-semibold">{cityData.name}</Link>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <div className="lg:col-span-2 bg-[#2c5845] p-5 sm:p-6 lg:p-7 rounded-xl shadow-md border border-white">
              <h1 className="text-center mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {cityData.name}
              </h1>

              {/* Sejarah */}
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Sejarah</h2>
                <p className="leading-relaxed text-sm sm:text-base text-justify text-white">
                  {cityData.history}
                </p>
              </section>

              {/* Geografis */}
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Geografis</h2>
                <p className="leading-relaxed text-sm sm:text-base text-justify text-white">
                  {cityData.geography}
                </p>
              </section>

              {/* Wisata */}
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Destinasi Wisata</h2>
                <p className="leading-relaxed text-sm sm:text-base mb-6 text-white">
                  {cityData.name} menawarkan berbagai destinasi wisata menarik yang bisa dijelajahi:
                </p>

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-6">
                  {cityData.attractions.map((place, index) => (
                    <Link
                      key={index}
                      to={place.detailUrl}
                      className="bg-[#102c1e] p-4 sm:p-5 rounded-lg border border-gray-700 hover:shadow-lg hover:border-orange-400 transition-all cursor-pointer block no-underline"
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {place.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-white mb-3">
                        <strong>Alamat:</strong> {place.address}
                      </p>
                      <p className="text-sm sm:text-base text-white mb-4">
                        {place.description}
                      </p>
                      <div className="mt-4 text-orange-400 hover:text-orange-300 font-semibold text-sm inline-block">
                        Lihat di Maps →
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Profile Card */}
            <ProfileCard cityData={cityData} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CityTemplate;
