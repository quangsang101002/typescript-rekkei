function isAnagram(s: string, t: string): boolean {
  // Kiểm tra độ dài của hai chuỗi. Nếu khác nhau, không thể là từ hoán vị.
  if (s.length !== t.length) {
    return false;
  }

  // Tạo một Map để đếm tần suất xuất hiện của các ký tự trong chuỗi s.
  const charCount = new Map<string, number>();

  // Đếm tần suất xuất hiện của các ký tự trong chuỗi s.
  for (const char of s) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char)! + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Kiểm tra chuỗi t có thể tạo thành từ hoán vị của chuỗi s không.
  for (const char of t) {
    if (charCount.has(char) && charCount.get(char)! > 0) {
      charCount.set(char, charCount.get(char)! - 1);
    } else {
      // Nếu một ký tự không tồn tại trong charCount hoặc đã được sử dụng hết, trả về False.
      return false;
    }
  }

  // Nếu đã kiểm tra qua tất cả các ký tự và không gặp vấn đề nào, trả về True.
  return true;
}

// Ví dụ:
const s = 'anagram';
const t = 'nagaram';
const results = isAnagram(s, t); // Đã khai báo biến 'result' ở đây
console.log(results); // In ra kết quả
