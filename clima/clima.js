const axios = require('axios');

const getClima = async (lat, lng) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6938fe3790d417f3ea180b5d75ccd6a1&units=metric`);


    return resp.data.main.temp;
}

module.exports = {
    getClima
}