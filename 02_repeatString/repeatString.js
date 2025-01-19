const repeatString = function (repeatString, repeat) {
  if (repeat < 0) {
    return "ERROR";
  }
  let newString = "";
  for (let i = 0; i < repeat; i++) {
    newString += repeatString;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
