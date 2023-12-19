import React from 'react';
import { TravelProvider } from './TravelContest';
import TravelList from './pages/TravelList';
import TravelForm from './pages/TravelForm';
import  './styles/styleForm.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <TravelProvider>
      <div className="app">
        <div className='de'> <h1 className='ti'>Ajout d'un voyage</h1></div>
        <TravelForm />
        <div className='de'> <h1 className='ti'>Liste des voyages</h1></div>
        <TravelList />
      </div>
    </TravelProvider>
  );
};

export default App;