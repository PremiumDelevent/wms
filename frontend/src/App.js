import { useState } from "react";
import Home from './Home';
import Intercambios from './Intercambios';
import Stock from './Stock';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'intercambios':
        return <Intercambios onNavigate={setCurrentPage} />;
      case 'stock':
        return <Stock onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;