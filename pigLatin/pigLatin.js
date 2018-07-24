const myArgs = process.argv.slice(2);
let strOut = "";

//Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

for (let i = 0; i < myArgs.length; i++) {
  let firstLetter = myArgs[i].substring(0,1);
  let newWord = myArgs[i].substring(1);

  strOut += " " + newWord + firstLetter + "ay";
}

console.log(strOut);
