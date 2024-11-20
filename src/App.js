import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Integrantes de PPI</h1>
      <table border="1" style={{ margin: "20px auto", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Santiago</td>
            <td>Matos</td>
            <td>santiagodejesusmatospena@gmail.com</td>
            <td>3113851424</td>
          </tr>
          <tr>
            <td>Alex</td>
            <td>Amaya</td>
            <td>alexamaya3019@gmail.com</td>
            <td>3209665241</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
