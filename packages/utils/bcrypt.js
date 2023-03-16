const bcrypt = require('bcrypt');

const pw = '1234Segura!!';
let pwValidation = false;

bcrypt.hash(pw, 5, function(err, hash) {
  console.log(hash);
  const pwHash = hash;

  const passwordTest = '1234Segura!!';
  // const passwordTest = '1234Segu';

  bcrypt.compare(passwordTest, pwHash, function(err, res) {

    if (err) {
      console.error('Error al efectuar la comparacion');
    } 

    if (res) {
      console.log('Las contraseñas son correctas!');
      pwValidation = true;
    } else {
      console.warn('La contraseña ingresada es incorrecta!');
    }

    console.group('Validacion de pw: ');
    console.log('Contraseña correcta:', pw);
    console.log('Contraseña ingresada:', passwordTest);
    console.log('Verificacion de contraseña:', pwValidation);
    console.groupEnd('Validacion de pw: ');
  });
});

