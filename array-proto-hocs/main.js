// Задача №1. Ускорение долгих вычислений

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((num, index) => num === arr2[index]);
}

console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([9, 2], [9]));
console.log(compareArrays([1, 2, 3], [2, 3, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));
console.log('\n');


function memoize(fn, limit) {  
  let results = [];
  
	return function () {
		let res = results.find((func) => compareArrays(func.args, [...arguments]));
          
		if (res) {
      console.log('Функция вызвана из памяти');         
			return res.result;
    
    } else {
      res = fn(...arguments);
			results.unshift({
          args: [...arguments],
          result: res
      });
	}

		if (results.length > limit) {
			results.pop();
    }    
		
		return res;
	}
}


const sum = (a, b) => {
  console.log('Функция вызвана не из памяти');
  return a + b;
}

const mSum = memoize(sum, 2);


console.log(mSum(3, 4));
console.log(mSum(3, 4));
console.log('\n');

console.log(mSum(1, 3));
console.log(mSum(1, 3));
console.log('\n');

console.log(mSum(2613, 6));
console.log(mSum(2, 6, 5));
console.log('\n');

console.log(mSum(2, 6, 5, 45, 438, 7));
console.log(mSum(2, 6, 5, 45, 438, 7));
console.log('\n');

console.log(mSum(2, 9));
console.log('\n');

console.log(mSum(7, 9));
console.log(mSum(7, 9));
console.log(mSum(7, 9));
console.log(mSum(7, 9));
console.log(mSum(7, 9));
console.log('\n');

console.log(mSum(435, 4));
console.log(mSum(3, 66));
console.log(mSum(3, 34634));
console.log(mSum(67, 4));
console.log(mSum(3543, 4564));