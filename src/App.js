import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
 
  
  render() {
   
  
    return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="row">
        <div style={{ height: "75vh"}} className="container valign-wrapper">
        <p className="col s12 center-align">
        Somos un taller de hojalatería y pintura móvil, venimos a ti. 
        Nuestros técnicos son altamente capacitados y experimentados reparan tu vehículo en sus instalaciones. 
        Ya sea que esté en su casa o en el trabajo, todavía se beneficiará de un ahorro masivo de al menos el 60% en comparación
         con los precios tradicionales de los talleres. El costo de la reparación de esos desgastes y arañazos, etc., es casi siempre más 
         barato que el exceso de su seguro, por lo que no es necesario un reclamo de seguro y mantiene intacto su bono vital sin reclamos.
        </p>
        </div>
      </div>
    </div>
  );
}
}


export default App;
