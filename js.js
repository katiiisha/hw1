let number = prompt("Введите 3-x значное число число");
let units = number%10;
let a = (number/10)-(units*0.1);
let dozens = a%10;
let b = number%100;
let hundreds = (number/100)-(b*0.01);
alert (units)
alert (dozens)
alert(hundreds)
alert(":)")

