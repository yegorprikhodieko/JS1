function absValue(value) {//Задача 1
    if (value < 0) {
        value *= -1;
    }
    console.log(value);
}
function isPalindrome(word = '') {//Задача 2
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[word.length - i - 1]) {
            result++;
        }

    }

    if (result == word.length) {
        console.log(`${word} true`);
    }
    else {
        console.log(`${word} false`);
    }

}
function matrixAddition(arr1 = [], arr2 = [])//Задача 3
{
    let resultArr = [];
    let resStr = " ";
    if (arr1.length == arr2.length) {
        
        for (let i = 0; i < arr1.length; i++) {
            resultArr[i] = [];
            if (arr1[i].length == arr2[i].length) {
                for (let j = 0; j < arr1.length; j++) {
                    resultArr[i][j] = arr1[i][j] + arr2[i][j];
                    resStr += `${resultArr[i][j]}\t`
                }
            }
            resStr += "\n"
        }   
        console.log(resStr);
    }
    else { console.log("Матрицы различны"); }
}

let UserNumber = prompt();
absValue(UserNumber);
let words = prompt();
isPalindrome(words);
let Arr1 = [[1, 1], [2, 1]];
let Arr2 = [[3, 1], [1, 2]];
matrixAddition(Arr1, Arr2);

//Задача 4
let student = {
    group: "201-323",
    first_name: "Егор",
    last_name: "Приходько"
};
console.log(`Список свойств: ${Object.keys(student)}`);
console.log(`Студент ${student.last_name} ${student.first_name} учится в ${student.group} группе`);


const slider = function () {
    let arrowRight = document.getElementById('rightbtn');
    let arrowLeft = document.getElementById('leftbtn');
    let arr = document.querySelectorAll('.SliderImg');
    let count = 0;
    arr[count].style.display = 'block';
    arrowRight.addEventListener('click', () => {
        if (arr.length - 1 > count) {
            count++;
            arr[count].style.display = 'block';
        }
    })
    arrowLeft.addEventListener('click', () => {
        if (count != 0) {
            arr[count].style.display = 'none';
            count--
            arr[count].style.display = 'block';
        }
    })
}

slider();