//Перетворення масиву на HTML
//Дано масив імен:

const names = ["Alice", "Bob", "Charlie"];
//Завдання: За допомогою map створіть масив HTML-рядків для відображення цих імен у списку.
//Очікуваний результат:

//['<li>Alice</li>', '<li>Bob</li>', '<li>Charlie</li>']

const htmlNames = names.map((el) => (el = "<li>" + el + "</li>"));

console.log(htmlNames);
