import { useEffect, useState } from "react";


function Stock({ onNavigate }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      fetch("http://localhost:4000/api/products")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const allProducts = data.products.flat();
          setProducts(allProducts);
        })
    }, []);

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

        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Display Name</th>
              <th>Number</th>
              <th>Category</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products
              .map((product, index) => (
                <tr key={index}>
                  <td>{product.displayName}</td>
                  <td>{product.number}</td>
                  <td>{product.itemCategoryCode}</td>
                  <td>0</td>
                </tr>
              ))}
          </tbody>
        </table>

    </div>
  );
}

export default Stock;
