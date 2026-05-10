module.exports = function toReadable(number) {
  const units = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) return units[number];

  let result = '';
  let n = number;

  // Obsługa setek
  if (n >= 100) {
    result += `${units[Math.floor(n / 100)]} hundred`;
    n %= 100;
    if (n === 0) return result;
    result += ' ';
  }

  // Obsługa dziesiątek i jednostek po setkach
  if (n < 20) {
    result += `${units[n]}`;
  } else {
    result += `${tens[Math.floor(n / 10)]}`;
    if (n % 10 > 0) {
      result += ` ${units[n % 10]}`;
    }
  }

  return result.trim();
};
