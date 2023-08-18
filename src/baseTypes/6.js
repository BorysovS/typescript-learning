"use strict";
/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/
Object.defineProperty(exports, "__esModule", { value: true });
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
