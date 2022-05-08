// Task 1 - Знайти та вивести довижину настипних стрінгових значень
//          'hello world', 'lorem ipsum', 'javascript is cool'

const showLengthString = (...strings) => {
    for (const string of strings) {
        console.log(string.length)
    }
}

showLengthString('hello world', 'lorem ipsum', 'javascript is cool');

// Task 2 - Перевести до великого регістру наступні стрінгові значення
//          'hello world', 'lorem ipsum', 'javascript is cool'

const makeBigLetter = (...strings) => {
    for (const string of strings) {
        console.log(string.toUpperCase());
    }
}

makeBigLetter('hello world', 'lorem ipsum', 'javascript is cool');

// Task 3 - Перевести до нижнього регістру настипні стрінгові значення
//          'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const makeLittleLetter = (...strings) => {
    for (const string of strings) {
        console.log(string.toLowerCase());
    }
}

makeLittleLetter('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL');

// Task 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

const str4 = ' dirty string   ';
console.log(str4.trim());

// Task 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

const str5 = 'Ревуть воли як ясла повні';
const arr5 = str5.split(' ');
console.log(arr5);

// Task 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку
//          перетворити всі об'єкти в масиві на стрінгові.

const arr6 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const newArr6 = arr6.map(item => item + '');
console.log(newArr6);

// Task 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його
//          від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//          let nums = [11,21,3];
//          sortNums(nums,'ascending') // [3,11,21]
//          sortNums(nums,'descending') // [21,11,3]

const sortNums = (num, direction) => {

    if (direction === 'ascending') {
        console.log(num.sort((a, b) => a - b));
    }

    if (direction === 'descending') {
        console.log(num.sort((a, b) => b - a));
    }
}

const nums = [11, 21, 3];
sortNums(nums, 'ascending');
sortNums(nums, 'descending');

// Task 8 - є масив
//          let coursesAndDurationArray = [
//          {title: 'JavaScript Complex', monthDuration: 5},
//          {title: 'Java Complex', monthDuration: 6},
//          {title: 'Python Complex', monthDuration: 6},
//          {title: 'QA Complex', monthDuration: 4},
//          {title: 'FullStack', monthDuration: 7},
//          {title: 'Frontend', monthDuration: 4}
//          ];
//          -- відсортувати його за спаданням за monthDuration
//          -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//          -- відсортувати його за спаданням за monthDuration
const sortByAge = (arr) => {
    return arr.sort((a, b) => a.monthDuration - b.monthDuration);
}

console.log(sortByAge(coursesAndDurationArray));

//          -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filtersCurse = (arr) => {
    return arr.filter(item => item.monthDuration > 5 ? item : null);
}

console.log(filtersCurse(coursesAndDurationArray));

// Task 9  описати колоду карт
//         - знайти піковий туз
//         - всі шістки
//         - всі червоні карти
//         - всі буби
//         - всі трефи від 9 та більше
//         {
//           cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//           value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//           color:'', // 'red','black'
//         }

const cards = [
    {value: 'joker', color: 'red'},
    {value: 'joker', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '6', color: 'black'}
];

const spadeAce = cards.filter(value => {
    if (value.cardSuit === 'spade' && value.value === 'ace') {
        return value;
    }
});

const allSix = cards.filter(value => value.value === '6');

const allRedCards = cards.filter(value => value.color === 'red');

const allDiamonds = cards.filter(value => value.cardSuit === 'diamond');

const allCardSuit = cards.filter(value => {
    if (value.value !== '6' && value.value !== '7' && value.value !== '8' && value.value !== '9') {
        return value;
    }
});

console.log('Ace Spade: ', spadeAce);

console.log('All six: ', allSix);

console.log('All red cards: ', allRedCards);

console.log('All Diamonds: ', allDiamonds);

console.log('All Card Suit: ', allCardSuit);