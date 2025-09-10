function Home({ onNavigate }) {
  return (
    <div className="container-1">
      <h1>WMS PREMIUM DELEVENT</h1>
      <p>Welcome to the WMS PREMIUM DELEVENT application!</p>
      <p>
        <button 
          onClick={() => onNavigate('intercambios')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Ver Intercambios
        </button>

        <button 
          onClick={() => onNavigate('stock')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Ver Stock
        </button>
      </p>
    </div>
  );
}

export default Home;