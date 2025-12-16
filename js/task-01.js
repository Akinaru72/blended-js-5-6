// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

const letMeSeeYourName = callback => {
  let name;
  while (!name) {
    name = prompt("Input your name");
  }
  return callback(name);
};

const greet = name => `Hello ${name}`;

console.log(letMeSeeYourName(greet));

 
