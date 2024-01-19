import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header.js';
import CardList from './CardList';
import FicheLogements from './FicheLogement.js';
import APropos from './APropos';
import Banner from './Banner.js';
import Footer from './Footer.js';
import BannerApp from '../assets/IMG.png';
import BannerApropos from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import cardData from './listeLogement.json';
import '../styles/App.css'

function App() {
  const location = useLocation();
  const showText = location.pathname !== '/a-propos'; // showText est true sauf sur la page "A propos"

  const bannerImage =
    location.pathname === '/a-propos' ? BannerApropos : BannerApp;

  const isFicheLogementPage = location.pathname.startsWith('/fiche-logement');
  const showBanner = !isFicheLogementPage;

  return (
    <div className="App">
      <Header />
      {/* Conditionnellement rendre le Banner en fonction de showBanner */}
      {showBanner && <Banner  key={location.pathname} image={bannerImage} showText={showText} />}
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/fiche-logement/:logementId" element={<FicheLogements logements={cardData} />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;