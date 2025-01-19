const reverseString = function (word) {
  let arr = word.split("");
  for (let i = 0; i < arr.length / 2; i++) {
    let tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
  }
  return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
