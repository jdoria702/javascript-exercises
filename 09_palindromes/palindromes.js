const palindromes = function (string) {
  let alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  let cleanString = string
    .toLowerCase()
    .split("")
    .filter((char) => alphanumerical.includes(char))
    .join("");

  let reverseString = cleanString.split("").reverse().join("");

  return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
