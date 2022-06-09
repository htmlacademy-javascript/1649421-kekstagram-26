let calculateMiles = function (distance) {
  let percent = 0.25;
  if (distance > 10500) {
    percent = 0.35;
  }
  let miles = Math.floor(distance * percent);
  return miles;
};

console.log('За перелёт в Иркутск получим ' + calculateMiles(4125) + ' миль');
console.log('За перелёт на Камчатку получим ' + calculateMiles(11000) + ' миль');

//https://up.htmlacademy.ru/profession/frontender/13/javascript/26/module/2/item/14/8

let calculateSum = function (numberFirst, numberSecond) {
  let sum = numberFirst + numberSecond;
  return sum;
};

calculateSum(); // Вернёт NaN
calculateSum(2); // Вернёт NaN
calculateSum(2, 5); // Вернёт 7
calculateSum(9, 5); // Вернёт 14

//https://up.htmlacademy.ru/profession/frontender/13/javascript/26/module/2/item/14/9
