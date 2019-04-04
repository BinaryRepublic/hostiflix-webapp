const { Nuxt } = require('nuxt');
const app = require('express')();

const host = process.env.HOST || '0.0.0.0';
const port = 3000;
app.set('port', port);

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js');

// Init Nuxt.js
const nuxt = new Nuxt(config);
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port);
