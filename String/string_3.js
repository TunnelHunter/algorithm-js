// 实现一个深拷贝函数
const deepClone = obj => {
  if (obj === null) {
    return null;
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (typeof obj === 'Function') {
    return new Function(obj);
  }
  if (typeof obj !== 'object') {
    return obj;
  }
  let newObj = new obj.__proto__.constructor();
  for (let key in obj) {
    newObj[key] = deepClone(obj[key]);
  }
  return newObj;
};

// 测试代码
let obj = {
  name: 'xm',
  birth: new Date(),
  desc: null,
  reg: /^123$/,
  ss: [1, 2, 3],
  fn() {
    console.log('123');
  },
};

let obj2 = deepClone(obj);
console.log(obj, obj2);

obj.fn();
obj2.fn();
