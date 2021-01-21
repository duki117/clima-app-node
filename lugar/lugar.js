const axios = require('axios');

const getLugarLatLng = async (direc) => {

    const encodeUlr = encodeURI( direc);
    //console.log(encodeUlr);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUlr}`,
        headers: {'X-RapidAPI-Key': '1adcd708e2msh425b9659a67bfe2p133c1ajsnbf625ca673a4'}
    });

    const resp = await instance.get();

    if(resp.data.coord.lenght === 0){
        throw new Error(`No hay resultados para ${direc}`);
    }

    const data = resp.data.coord;
    const direccion = resp.data.name;
    const lat = data.lat;
    const lng = data.lon;
    

    return{
        direccion,
        lat,
        lng
    }        

}


module.exports = {
    getLugarLatLng
}