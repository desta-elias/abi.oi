// function fruitProcesser(apples, oranges) {

//     const juice = `juice with ${apples} applese and ${oranges} orandes`
//     return juice;
// };

// // calling or runing or invoking function

// const joy = fruitProcesser(5, 2);
// console.log(joy);

// const applesJuses = fruitProcesser(4, 2);
// console.log(applesJuses);

// function experion and decrition
// % function dercrtion
// function joyage(brithyear) {
//     return 2015 - brithyear;
// };
// const age1 = joyage(1992);
// console.log(age1);

// // % function expertion

// const claage2 = function (brithyear) {
//     return 2015 - brithyear;
// };
// const age2 = claage2(1993)
// console.log(age1, age2);

// const joy = x => 1992 - x;
// const jp = joy(1888);
// console.log(jp);
// const joy = brithyear => 2015 - brithyear;
// const joybrthYear = joy(1993)
// console.log(joybrthYear);

// function joy1(brithyear) {
//     age = 2015 - brithyear;
//     return age;
// }
// const joyage = joy1(1990);
// console.log(joyage);

// const yearUntiretarmeint = (fristName, brithyear) => {
//     const age = 2015 - brithyear;
//     const retarmeint = 65 - age;
//     return `${fristName} retmenit in ${retarmeint} yera`;
// }

// console.log(yearUntiretarmeint('Joy', 1992));
// console.log(yearUntiretarmeint('abi', 1995));
// const yearUntilretament = (fristName, breathYear) => {
//     const age = 2015 - breathYear;
//     const retarmeint = 65 - age;

//     return `${fristName} retmenit in ${retarmeint} year!`
// };

// console.log(yearUntilretament('Joy', 1993))
// console.log(yearUntilretament('abi', 1993))

// function cutfruitPiece(fruit) {
//     return fruit * 3;
// }

// function fruitProcesser(apples, oranges) {
//     const applesjprece = cutfruitPiece(apples);
//     const applesjoranges = cutfruitPiece(oranges);
//     const juice = `juice with ${applesjprece} piece of apples and ${applesjoranges} piece of oranges`

//     return juice;

// }

// console.log(fruitProcesser(2, 3));

// function unexpextedEvet(fruit) {
//     return fruit * 3;
// }

// function fertunit(borger, juice) {
//     const unexpextedborger = unexpextedEvet(borger);
//     const unexpextedjuice = unexpextedEvet(juice);

//     const food = `we wante to ${unexpextedborger} barger and also ${unexpextedjuice} juice with happey face!`
//     return food;
// }

// console.log(fertunit(3, 5));
// function calage(year) {
//     return 2015 - year;
// }

// const yearUntiretarmeint = function (breathYear, fristName) {
//     const age = calage(breathYear);
//     const retarmeint = 65 - age;

//     if (retarmeint > 0) {
//         console.log(`${fristName} retires in ${retarmeint} years`);
//         return retarmeint;
//     } else {
//         console.log(`${fristName} has already retired`);
//         return -1;

//     }

// }
// console.log(yearUntiretarmeint(1993, 'ABI'))
// console.log(yearUntiretarmeint(1933, 'JOY'))

// const calcage = function (year) {
//     return 2015 - year;

// }
// const claret = function (afe) {
//     return 65 - afe;
// }

// const anyAbody = function (breathYear, fristName) {
//     const ade = calcage(breathYear);
//     const retarmeint = claret(ade);
//     if (retarmeint > 0) {
//         console.log(`${fristName} retires in ${retarmeint} year !`)

//     } else {
//         return `${fristName} has already  retier !`;
//     }

// }

// console.log(anyAbody(1993, 'DETA ELIAS'));
// const clacAver = (a, b, c) => (a + b + c) / 3
// console.log(clacAver(3, 4, 5));

// // Test
// const clacAverageDolphins = (a, b, c) => ((a + b + c) /
//     3);

// console.log(clacAverageDolphins(44, 23, 71), clacAverageDolphins(65, 54, 49));

// const checkWiner = function (avgdolhins, avgkoalas) {
//     if (avgdolhins > 2 * avgkoalas) {
//         console.log(`dolphins win (${avgdolhins} vs. ${avgkoalas})`)
//     } else if (avgkoalas > 2 * avgdolhins) {
//         console.log(`koalse win (${avgkoalas} vs. ${avgdolhins})`)
//     } else {
//         console.log('both team not win')
//     }
// }

// checkWiner(333, 32);

// const nameJ = ['Desta', 'Elias', 'Lobaso'];
// console.log(nameJ);
// console.log(nameJ[1]);
// console.log(nameJ[nameJ.length - 3])
// nameJ[2] = 'sorodun'
// console.log(nameJ);
// const father = 'Elias';

// const family = [father, 'Aberish', 2015 - 1993, nameJ];
// console.log(family);

// Exerces
// const calaAge = function (brithyear) {
//     return 2015 - brithyear;
// };

// const age = [1990, 1993, 1999, 2001];

// const ages = [calaAge(age[0]), calaAge(age[0]), calaAge(age[age.length - 1])];
// console.log(ages)

// ADD ELIAMENT(UNSHIFT AND PUSH)
// const family = ['Melkam', 'Asham', 'Hiwat'];
// console.log(family);
// family.push('Teketal');
// console.log(family);
// family.unshift('Elias')
// console.log(family);

// // REMOVE ELEMENT (POP AND SHIFT)
// const joy = family.pop()
// console.log(family);

// const joy2 = family.shift()
// console.log(family);

// const joy = {
//     fristName: 'Deata',
//     lastName: 'Elias',
//     age: 2015 - 1993,
//     job: 'student',
//     freind: ['html', 'js', 'css']

// }
// const dos = prompt('What is you want to know about joy about frined or age or lastname or frist name ?');

// if (joy[dos]) {
//     console.log(joy[dos]);
// } else {
//     console.log('worng!  What is you want to know about joy about frinf or age or lastname or frist name ?')
// }
// const joy = {
//     fristName: 'Deata',
//     lastName: 'Elias',
//     brithYear: 2001,
//     job: 'student',
//     freind: ['html', 'js', 'css'],
//     hasdriverlicese: true,

//     //Dest is a 22-year old sudent, and he has a driver's license

//     getSumerty: function () {
//         return `${this.fristName} is a ${this.age}-year old ${this.job}, and he has ${this.hasdriverlicese ? "a" : "no"} driver's license`

//     },
// calcage: function () {
//     this.age = 2023 - this.brithYear;
//     return this.age;
//     },

// calcAge1: function (briith) {
//     this.age = 2023 - this.brithYear;
//     return this.age;
// },

// getSummary: function () {
//     return `${this.fristName} is a ${this.calcAge1()} Year old ${joy.job}, and he has ${this.hasdriverlicese ? 'a' : 'no'} driver's license`
// }

// }
// console.log(joy.hasdriverlicese)
// console.log(joy.calcage())
// console.log(joy['getSumerty']())
// const mork = {
//     fullName1: 'mork',
//     mass1: 78,
//     hight1: 1.69,

//     calcBMTM: function () {
//         this.bmim = this.mass1 / this.hight1 ** 2;
//         return this.bmim;
//     }

// }
// const john = {
//     fullName2: 'john',
//     mass2: 92,
//     hight2: 1.45,

//     calcBMTM: function () {
//         this.bmij = this.mass2 / this.hight2 ** 2;
//         return this.bmij;
//     }
// }
// console.log(mork['calcBMTM']());
// console.log(john['calcBMTM']());

// if (mork.bmim > john.bmij) {
//     console.log(`${mork.fullName1} BMI (${mork.bmim}) is than ${john.fullName2}`)
// } else {
//     console.log(`${john.fullName2} BMI (${john.bmij}) is than ${mork.fullName1}`)

// };

// const familylove = [
//     'dascho',
//     'telket',
//     8384 - 7349,

//     ['sami', 'asyp']
// ]

// for (let i = 0; i < familylove.length; i++)(
//     console.log(familylove[i], typeof familylove[i])
// );

// // console.log(ages);

// const year = [1999, 2001, 2020, 2025];
// const ages = [];

// for (let i = 0; i < year.length; i++) {
//     ages.push(2037 - year[i])
// }

// console.log(ages);

// continnue and break

// // console.log('---ONLY DRTINGES---');
// const joy = [
//     'Deata',
//     'Elias',
//     2001,
//     'student',
//     true
// ];
// for (let i = joy.length - 1; i >= 0; i--) {
//     console.log(joy[i])
// }

// for (let exerxice = 1; exerxice < 4; exerxice++) {
//     console.log(`-------starting exercise ${exerxice}`)

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exerice ${exerxice}:lifting weight repetiton ${rep}`)
//     }
// }
// const calatip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 440, 37, 105, 10, 1100, 86, 52];
// console.log(calatip(200));
// console.log(bills);
// const tips = [];
// const totial = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calatip(bills[i]);
//   tips.push(tip[i]);
//   totial.push(tip + bills[i]);
// }

// console.log(bills, totial);

// const clacaavege = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(clacaavege(totial));

// // Remember, we're gonna use strict mode in all scripts now!
// ('use strict');

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


///////////////////////////////////////
// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
*/

// document.querySelector('.qu').textContent = 23;
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🍾 correct answer';
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').Value);
// });

let secrtNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let hs = 0;

// document.querySelector('.qu').textcontent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const displaysMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  //  work AREA

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    //  when guss is correct
  } else if (guess === secrtNumber) {
    // document.querySelector('.message').textContent = '🍾 correct answer';
    displaysMessage('🍾 correct answer');
    document.querySelector('.qu').textContent = secrtNumber;
    document.querySelector('body').style.backgroundColor = '#28b487';
    document.querySelector('.qu').style.width = '150px';
    hs = hs + 5;

    document.querySelector('.highscore').textContent = hs;
    // document.querySelector('body').style.backgroundColor = '#fff';
    // document.querySelector('qu').style.backgroundColor = '150px';
    //  when guess is too high
  } else if (guess !== secrtNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secrtNumber ? '😟 Too high' : '😟 Too low';
      displaysMessage(guess > secrtNumber ? '😟 Too high' : '😟 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😟 You loose the game';
      displaysMessage('😟 You loose the game');

      document.querySelector('.score').textContent = 0;
    }

    //  when guess is too low
  }
  // else {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😟 Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😟 You loose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displaysMessage('Start guessing...');
  document.querySelector('.qu').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.guess').value = '';
  document.querySelector('.qu').style.width = '100px';
});
