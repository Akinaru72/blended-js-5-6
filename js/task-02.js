//Підрахунок кількості повторень
//Дано масив:
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
//Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
//Очікуваний результат:
//{
// apple: 3,
// banana: 2,
// orange: 1
//}

const uniqueFruits = (fruits) => {
  return fruits.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {});
};

console.log(uniqueFruits(fruits));
