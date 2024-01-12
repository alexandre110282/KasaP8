import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './Header.js';
import CardList from './CardList';
import FicheLogement from './FicheLogement';
import APropos from './APropos';
import Banner from './Banner.js'; // Ajout de Banner
import Footer from './Footer.js'; // Ajout de Footer

function App() {
  const location =  useLocation()
  return (
    <div className="App">
      <Header /> 
      <Banner /> {/* Ajout de Banner */}
      <CardList />
      <Routes>
        <Route path="/fiche-logement" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
     
      {/* Footer, en-tête, ou tout autre élément commun */}
      <Footer /> {/* Ajout de Footer */}
    </div>
  );
}

export default App;