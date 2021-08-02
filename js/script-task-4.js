// Шаблонные строки и конкатенация строк. Методы строк.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

// const username = 'Fedor';
// const age = 5;
// const hobby = 'swim';

// const messageSchema = `My name is ${username}, I'm ${age} and I like to ${hobby}`;
// const messageSchema2 =
//   'My name is ' + username + ", I'm " + age + ' and I like to ' + hobby;

// // console.log(messageSchema);
// // console.log(messageSchema2);

// console.log(messageSchema.length);
// console.log(messageSchema.split(' '));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   //
//   for (const item of order) {
//     total += item;
//     console.log(item);
//   }
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const item of order) {
//     total += item;
//   }
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// // calculateTotalPrice([164, 48, 291]);
// // calculateTotalPrice([412, 371, 94, 63, 176]);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // 2 сделать переменную total до цикла
// let total = 0;

// // 1 перебрать массив
// // for (let i = 0; i < cart.length; i += 1) {
// //   // console.log(cart[i]);
// //   // 3 каждый элемент приплюслвать к total
// //   total += cart[i];
// //   // total = total + cart[i];
// // }

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

// function findLongestWord(string) {
//   // Change code below this line

//   const ArrayString = string.split(' ');
//   console.log(ArrayString);

//   let biggestWord = ArrayString[0];
//   console.log(biggestWord);
//   for (const item of ArrayString) {
//     if (item.length > biggestWord.length) biggestWord = item;
//   }
//   console.log(biggestWord);
//   return biggestWord;

//   // Change code above this line
// }
// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     numbers.push(i);
//   }

//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

function filterArray(numbers, value = 3) {
  // Change code below this line
  let arrayNumber = [];

  for (const number of numbers) {
    if (number > value) {
      arrayNumber.push(number);
      console.log(arrayNumber);
    }
  }
  return arrayNumber;

  // Change code above this line
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);
