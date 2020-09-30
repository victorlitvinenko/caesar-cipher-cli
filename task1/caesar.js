function isBetween(num, condition) {
  const { min, max } = condition;
  return num >= min && num <= max;
}

exports.caesar = function (char, action, shift) {
  const lowercases = { min: 97, max: 122 };
  const uppercases = { min: 65, max: 90 };
  if (!isBetween(char, lowercases) && !isBetween(char, uppercases)) return char;
  const condition = isBetween(char, lowercases) ? lowercases : uppercases;
  let newPos = action === 'encode' ? parseInt(char) + parseInt(shift) : parseInt(char) - parseInt(shift);
  if (action === 'encode' && newPos > condition.max) newPos = newPos - condition.max + condition.min - 1;
  if (action === 'decode' && newPos < condition.min) newPos = newPos - condition.min + condition.max + 1;
  return newPos;
};
