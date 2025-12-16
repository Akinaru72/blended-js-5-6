//Фільтрування рядків, які починаються на "A"
//Дано масив рядків:

const words = ["Apple", "Banana", "Avocado", "Cherry", "Apricot"];
//Завдання: Використайте filter, щоб залишити лише ті рядки, які починаються на "A".
//Очікуваний результат:

//['Apple', 'Avocado', 'Apricot']

const wordsBeginA = words.filter((el) => el.startsWith("A"));

console.log(wordsBeginA);
