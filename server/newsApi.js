// pages/index.js
const getConfig = require('next/config');
const axios = require('axios');
const get = require('lodash/get');
const { DEFAULT_SOURCE_LIST } = require('../utilis/constants');

const newsapi = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  timeout: 10000,
});

const getEveryNewsFromApi = (req, res) => {

  newsapi.get('everything', {
    headers: {
      'x-api-key': process.env.APIKEY,
    },
    params: {
      pageSize: get(req, 'query.pageSize', 10),
      page: get(req, 'query.page', 1),
      sources: DEFAULT_SOURCE_LIST.join(),
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      // TODO: update error message
      res.status(402).send(err.message);
    });
};

module.exports = {
  getEveryNewsFromApi,
};
