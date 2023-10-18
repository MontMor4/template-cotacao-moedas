const request = require('request');

// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/brl.json

const moedas = ['usd', 'eur'];

// request(options, callback)

const options = {
    url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/brl.json`,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

const callback = (error, response, body) => {
    
    if(error || response.statusCode != 200) {
        //console.log('Erro na obtenção da cotação de moedas', error);
        return;
    }
    
    const jsonData = JSON.parse(body);

    let result = [];

    moedas.forEach(moeda => {

        if(!jsonData["brl"][`${moeda}`]) return;
        
        let valorMoedaConvertida = (1/jsonData["brl"][`${moeda}`]).toFixed(2);

        result.push({
            type: moeda.toUpperCase(),
            other: valorMoedaConvertida
        });

    });

    console.log(result);
}

request(options, callback);