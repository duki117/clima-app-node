//const axios = require('axios')
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (direccion) =>{

    try {
        const datos =  await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima( datos.lat, datos.lng)
        console.log(`El clima de ${direccion} es de ${temp} grados.`);

    } catch (e) {
        console.log(`No hay resultados para ${direccion}`);
    }
}

getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log);

/*
lugar.getLugarLatLng(argv.direccion)
        .then(console.log);

clima.getClima()
      .then()
      .catch(console.log);  

const encodeUlr = encodeURI( argv.direccion);
console.log(encodeUlr);

const instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUlr}`,
    headers: {'X-RapidAPI-Key': '1adcd708e2msh425b9659a67bfe2p133c1ajsnbf625ca673a4'}
  });

  instance.get()
          .then( resp => {
              console.log(resp.data.coord);
              //console.log(resp.data.coord[1]);
          })
          .catch( err => {
            console.log('ERROR!!!', err);
        });

*/