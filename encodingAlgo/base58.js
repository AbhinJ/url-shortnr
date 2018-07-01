const alphabets = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
const base = alphabets.length;

const encode = id => {
  let encoded = "";
  while (id) {
    let remainder = id % base;
    id = Math.floor(num / base);
    encoded = alphabets[remainder].toString + encoded;
  }
  return encoded;
};

const decode = id => {
  let decoded = 0;
  while (id) {
    let index = alphabets.indexOf(id[0]);
    let power = id.length - 1;
    decoded += index * Math.pow(base, power);
    str = str.substring(1);
  }
  return decoded;
};

module.exports.encode = encode;
module.exports.decode = decode;
