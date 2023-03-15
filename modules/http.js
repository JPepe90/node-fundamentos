const http = require('http');

function router(req, res) {
  console.log('Nueva peticion!');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('Hola, que tal?');
      res.end();
      break;
    default:
      res.write('Error 404: No se que quieres');
      res.end();
  }

  // Escribir respuesta al usuario
  // res.writeHead(201, { "Content-Type": "text/plain" })
  // res.write("Hola, ya se usar http desde NodeJS");

  // res.end();
}

// request y response del servidor
http.createServer(router).listen(3000);

console.log("Escuchando http en el puerto 3000");