function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola ' + nombre);
    miCallback(nombre); // ejecuto la afuncion enviada como parametro!
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios ', nombre);
    otroCallback();
  }, 1000);  
}

console.log('Iniciando proceso');

/* 
Utilizando los callbacks hago que las funciones se ejecuten en orden
mas alla de que tengan tiempos distintos y evitamos que el asincronismo 
altere el funcionamiento del programa
*/
hola('Javier', function(nombre) {
  adios(nombre, function() {
    console.log('Terminando proceso');
  })
});

/*
Sin el uso de callbacks, por los timeouts de cada funcion el asincromismo
haria que adios() suceda antes que hola()
*/
// hola('Javier', function() {});
// adios('Javier', function() {});