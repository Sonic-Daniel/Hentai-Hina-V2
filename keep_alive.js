// keep_alive.js
var http = require('http');

// Créer un serveur HTTP qui renvoie "I'm alive" pour chaque requête
http.createServer(function (req, res) {
    res.write("I'm alive");
    res.end();
}).listen(8080); // Écoute sur le port 8080
