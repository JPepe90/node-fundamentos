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

function hablar(callbackHablar) {
  setTimeout(() => {
      console.log('blablabla...');
      callbackHablar();
  }, 1000);
}


/* 
Callbacks Hell
*/
// console.log('Iniciando proceso');
// hola('Javier', function(nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         hablar(function () {
//           hablar(function () {
//             adios(nombre, function() {
//               console.log('Terminando proceso');
//             });
//           });
//         });
//       });
//     });
//   });
// });


// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Resolviendo el Calbacks Hell
// -----------------------------------------------------------------------

function conversacion(nombre, veces, callback) {
  // lo mejor que podemos hacer es una funcion recursiva por el numero de veces
  if (veces > 0) {
    hablar(function() {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

hola('Javier', function(nombre) {
  conversacion(nombre, 4, function() {
    console.log('Proceso Terminado');
  });
});
