'use strict';

// Классический пример функции
// let a = 5;
// let b = 7;

// function sum(a, b){
//    let sum = a + b;
//     alert(sum);
// }
                    
// sum(a , b);
                    
// a=10;
// b=14;
// sum(a, b);


//Создать функцию выводящую в браузер ваше имя

// function name(){
//     alert('Alexander');
// }
// name();

// Создать функцию выводяющую в браузер сумму чисел от 1 до 100
// let num=1;
// let summ=0;

// function sum(){
//     for(num; num<=100; num++){
//         summ = summ + num;    }
//         alert(summ);
// }

// sum();



// function ask(question, yes, no) {
//     if (confirm(question)){ yes();}
//     else {no();}
//   }
  
//   function showOk() {
//     alert( "Вы согласны." );
//   }
  
//   function showCancel() {
//     alert( "Вы отменили выполнение." );
//   }
  
//  ask('Вы согласны? ', showOk, showCancel ); 


// function fact(n) {
     // условие выхода из рекурсии
//     if (n === 1) {
//       return 1;
//     }
  
// возвращаем вызов функции fact(n - 1) умноженное на n
//     return fact(n - 1) * n;
//   }
//   alert(fact(5)); // 120


// function func(num){
//     alert(num**2)  //сделаем так, чтобы функция возводила переданное число в квадрат<br>
// }
// func(5);
// func(9);

// function fullname(firstname, lastname) {
//     alert(`${firstname} ${lastname}`);
//     }
    
//     fullname('Алекс', 'Батькович');

// Дополнительное задание 
// Сделать функцию, которая параметром принимает число и выводит в браузер куб этого числа.

// function cube(num){
//     alert(num**3);
// }

// cube(2);
// cube(8);


// Сделать функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. 
// В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.


// function plmn(num){
//     if(num>0){
//         alert('+++');
//     }else{
//         alert('---');
//     }
// }

// plmn(3);
// plmn(-1);

// function func(num1, num2){
//     alert(num1 + num2);
// }

// func(2, 3);
// func(5, 9);


// Сделать функцию, которая параметрами принимает 3 числа и выводит в браузер сумму этих чисел.

// function sum(num1, num2, num3){
//     alert(num1 + num2 + num3);
// }

// sum(2, 5, 9);


// function func(num){
//     alert(num**2);
// }
// let param = 2;
// func(param);

// Сделать функцию func, которая параметром будет принимать 3 числа и выводить в браузер их сумму.
// Пусть даны 3 переменные с числами:
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// С помощью созданной функции выведите в браузер сумму значений эти переменных.

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function sum(num1, num2, num3){
//     alert(num1 + num2 + num3);
// }

// sum(param1, param2, param3);


// function func(num = 0) {
//     alert(num ** 2);
// }

// func(8);
// func();


// Дана функция:
// function func(num = 5) {
//	console.log/alert(num * num);
// }
// Эта функция вызывается следующим образом:
// func(2);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции и вывидете его в браузер.

// function func(num = 5) {
//   	alert(num * num);
// }
// func(2); // 4
// func(3); // 9
// func(); // 25

//Дана функция:

// function func(num1 = 0, num2 = 0) {
// 	console.log/alert(num1 + num2);
// }
// Эта функция вызывается следующим образом:

// func(2, 3);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.

// function func(num1 = 0, num2 = 0) {
// 	alert(num1 + num2);
// }

// func(2, 3);
// func(3);
// func();


// Внутренние переменные
// function showMessage() {
//      let message = "Привет, я JavaScript!"; // локальная переменная<br>
//      alert( message );
//  }
   
//    showMessage(); // Привет, я JavaScript!
   
//    alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции или код не сработает

// Внешние переменные
// let userName = 'Вася';
// function showMessage() {
//      let message = 'Привет, ' + userName;
//      alert(message);
// }
// showMessage(); // Привет, Вася

// внешние переменные
// let a = 7;
// let b = 3;
// function sum() {
  // локальная переменная
//   let a = 8;
  // изменение значения внешней переменной (т.к. b нет внутри функции)
//   b = 4;
//   alert(a + b);
// }
// sum(); // 12