# proyecto_seguridad
Inyeccion nosql: 
Los ataques de inyección de NoSQL consiste en que a través de los Metodos de petición HTTP a una API REST, 
como "GET, PUT, POST, DELETE, etc", se manipule la información/datos colocada en una URL/EndPoint que 
ejecute algun servicio en la aplicación.
Dentro de esta aplicación web realizada en node.js, se encuentra un login entre otras opciones que se utilizarán 
como ejemplo practico ya que hacemos uso de una base de datos NoSQL, en este caso Mongodb.
### Tecnologias empledas en el despliege del proyecto
------
*Nodejs
*MongoDB
*Visual Studio Code como editor de codigo
*CSS
*JS
*HTML
*Burp Suite

### Como desplegar la aplicacion de manera local 
Requisitos
* De preferencia tener sistema operativo linux debido a la facilidad de instalacion de paquetes
* Tener instalado MongoDB: Puede consultar su instalacion para ubuntu aqui "https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/"
* Tener instalado el entorno de ejecucion "Nodejs"
## Procedimiento
* Clonar este repositorio en la ubicacion de tu preferencia
* Abrir la terminal y dirigirte a la carpeta proyecto_seguridad_1 y ahi ejecutar los siguientes comandos:
* Instalar el administrador de paquetes npm con "npm install"
* Iniciar el servicio de mongo con "sudo systemctl mongod start"
