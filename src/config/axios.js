var axios = require('axios');

const api = axios.create({
  baseURL: 'http://sagres.uesb.br',
  timeout: 3000,
});

module.exports = api;
