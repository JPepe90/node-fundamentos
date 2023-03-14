function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Hola ' + nombre);
      resolve(nombre); // ejecuto la afuncion enviada como parametro!
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('blablabla...');
      resolve(nombre);
  }, 1000);
  });
}

function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Adios ' + nombre);
      reject('Hay un error!!!');
    }, 1000);  
  });
}

// ... Ejecucion

console.log('Iniciado el proceso');
hola('Javier')
  // resolve
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log('Terminado el proceso');
  })
  //reject
  .catch(error => {
    console.error('Ha habido un error');
    console.error(error);
  })