const map = (data = []) => {
  const keys = Object.keys(data);
  const max = keys.length ? data[keys[0]].length : 0;
  const mapped = [];

  keys.forEach(key => {
    for (var i = 0; i < max; i++) {
      const obj = Object.assign({}, mapped[i]);
      obj[key] = data[key][i];
      mapped[i] = obj;
    }
  });

  return mapped;
};

module.exports = {
  map: map,
};
