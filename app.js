const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;
var colors = require('colors');



//let base = '7';


//path del archivo actual
//console.log(process.argv);
//let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo crear: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}



// console.log(argv.base);
// console.log('limite: ', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1]
//     //console.log(base);