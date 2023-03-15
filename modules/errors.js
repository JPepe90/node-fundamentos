function otraFuncion() {
  return seRompe();
}

function seRompe() {
  return 3 + z;
}

// Para el caso de funciones asincronas, debemos capturar el error en el lugar
function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + w;
    } catch(err) {
      console.error('Error en mi funcion asincrona');
      cb(err);
    }
  }, 1000);
}

// Podemos usar este metodo para capturar funciones seincronas!
try {
  otraFuncion();
} catch(err) {
  console.error('No funciono la funcion seRompe() porque:', err.message);
}

try {
  seRompeAsincrona((err) => {
    console.error('No funciono la funcion seRompeAsincrona() porque:', err.message)
  });
} catch(err) {
  console.error('No funciono la funcion seRompe() porque:', err.message);
}

console.log('Mi hilo principal sigue funcionando');