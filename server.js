// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
const IntlPolyfill = require('intl');

Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const { readFileSync } = require('fs');
const { basename, join } = require('path');
const express = require('express');
const accepts = require('accepts');
const glob = require('glob');
const next = require('next');

const { getEveryNewsFromApi } = require('./server/newsApi');
const { API_ENDPOINT_NEWS } = require('./utilis/constants');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

// -------------------------- react-intl --------------------------
// Get the supported languages by looking for translations in the `lang/` dir.
const supportedLanguages = glob
  .sync('./lang/*.json')
  .map((f) => basename(f, '.json'));

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();
const getLocaleDataScript = (locale) => {
  const lang = locale.split('-')[0];
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(
      `@formatjs/intl-relativetimeformat/dist/locale-data/${lang}`,
    );
    const localeDataScript = readFileSync(localeDataFile, 'utf8');
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = (locale) => require(`./lang/${locale}.json`);


// -------------------------- express --------------------------

app.prepare().then(() => {
  const server = express();

  // serve service worker as static
  server.get('/service-worker.js', (req, res) => {
    const filePath = join(__dirname, '.next/static/', 'service-worker.js');
    app.serveStatic(req, res, filePath);
  });

  server.use((req, res, next) => {
    const accept = accepts(req);
    const locale = accept.language(accept.languages(supportedLanguages)) || 'en';
    req.locale = locale;
    req.localeDataScript = getLocaleDataScript(locale);
    req.messages = dev ? {} : getMessages(locale);
    next();
  });

  server.get(API_ENDPOINT_NEWS, getEveryNewsFromApi);

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
