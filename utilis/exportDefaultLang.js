const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const glob = require('glob');

const defaultMessages = glob.sync('./lang/.messages/**/*.json')
  .map((filename) => {
    console.log(`mapping filename : ${filename}`);
    return readFileSync(filename, 'utf8');
  })
  .map((file) => {
    console.log(`parsing file : `);
    return JSON.parse(file);
  })
  .reduce((messages, descriptors) => {
    console.log('start reducing...');
    descriptors.forEach(({ id, defaultMessage }) => {
      if (messages.hasOwnProperty(id)) {
        return;
        // throw new Error(`Duplicate message id: ${id}`);
      }
      console.log(`writing new message: ${id}`);
      messages[id] = defaultMessage;
    });
    return messages;
  }, {});

writeFileSync('./lang/en.json', JSON.stringify(defaultMessages, null, 2));
console.log(`> Wrote default messages to: "${resolve('./lang/en.json')}"`);
