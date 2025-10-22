/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (!petBreed || !petName) { //  checks if either petBreed or petName is falsy
    console.log(`Missing information. Please provide a valid pet.`);
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`);
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`);
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`);
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`);
  } else {
    console.log(`What an...interesting pet.`);
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  //  the program will run as long as firstNum is less than secondNum
  for (let i = firstNum; i < secondNum; i++) console.log(i);
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  //  for every character, the function will log the uppercase character in a new line
  for (const char of str) console.log(`${char.toUpperCase()}!`);
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  //  declares the frequency counter
  const freq = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (const char of str) {
    if (/[A-Z]/.test(char)) { //  tests if the character is found in uppercase A to Z
      freq.uppercase++;
    } else if (/[a-z]/.test(char)) { //  tests if the character is found in lowercase a to z
      freq.lowercase++;
    } else { //  all other characters are added to the key 'neither'
      freq.neither++;
    }
  }
  return freq;
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  //  filters through all the gnomes checking if they stole more than 1 decoration
  const greedyGnomes = gnomes.filter((gnome) => gnome.stolenDecorations.length > 1);
  //  returns the key 'name' from each of the greedyGnomes and adds it to a new array
  return greedyGnomes.map((gnome) => gnome.name);
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
