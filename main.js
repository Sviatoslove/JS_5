

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
    console.log(reverseString());
    if(reverseString() === array[i]) {
      arrPalindrome = array.slice((i,(i + 1)) + ', ');
    } else {continue;}
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

/* 
    TASK 5
    
    Пользователь вводит многозначное число. 
    Напишите функцию, которая принимает число в качестве аргумента
    и вставляет двоеточие (:) между двумя нечетными числами. 
    Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.

*/