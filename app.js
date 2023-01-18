const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(archivoCreado => console.log('se a creado correctamente el archivo', archivoCreado))
    .catch(err => console.log(err));



