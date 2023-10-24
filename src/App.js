import React, { useEffect , useState} from 'react';
import './App.scss';

import Logo from './components/top/logo';
import TopLeft from './components/top/topLeft';
import TopRight from './components/top/topRight';
import ComponenteA from './components/mainContent/a';
import BottomLeft from './components/bottom/bottomLeft';
import BottomRight from './components/bottom/bottomRight';

import converterMoedas from './scripts/converterMoedas';

const rooms = [
  {type: 'Testes', other: "R$ 500,00"},
  {type: 'Suite', other: "R$ 150,00"},
  {type: 'Bangalô', other: "R$ 100,00"},
];

const others = [
  {type: 'Café da manhã', other: "R$ 20,00"},
  {type: 'Almoço', other: "R$ 40,00"},
  {type: 'Jantar', other: "R$ 60,00"},
];

const moedas = ['usd', 'eur', 'bat'];

function App() {

  const [cotacaoMoedas, setCotacaoMoedas] = useState([]);

  function TopSection() {
    return (
      <section className="secao1">
        <TopLeft />
        <Logo />
        <TopRight />
      </section>
    );
  }

  function MainSection() {
    return(
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
            { cotacaoMoedas.map((cotacaoMoeda) => (
              <React.Fragment key={cotacaoMoeda.type}>
                <ComponenteA object={cotacaoMoeda} />
                <hr className="line" />
              </React.Fragment>
            ))}
          </div>
  
        </section>
    );
  } 
   
  function BottomSection() {
    return (
      <section className="secao3">
          <BottomLeft className="bottomLeft"/>
          <BottomRight className="bottomRight"/>
        </section>
    );
  }

  
  const atualizarCotacaoMoedas = async () => {
    converterMoedas(moedas)
    .then(result => setCotacaoMoedas(result))
    .catch(error => console.error(error.message));
  }

  useEffect(() => {
    atualizarCotacaoMoedas();

    const intervalId = setInterval(() => {
      atualizarCotacaoMoedas();
    }, 30 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
    }, []
  );

  return (
    <div>
      <TopSection/>
      <MainSection/>
      <BottomSection/>
    </div>
  );
}

export default App;
