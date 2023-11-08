import React, { useContext, useEffect, useState } from 'react';
import { useMedia, useTemplateVal } from '@dsplay/react-template-utils';
import './App.scss';

import Logo from './components/top/logo';
import TopLeft from './components/top/topLeft';
import TopRight from './components/top/topRight';
import ComponenteA from './components/mainContent/a';
import BottomLeft from './components/bottom/bottomLeft';
import BottomRight from './components/bottom/bottomRight';

import converterMoedas from './scripts/converterMoedas';
import { ThemeContext } from './contexts/context';

function App() {
  const { globalTheme } = useContext(ThemeContext);
  const logo = useTemplateVal('logo');

  const media = useMedia();

  const {
    topLeftText,
    mainContent1,
    mainContent2,
    mainContent3,
    bottomLeftText,
    bottomRightText,
  } = media;

  const [cotacaoMoedas, setCotacaoMoedas] = useState([]);

  const atualizarCotacaoMoedas = async () => {
    converterMoedas(mainContent3.currencies)
      .then((result) => setCotacaoMoedas(result))
      .catch((error) => console.error(error.message));
  };

  useEffect(() => {
    atualizarCotacaoMoedas();

    const intervalId = setInterval(() => {
      atualizarCotacaoMoedas();
    }, 30 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function TopSection() {
    return (
      <section className="secao1">
        <TopLeft text={topLeftText} />
        <Logo img={logo} />
        <TopRight />
      </section>
    );
  }

  function MainSection() {
    return (
      <section className="secao2">
        <div className="rooms">
          <h1>{mainContent1.title}</h1>
          <h3 className="transcript" style={{ color: globalTheme.secondaryColor }}>{mainContent1.subtitle}</h3>
          {mainContent1.options.map((room) => (
            <React.Fragment key={room.type}>
              <ComponenteA object={room} />
              <hr className="line" />
            </React.Fragment>
          ))}
        </div>

        <div className="other-services">
          <h1>{mainContent2.title}</h1>
          <h3 className="transcript" style={{ color: globalTheme.secondaryColor }}>{mainContent2.subtitle}</h3>
          {mainContent2.options.map((other) => (
            <React.Fragment key={other.type}>
              <ComponenteA object={other} />
              <hr className="line" />
            </React.Fragment>
          ))}
        </div>

        <div className="informations">
          <h1>{mainContent3.title}</h1>
          <h3 className="transcript" style={{ color: globalTheme.secondaryColor }}>{mainContent3.subtitle}</h3>
          {cotacaoMoedas.map((cotacaoMoeda) => (
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
        <BottomLeft className="bottomLeft" text={bottomLeftText} />
        <BottomRight className="bottomRight" text={bottomRightText} />
      </section>
    );
  }

  return (
    <div style={{ backgroundColor: globalTheme.backgroundColor, color: globalTheme.primaryColor }} className="app">
      <TopSection />
      <MainSection />
      <BottomSection />
    </div>
  );
}

export default App;
