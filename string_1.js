// 最长回文子字符串  abcbadef -> abcba
const judjeStr = (string) => {
  let newString = string.split('').reverse().join('');
  if (newString === string) {
    return true;
  } else {
    return false;
  }
};

const main = (param) => {
  const leng = param.length;
  let subStrLengArr = [];
  for (let i = 0; i < leng; i++) {
    for (let j = i; j < leng + 1; j++) {
      const subStr = param.slice(i, j);
      if (subStr && subStr.length > 1 && judjeStr(subStr)) {
        subStrLengArr.push(subStr);
      }
    }
  }
  const sortArr = subStrLengArr.sort((a, b) => b.length - a.length);
  console.log('sortArr:', sortArr);
  if (sortArr.length) {
    return sortArr[0];
  }
  return '-';
};

const res = main('abcbadef');
console.log(res);
