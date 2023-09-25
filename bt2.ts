function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (
        (char === ')' && top !== '(') ||
        (char === '}' && top !== '{') ||
        (char === ']' && top !== '[')
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const input = '()';
const result = isValid(input);
console.log(result); // true
