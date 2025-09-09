import { useEffect, useState } from "react";

function App() {
  const [salesLines, setSalesLines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/sales-lines")
      .then(res => res.json())
      .then(data => {
        // data.salesLines es un array de arrays
        const allLines = data.salesLines.flat();
        setSalesLines(allLines);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container-1">
      <h1>WMS PREMIUM DELEVENT</h1>
      <p>Welcome to the WMS PREMIUM DELEVENT application!</p>
      <p>Check the console for the API response.</p>

      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Location Code</th>
            <th>Shortcut Dimension 1 Code</th>
            <th>Document No</th>
          </tr>
        </thead>
        <tbody>
          {salesLines
          .filter(line => line.Location_Code.slice(2) !== line.Shortcut_Dimension_1_Code)
          .map((line, index) => (
            <tr key={index}>
              <td>{line.Location_Code}</td>
              <td>{line.Shortcut_Dimension_1_Code}</td>
              <td>{line.Document_No}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;