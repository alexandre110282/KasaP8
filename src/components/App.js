import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Header.js';
import FicheLogement from './FicheLogement'; // Importez le composant FicheLogement
import APropos from './APropos'; // Importez le composant APropos

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/fiche-logement" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
      {/* Footer, en-tête, ou tout autre élément commun */}
    </div>
  );
}
export default App;