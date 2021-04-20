// [[2,4],[3,6],[7,9],[10, 15]] -> [[2,6], [7,9], [10, 15]]
function compile(param) {
  console.log('param:', param);
  let newArr = [];
  let sortArr = param.map((i) => i.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0]);
  console.log(sortArr);
  let cursor = -1;
  sortArr.forEach((item, index) => {
    if (cursor === index) {
      return;
    }
    let arr = item;
    if (sortArr[index + 1]) {
      if (item[1] > sortArr[index + 1][0]) {
        if (item[1] > sortArr[index + 1][1]) {
          arr[0] = item[0];
          arr[1] = item[1];
        } else {
          arr[0] = item[0];
          arr[1] = sortArr[index + 1][1];
          cursor = index + 1;
        }
      }
    }
    newArr.push(arr);
  });
  console.log('newArr:', newArr);
  return newArr;
}

const res = compile([
  [3, 6],
  [4, 2],
  [7, 9],
  [10, 15],
]);

console.log('res:', res);
