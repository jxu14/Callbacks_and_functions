// function map(array, callback) {
//   var result = [];
//   for(var i=0; i < array.length; i++) {
//     result.push(callback(array[i]));
//   }
//   return result;
// }

// var my_array = [2,3,4];
// function double(num) {
//   return num * 2;
// }

// map([2,3,4], function(num) {
//   return num * 2;
// })

// var new_array = map(my_array, double)
// console.log([2,3,4]);
// console.log(new_array);

//Write a function that takes an array and a callback function.


// function even(num) {
//   return num % 2 === 0;
// }

// => [2,4];




// var nums = [2,3,4,5,6,7,8,9,20,10,0];
// function select(array, callback) {
//   var result = [];
//   for(var i=0; i < array.length; i++) {
//     if (callback(array[i])) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// console.log(select(nums, even));



// function even(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }




var nums = [2,3,4,5,12,7,8,6,9,20,10,0];


function detect(array, callback) {
  for(var i=0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }

}

function divisible(num) {
  return ((num % 2 === 0 )&& (num % 3 === 0));
}


console.log(detect(nums, divisible));
// => 6

function word(word) {
  return word.length > 4;
}

console.log(detect(["ate", "backpack", "car"], word));
//   return word.length > 4;
// })






