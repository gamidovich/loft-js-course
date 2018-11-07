/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for(let i=0; i<array[i]; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  const newArr = [];

  for(let i=0; i<array[i]; i++) {
    newArr[i] = fn(array[i], i, array);
  }

  return newArr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  let previousValue, index;

  if (array.length === 0 && initial === undefined) {
      return new TypeError('Ошибка!');
  }

  if (array.length === 0 && initial !== undefined) {
      return initial;
  }

  /**
   * Если в массиве содержится один элемент() и не передан initial.
   * Условие учитывает индекс элемента.
   */
  let count = 0;
  array.forEach(function (item, i) {
      count++;
  });

  if (count === 1 && initial === undefined) {
      let currentEl;
      for(let i=0; i < array.length; i++) {
          currentEl = array[i];
      }
      return currentEl;
  }

  // Определить начальное значение
  if(initial !== undefined) {
      previousValue = initial;
      index = 0;
  } else {
      previousValue = array[0];
      index = 1;
  }

  for(; index < array.length; index++) {
      previousValue = fn(previousValue, array[index], index, array);
  }

  return previousValue;

}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const arrEl = [];

  for (let key in obj) {
    arrEl.push(key.toUpperCase());
  }

  return arrEl;

}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
  const newArr = [];

  if(to === undefined) {
    to = array.length;
  }

  for(from; from < to; from++) {
    newArr.push(array[from]);
  }

  return newArr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
