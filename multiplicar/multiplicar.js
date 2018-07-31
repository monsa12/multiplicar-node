const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`=========Tabla de ${base}==========`.red);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {
        let operacion = base * i;
        //console.log(operacion);
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base *i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-del-${base}.txt`.green);
        });


    });
}


module.exports = {
    crearArchivo,
    listarTabla
}