
function Stock({ onNavigate }) {

  return (
    <div className="container-1">

        <button 
          onClick={() => onNavigate('home')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ← Volver al inicio
        </button>

        <h1>Stock - WMS PREMIUM DELEVENT</h1>

        <p>Esta es la página de Stock.</p>

    </div>
  );
}

export default Stock;
