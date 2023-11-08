import axios from 'axios';

const converterMoedas = async (moedas) => {
  try {
    const response = await axios.get(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/brl.json',
    );
    const jsonData = response.data;
    const result = [];

    moedas.forEach((moeda) => {
      if (!jsonData.brl[`${moeda}`]) return;

      const valorMoedaConvertida = (1 / jsonData.brl[moeda]).toFixed(2);

      result.push({
        type: moeda.toUpperCase(),
        other: valorMoedaConvertida,
      });
    });

    return result;
  } catch (error) {
    console.log('Erro na obtenção da cotação de moedas');
    return [];
  }
};

export default converterMoedas;
