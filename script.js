typeof(9)
// Предположение:number
// Фактический:number

typeof(1.2)
// Предположение:number
// Фактический:number

typeof(NaN)
// Предположение:number
// Фактический:number

typeof("Hello World")
// Предположение:string
// Фактический:string

typeof(true)
// Предположение:boolean
// Фактический:boolean

typeof(2 != 1)
// Предположение:boolean
// Фактический:boolean


"сыр" + "ы"
// Предположение:
// Фактический:

"сыр" - "ы"
// Предположение:NaN
// Фактический:NaN

"2" + "4"
// Предположение:24
// Фактический:24

"2" - "4"
// Предположение:-2
// Фактический:-2

"Сэм" + 5
// Предположение:Сэм5
// Фактический:Сэм5

"Сэм" - 5
// Предположение: NaN
// Фактический:NaN

99 * "шары"
// Предположение:NaN
// Фактический:NaN
//Задача 2
let RectangleA = 2;
let RectangleB = 3;
console.log(RectangleA, RectangleB);
let RectangleP = 2 * RectangleA + RectangleB * 2;
console.log(RectangleP);
let RectangleS = RectangleA * RectangleB;
console.log(RectangleS);
console.log(RectangleP / RectangleS);

//Задача 3

let celsius = 25;
let fahrenheit = 66.2;
let fahrenheitLikeCelsius = (celsius * 9/5)+32;
let celsiusLikeFahrenheit = (fahrenheit-32)*5/9;
console.log(celsius + " \u{B0}C" + " соответствует " + fahrenheitLikeCelsius + " \u{00B0}F");
console.log(fahrenheit + " \u{00B0}F" + " соответствует " + celsiusLikeFahrenheit + " \u{00B0}C");

//Задача 4

let year = prompt("Введите год");

if(Number(year) % 4 !=0)
{
    alert("False");
}
else if(Number(year)%100 !=0)
{
    alert("True");
}
else
{
    alert("False");
}

//Задача 5

let number1 = prompt("Введите число 1");

let number2 = prompt("Введите число 2");

if( Number(number1) == 10 || Number(number2) == 10 || Number(number1)+ Number(number2) == 10)
{
    alert("True");
}
else {
    alert("False");
}

//Задача 6

let goat = prompt("Введите колличество овец:");

let result = 0;

for(let i = 1; i <= Number(goat); i++)
{
    result+=i;
    result += " овечка...";
}
console.log(result);

//Задача 7

for(let i = 0; i <= 15 ;i++)
{
    if(i % 2 == 0)
    {
        console.log(i + " чётное\n")
    }
    else{
        console.log(i + " нечётное\n")
    }
}

//Задача 8

console.log(">\n");

for (let i = 1; i < 15; i++)
{
    if(i % 2 == 0)
    {
        console.log("#".repeat(i) + "\n");
    }
    else{
        console.log("*".repeat(i) + "\n");
    }
}

//Задача 9 Сортировка

let Number1 = prompt("Введите число 1");

let Number2 = prompt("Введите число 2");

let Number3 = prompt("Введите число 3");

if(Number1 < Number2 && Number1 < Number3)
{
    if(Number2 < Number3)
    {
        console.log(Number1 + ", " + Number2 + ", " + Number3);
    }else
    {
        console.log(Number1 + ", " + Number3 + ", " + Number2);
    }
}
else if (Number2 < Number3)
{
    if(Number1 < Number3)
    {
        console.log(Number2 + ", " + Number1 + ", " + Number3);
    }
    else
    {
        console.log(Number2 + ", " + Number3 + ", " + Number1);
    }
}
else
{
    if(Number1 < Number2)
    {
        console.log(Number3 + ", " + Number1 + ", " + Number2);
    }else
    {
        console.log(Number3 + ", " + Number2 + ", " + Number1);
    }
}

//Задача 10

let number = prompt("Введите число 1");

let max = number;

for(let i = 2; i <= 5; i++)
{
    number = prompt("Введите число " + i);
    if (Number(number) > Number(max))
    {
        max = number;
    }
}
console.log(max);