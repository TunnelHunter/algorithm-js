// fun([[1,2,3,4], [2,3,4,5]], 3) => true

const findNumFunc = (array, number) => {
  const arrLength = (Array.isArray(array) && array.length > 0 && array.length) || 0;
  let result = false;
  const _getNumUtil = (index, subIndex) => {
    let res = false;
    try {
      const val = array[index][subIndex];
      console.log('====================');
      console.log('index:', index);
      console.log('subIndex:', subIndex);
      console.log('val:', val);
      console.log('number:', number);
      console.log('====================');
      if (number > val) {
        res = _getNumUtil(index + 1, subIndex);
      } else if (number < val) {
        res = _getNumUtil(index, subIndex - 1);
      } else if (number === val) {
        res = true;
      }
    } catch (error) {
      res = false;
    }
    return res;
  };
  if (arrLength) {
    const subArrLength = array[0].length;
    result = _getNumUtil(0, subArrLength - 1);
  }
  return result;
};

const res = findNumFunc(
  [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7],
    [5, 6, 7, 8],
  ],
  8
);

console.log('====================');
console.log('res:', res);
console.log('====================');
