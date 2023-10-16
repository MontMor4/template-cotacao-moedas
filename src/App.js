// src/App.js
import React from 'react';
import './App.scss';

import Logo from './components/top/logo';
import TopLeft from './components/top/topLeft';
import TopRight from './components/top/topRight';

import ComponenteA from './components/mainContent/a';

import BottomLeft from './components/bottom/bottomLeft';
import BottomRight from './components/bottom/bottomRight';

function App() {
  const rooms = [
    {type: 'Luxo', other: "R$ 250,00"},
    {type: 'Suite', other: "R$ 150,00"},
    {type: 'Bangalô', other: "R$ 100,00"},
  ];

  const others = [
    {type: 'Café da manhã', other: "R$ 20,00"},
    {type: 'Almoço', other: "R$ 40,00"},
    {type: 'Jantar', other: "R$ 60,00"},
  ];

  const cotacaoMoedas = [
    {type: 'Dólar', other: "R$ 5,35"},
    {type: 'Euro', other: "R$ 6,35"},
  ];

  return (
    <div>
      <section className="secao1">
        <TopLeft />
        <Logo/>
        <TopRight />
      </section>
      <section className="secao2">

        <div className="rooms">
          <h1>QUARTOS</h1>
          <h3 className="transcript">ROOMS</h3>
          {rooms.map((room) => (
            <React.Fragment key={room.type}>
              <ComponenteA object={room} />
              <hr className="line" />
            </React.Fragment>
          ))}
        </div>

        <div className="other-services">
          <h1>OUTROS SERVIÇOS</h1>
          <h3 className="transcript">OTHER SERVICES</h3>
          {others.map((other) => (
            <React.Fragment key={other.type}>
              <ComponenteA object={other} />
              <hr className="line" />
            </React.Fragment>
          ))}
        </div>
        
        <div className="informations">
          <h1>INFORMAÇÕES</h1>
          <h3 className="transcript">INFORMATIONS</h3>
          {cotacaoMoedas.map((cotacaoMoeda) => (
            <React.Fragment key={cotacaoMoeda.type}>
              <ComponenteA object={cotacaoMoeda} />
              <hr className="line" />
            </React.Fragment>
          ))}
        </div>

      </section>
      <section className="secao3">
        <BottomLeft className="bottomLeft"/>
        <BottomRight className="bottomRight"/>
      </section>
    </div>
  );
}

export default App;
