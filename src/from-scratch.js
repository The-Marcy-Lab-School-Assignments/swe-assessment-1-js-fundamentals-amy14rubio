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
  if (!petBreed || !petName) {
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
  for (let i = firstNum; i < secondNum; i++) console.log(i);
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  for (const char of str) console.log(`${char.toUpperCase()}!`);
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  const freq = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (const char of str) {
    if (/[A-Z]/.test(char)) {
      freq.uppercase++;
    } else if (/[a-z]/.test(char)) {
      freq.lowercase++;
    } else {
      freq.neither++;
    }
  }

  return freq;
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  const filteredGnomes = gnomes.filter((gnome) => gnome.stolenDecorations.length > 1);
  return filteredGnomes.map((gnome) => gnome.name);
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
