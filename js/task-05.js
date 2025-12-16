// Найбільше число в масиві
//Дано масив чисел:

const numbers = [10, 25, 48, 7, 32, 18];
//Завдання: Знайдіть найбільше число за допомогою reduce.
//Очікуваний результат:
//48

const maxNumber = numbers.reduce(
  (acc, el) => (el > acc ? el : acc),
  numbers[0]
);

console.log(maxNumber);
