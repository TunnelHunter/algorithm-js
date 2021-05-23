// // 输入 n 个整数，找出其中最小的 K 个数。例如输入 3,5,7,9,2,10,6,0,1 这 9 个数字，则最小的 5 个数字是 0,1,2,3,5,6

// const getMinNumFun = (arr, num) => {
//   if (!arr || !num) {
//     return [];
//   }
//   const sortArr = arr.sort((a, b) => a - b);
//   const subArr = sortArr.slice(0, num + 1);
//   return subArr;
// };

// const res = getMinNumFun([3, 5, 7, 9, 2, 10, 6, 0, 1], 5);
// console.log('====================');
// console.log('res:', res);
// console.log('====================');