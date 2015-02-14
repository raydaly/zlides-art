var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8899
});

// Add the route
server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
       reply('Zlide Art Project');
    }
});
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
});

// Start the server
server.start();