const fs = require('fs');
const path = require('path');

const writeFile = file => {
  return new Promise((resolve, reject) => {
    const content = JSON.stringify(file.content, null, 2);
    fs.writeFile(path.join('data', `${file.name}.json`), content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const writeFiles = (files = []) => {
  const promises = files.map(file => writeFile(file));
  return Promise.all(promises);
};

module.exports = {
  writeFile: writeFile,
  writeFiles: writeFiles,
};