// 两个字符串大数相加 '9007199254740991' + '1234567899999999999' => '1243575099254740990'

const bigStringNumAdd = (a, b) => {
  if (!a || !b) {
    if (!a && !b) {
      return '';
    }
    return a ? a : b;
  }
  // 取字符串最大长度
  const maxLength = Math.max(a.length, b.length);

  // 使用0进行补齐
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let t = 0;
  let g = 0; // 近位
  let sum = '';
  for (let i = maxLength - 1; i >= 0; i--) {
    t = Number(a[i]) + Number(b[i]) + g;
    g = t >= 10 ? 1 : 0;
    sum = (t % 10) + sum;
  }

  if (g === 1) {
    sum = `1${sum}`;
  }

  return sum;
};

let a = '9007199254740991';
let b = '1234567899999999999';

const res = bigStringNumAdd(a, b);

console.log('====================');
console.log('res:', res);
console.log('res: 1243575099254740990');
console.log('====================');
