function removeDuplicates(inputString) {
  // Разбиваем строку на массив слов
  let wordsArray = inputString.split(',');

  // Создаем объект Set для хранения уникальных слов
  let uniqueWordsSet = new Set(wordsArray);

  // Преобразуем Set обратно в массив
  let uniqueWordsArray = Array.from(uniqueWordsSet);

  // Объединяем уникальные слова в строку снова, разделяя их запятой
  let resultString = uniqueWordsArray.join(',');

  return resultString;
}

// Пример использования функции
let inputString = "кошка,собака,лошадь,корова,кошка,собака,лошадь";
let result = removeDuplicates(inputString);
console.log(result); // Выведет: "кошка,собака,лошадь,корова"
