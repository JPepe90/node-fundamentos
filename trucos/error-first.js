function asincrona(cb) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      cb(null,a);
    } catch (err){
      cb(err, null);
    }
  }, 1000);
}


asincrona(function (err, dato) {
  if (err) {
    // Gestion del error en la ejecucion de la funcion
    console.error('Hay un error', err);
    return false;

    // throw err; // NO VA A FUNCIONAR CON ASINCRONIA!
  }

  console.log('Todo ha ido bien, mi data es', dato);
});
