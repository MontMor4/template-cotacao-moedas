/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable no-var */
var dsplay_config = {
  // config parameters
  locale: "pt",
  orientation:
    window.innerHeight < window.innerWidth ? "landscape" : "portrait",
  // Android SDK version
  osVersion: 19,
  // DSPLAY App version code
  appVersion: 99,
};

var dsplay_media = {
  // for json service based media
  // result: { "validity": "2018-08-13T18:22:55.238Z", "showOutdated": true, "data": {} },
  // custom media parameters
  // customMediaParam: "value",
  mainContent1: {
    title: "QUARTOS",
    subtitle: "ROOMS",
    options: [
      { type: "Solteiro", other: "R$ 200,00" },
      { type: "Casal", other: "R$ 300,00" },
      { type: "Quádruplo", other: "R$ 500,00" },
    ],
  },

  mainContent2: {
    title: "SERVIÇOS",
    subtitle: "SERVICES",
    options: [
      { type: "Café", other: "R$ 25,00" },
      { type: "Almoço", other: "R$ 40,00" },
      { type: "Jantar", other: "R$ 60,00" },
    ],
  },

  mainContent3: {
    title: "MOEDAS",
    subtitle: "CURRENCIES",
    currencies: ["usd", "eur"],
  },

  topLeftText: {
    title: "Bem Vindo",
    subtitle: "Welcome",
  },

  bottomLeftText: "Não aceitamos cheques/Cartões Diners",

  bottomRightText: "Cobramos 5% de ICSS",
};

var dsplay_template = {
  // template parameter
  // template_var: "My Template Var",
  // logo: "../test-assets/dsplay-logo.png",
  // title: "My Super Template",
  // expanded: "false",
  logo: '../test-assets/dsplay-logo.png',
};
