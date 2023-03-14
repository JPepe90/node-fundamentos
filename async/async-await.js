async function hola(nombre) { // convertimos las funciones en asyncronas
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Hola ' + nombre);
      resolve(nombre); // ejecuto la afuncion enviada como parametro!
    }, 1500);
  });
}

function hablar() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('blablabla...');
      resolve();
  }, 1000);
  });
}

function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Adios ' + nombre);
      resolve();
    }, 1000);  
  });
}

async function main() {
  let nombre = await hola('Javier');
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Terminamos el proceso');
}

console.log('Empezamos el proceso');
main();
// console.log('Terminamos el proceso'); // De esta forma funciona sincrono