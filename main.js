/* 
    TASK 1

    У нас есть массив с самыми популярными вкусами чипсов.
    И каждый месяц у нас производится новый вкус. Закончите код до конца так,
    чтобы он определял и возвращай сорт, созданный последним 
    Важно: исходный массив не должен изменяться.
    var flavors = ['Краб', 'Сметана и зелень', 'Малосольные огурчики','Классический', 'С сыром', ‘Паприка'];

*/

var flavors = [
  'Краб', 
  'Сметана и зелень', 
  'Малосольные огурчики',
  'Классический', 
  'С сыром', 
  'Паприка'
];

var x = 'С аминокислотами)))';

function flavorsNew(array) {
  var messege;
  for(i=0; i < array.length; i++) {
    if(i = array.length) {
      array.push(x);
      messege = x;
    }
    else {
      messege = array[array.length - 1];
    }
  }
  return messege;
}

var result = flavorsNew(flavors);
console.log(result);

/* 
    TASK 2
    
    У нас есть массив [1,2,3,4,5]. Необходимо развернуть этот массив БЕЗ СОЗДАНИЯ нового
    В итоге должно получиться: [5,4,3,2,1];
    Используйте только те конструкции, которые мы проходили на уроке.

*/

var numbers = [1,2,3,4,5];
numbers.splice(0,5,5,4,3,2,1);
console.log(numbers);

/* 
    TASK 3
    
    Есть список слов : [‘радар’,’вор’,’букет’,’доход’,’казак’,’варяг’,’потом’].
    Найти среди них палиндромы.

*/

var words = [
  'радар','вор','букет','доход','казак','варяг','потом'
];

var arrPalindrome = [];

function palindromeSearch(array) {
  for(var i=0; i < array.length; i++){
    function reverseString() {
      return array[i].split("").reverse().join("")
    };
    if(reverseString() === array[i]) {
      console.log('Слово ' + array[i] + ' является палиндромом и отправляется в массив "arrPalindrome"')
      arrPalindrome.push(array[i]);
    } else {};
  }
  return arrPalindrome;
}

var result = palindromeSearch(words);
console.log(result);

/* 
    TASK 4
    
    Есть массив чисел : [444,123,-114,231,775,221,766,-557,0]. 
    Необходимо найти максимальное число и вывести его в консоль

*/

var numbers = [444,123,-114,231,775,221,766,-557,0];
var maxCase = 1;

function maxNumber(array){
  for(var i = 0; i < array.length; i++) {
    if(maxCase < array[i]) {
      maxCase = array[i];
    } else {maxCase += 0};
  }
  return maxCase;
}

var result = maxNumber(numbers);
console.log(result);

/* 
    TASK 5
    
    Пользователь вводит многозначное число. 
    Напишите функцию, которая принимает число в качестве аргумента
    и вставляет двоеточие (:) между двумя нечетными числами. 
    Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.

*/

var num = prompt('Введите многозначное число', 55639217);

function delimiter(num){
  var str = num.toString();
  var result = [str[0]];
  for(var i=1; i<str.length; i++) {
      if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
        result.push(':', str[i]);
       }
      else {
        result.push(str[i]);
      }
  }
  return result.join('');  
}

console.log(delimiter(num));