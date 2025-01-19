const fibonacci = function (num) {
  num = parseInt(num);

  if (num < 0) {
    return "OOPS";
  }

  if (num === 0) {
    return 0;
  }

  let count = 2;
  let arr = [1, 1];
  while (count < num) {
    updateVal = arr[0] + arr[1];
    arr[0] < arr[1] ? (arr[0] = updateVal) : (arr[1] = updateVal);
    count++;
  }
  return arr[0] > arr[1] ? arr[0] : arr[1];
};

// Do not edit below this line
module.exports = fibonacci;
