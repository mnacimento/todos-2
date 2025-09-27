// api/index.js
const app = require('../src/app');

// Vercel ejecuta esta función para cada request
module.exports = (req, res) => app(req, res);
