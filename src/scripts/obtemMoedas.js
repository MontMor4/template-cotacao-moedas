const request = require('request');

// https://docs.awesomeapi.com.br/api-de-moedas

const moedas = 'USD-BRL,EUR-BRL';

// request(options, callback)

const options = {
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

const callback = (error, response, body) => {
    
    if(error || response.statusCode != 200) {
        console.log('Erro na obtenção da cotação de moedas', error);
        return;
    }
    
    const jsonData = JSON.parse(body);

    const result = Object.values(jsonData).map(moeda => ({
        type: moeda.code,
        other: moeda.bid
    }));

    return result;
    
}

request(options, callback);