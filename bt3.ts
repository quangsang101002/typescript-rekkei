function checkBracket(stringBracket: string): boolean {
  if (stringBracket.length % 2 === 1) {
    return false; // Chuỗi có độ dài lẻ sẽ luôn không hợp lệ
  }

  const checkObj: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack: string[] = [];
  for (let i = 0; i < stringBracket.length; i++) {
    const char = stringBracket[i];
    console.log('0', checkObj[char]);

    if (checkObj[char]) {
      // Nếu là dấu mở ngoặc, thêm vào stack
      stack.push(char);
    } else {
      // Nếu là dấu đóng ngoặc
      console.log('2', stack);

      const lastOpenBracket = stack.pop();
      console.log('3', lastOpenBracket);

      // Lấy dấu mở ngoặc cuối cùng khỏi stack
      if (!lastOpenBracket || checkObj[lastOpenBracket] !== char) {
        // Kiểm tra xem có dấu mở ngoặc tương ứng hay không
        return false;
      }
    }
  }

  // Sau khi xử lý tất cả các ký tự, stack phải rỗng

  console.log('->>>>>>>>>>>', stack);
  return stack.length === 0;
}

console.log(checkBracket('()')); // true
// console.log(checkBracket('[({})]')); // true
// console.log(checkBracket('[({}])')); // false
