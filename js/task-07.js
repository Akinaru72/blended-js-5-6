// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

function savePassword(password) {
  return function correctPassword(value) {
    return value === password;
  };
}

const checkPassword = savePassword("qwerty");

console.log(checkPassword("qwerty")); // true
console.log(checkPassword("asd")); // false
