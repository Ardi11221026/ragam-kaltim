import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/HeaderDesktop';
import Footer from '../fitur/Footer';
import { tempatwisataData } from '../../data/tempatwisataData';

const TempatWisataTemplate = ({ placeKey, placeUrl }) => {
  const placeData = tempatwisataData[placeKey];

  if (!placeData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600 text-lg">Data tempat wisata tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="bg-[#2c5845] min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="max-w-8xl mx-auto px-0 sm:px-0 lg:px-0 py-6 sm:py-8">
          {/* Breadcrumb Navigation - Home > City > Place */}
          <nav className="text-xs sm:text-sm mb-5 mt-[-10px] text-white px-4 sm:px-6 lg:px-8">
            <Link to="/" className="text-white hover:underline hover:decoration-white">Home</Link>
            <span className="mx-2 text-white">{'>>'}</span>
            <Link to={placeUrl} className="text-white hover:underline hover:decoration-white">{placeData.city}</Link>
            <span className="mx-2 text-white">{'>>'}</span>
            <span className="font-semibold text-white">{placeData.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <div className="lg:col-span-2 bg-[#2c5845] p-5 sm:p-6 lg:p-7 rounded-xl shadow-md border border-white">
              <h1 className="text-center mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {placeData.name}
              </h1>

              {/* Image */}
              {placeData.image && (
                <div className="mb-8 text-center">
                  <img
                    src={placeData.image}
                    alt={`Gambar ${placeData.name}`}
                    className="w-full max-h-96 object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Main Description */}
              <section className="mb-8">
                <p className="leading-relaxed text-sm sm:text-base text-justify text-white">
                  {placeData.fullDescription}
                </p>
              </section>

              {/* Activities & Facilities */}
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Aktivitas dan Fasilitas</h2>
                <p className="leading-relaxed text-sm sm:text-base text-justify text-white">
                  Tempat wisata ini menawarkan berbagai aktivitas dan fasilitas menarik bagi pengunjung untuk menikmati pengalaman yang tak terlupakan.
                </p>
              </section>

              {/* Access & Location */}
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Akses dan Lokasi</h2>
                <p className="leading-relaxed text-sm sm:text-base text-justify text-white">
                  {placeData.address}
                </p>
              </section>

              {/* Map Link */}
              <section className="mb-8">
                <a
                  href={placeData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
                >
                  Lihat di Maps →
                </a>
              </section>
            </div>

            {/* Profile Card Style Sidebar - BlogRandom style */}
            <div className="lg:col-span-1 w-full">
              <div className="bg-[#2c5845] p-5 sm:p-6 rounded-xl shadow-md sticky top-24 border-2 border-white">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Jelajahi Lebih Lanjut</h3>
                
                {/* Random destinations */}
                {(() => {
                  const allPlaces = Object.entries(tempatwisataData).map(([key, value]) => ({
                    key,
                    ...value,
                  }));
                  const randomPlaces = allPlaces
                    .filter(place => place.key !== placeKey)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 5);
                  
                  return (
                    <div className="space-y-3">
                      {randomPlaces.map((place) => (
                        <Link
                          key={place.key}
                          to={`/${place.key}`}
                          className="block bg-[#102c1e] p-3 rounded-lg border border-gray-700 hover:border-orange-400 transition-all duration-300 no-underline group"
                        >
                          {place.image && (
                            <div className="mb-2 overflow-hidden rounded-lg h-24">
                              <img
                                src={place.image}
                                alt={place.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                            {place.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {place.city}
                          </p>
                        </Link>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TempatWisataTemplate;
