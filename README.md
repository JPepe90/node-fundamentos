# node-fundamentos
Primer curso NodeJS. Fundamentos.

## Lado Servidor
Corre JS del lado servidor de forma asincrona, no requiere navegadores.

- Concurrencia
Es un lenguaje Monohilo y todas sus entradas son asíncronas. 
Un unico proceso por cada núcleo del procesador.

- Motor V8
Convierte nuestro codigo JS a codigo máquina que se ejecuta muchisimo más rapido y detecta errores de sintaxis en el momento de la compilacion.

- Modulos
Por defecto, descargados y creados por el desarrollador.

- Orientado a Eventos
Un bucle de eventos que se ejecuta constantemente.
Permite orientar el código de forma reactiva.


## Event Loop
El bucle general que se encarga de recibir peticiones y eventos y almacenarlas en la Event Queue en un unico hilo. Si el evento no puede ser respondido de forma inmediata es pasado a la Thread Pool que se encargará de gestionar cada peticion por separado.

## Thread Pool
Esta cola de tareas almacenará los procesos que deberan ser trabajados de forma asíncrona individualmente. Cada uno de estos sera trabajado en un hilo individual como una Thread. Cuando haya sido completado su proceso será devuelto a la Thread pool y de alli al event loop que se encargará de devolver la respuesta al requirente que esté esperando. Todo esto sucede de forma asíncrona por lo que cada Thread puede demorar tiempos distintos.

## Nodemon 
Herramienta que nos sirve para correr el codigo que estamos trabajaando cada vez que lo salvaamos paraa verificar que la compilacion este correcta y debuggear errores. Para ejecutarlo desde la consola de bash en VSCode escribimos: nodemon <path to file>. Muy practico para ambientes de desarrollo.

## PM2
PM2 es una herramienta de monitoreo de entornos de produccion. Permite monitorar el funcionamiento de diferentes herramientas, distribuir o balancearla carga, revisar logs, etc. para ejecutarlo:

pm2 start <path to file>

- Para monitorear el estado de los procesos en estado de control. Debemos validar en el navegador:

pm2 monitor

- Para verificar el estado instantaneao de los procesos controlados:

pm2 status

- Verificar los logs:

pm2 log

- Para finalizar el pm2 de un proceso:

pm2 stop <path to file>
o
pm2 stop <process id>

## Callbacks y CallbacksHell
Utilizando los callbacks hago que las funciones se ejecuten en orden
mas alla de que tengan tiempos distintos y evitamos que el asincronismo 
altere el funcionamiento del programa, estos los especifico dentro de los parametros de llamado a las funciones y me sirven para manejar la sincronia.

El CallbacksHell sucede cuando tenemos codigo spaguetti de callbacks. Esto se resuelve con funciones recursivas que hacen la misma instruccion(ver ejemplo en async/callbackshell.js)

## Promesas
Son clases globales. Las promesas nos permiten utilizar estados resolve y reject con una sintaxis sencilla para manejar la sincronia de nuestro codigo. utilizando .then manejamos el resolve y con los .catch manejamos los errores.

## Async/Await
