const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverseSting = cleanString.split('').reverse().join('');
    return cleanString === reverseSting;
};

// Do not edit below this line
module.exports = palindromes;
