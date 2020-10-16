module.exports = function check(str, bracketsConfig) {
  const openingMatch = {};
  for (const el of bracketsConfig) {
      openingMatch[el[1]] = el[0];
  }
  const stack = [];
  for (let i = 0; i < str.length; i++) {
      if (openingMatch[str[i]] && openingMatch[str[i]] === stack[stack.length - 1]) {
          stack.pop();
      } else {
          stack.push(str[i]);
      }
  }
  return stack.length === 0;
}
