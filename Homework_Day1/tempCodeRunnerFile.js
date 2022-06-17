/* Bài 1 Humanize Format
Hãy giúp chúng tôi thiết lập một Function Javascript sao cho: 
dữ liệu nhận vào là một **`number` và dữ liệu đầu ra là một chuỗi thõa mãn yêu cầu sau:**
1 ⇒ "1st"
32 ⇒ "32nd"
208 ⇒ "208th"
403 ⇒ "403rd" */

function humanizeFormat(number) {
  if (typeof number !== "number") return false;

  let lastDigitStr = String(number).slice(-1);
  let lastDigitNumber = Number(lastDigitStr);

  if (lastDigitNumber === 1) return `${number}st`;
  if (lastDigitNumber === 2) return `${number}nd`;
  if (lastDigitNumber === 3) return `${number}rd`;

  return `${number}th`;
}

console.log(humanizeFormat(111));
console.log(humanizeFormat(322));
console.log(humanizeFormat(393));
console.log(humanizeFormat(198));

