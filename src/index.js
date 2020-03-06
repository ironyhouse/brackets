module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig.map(i => i.join(''));
  let lngth = str.length + 2;

  do {
    for (let i = 0; i < config.length; i++) {
      str = str.replace(config[i], '');
    }
    lngth--;
  } while (lngth !== str.length);
  
  if (str === '') {
      return true;
  } else {
      return false;
  }
}
