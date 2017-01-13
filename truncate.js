// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
//invoke strict mode
"use strict";
//full string 
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
//number of words that will be in final string
var wordLimit = 8;
//full word
var originalWord = "LauraPerronMackenzie"
//number of letters that will be in final string
var charLimit= 10;
var shortText = truncateWords(originalText, wordLimit);
var shortWord = truncateCharacters(originalWord, charLimit);
//print results to console
console.log('Originaltext: ' + shortText.originalText + '   Wordcount: ' + shortText.wordCount + '   Number of Words: ' + shortText.numberWords + '   Shorttext: ' + shortText.shortText);
console.log('Originalword: ' + shortWord.originalWord + '   Charcount: ' + shortWord.charCount + '   Number of Letters: ' + shortWord.numberChars + '   Shorttext: ' + shortWord.shortWord);


//This function shortens a string to the number of words specified
function truncateWords(longText, numWords) {
    //check if numWords was specified
    if (numWords===undefined) 
      numWords=3;
    //create array of string
    var words = longText.split(" ");
    var numRemoved = (words.length-numWords);
    //remove extra words
    words.splice(numWords, numRemoved, "...");
    var newText = words.join(" ");
    //create Text object
    var Text = {originalText: longText, wordCount: (numRemoved+numWords), numberWords: numWords, shortText: newText};
    return Text;
  }

//This function shortens a word to the number of letters specified
function truncateCharacters(longChars, numLetters) {
    //check if numLetters was specified
    if(numLetters===undefined)
      numLetters=1;
    //create array of word
    var word = longChars.split("");
    var numRemoved = (longChars.length-numLetters);
    //remove extra letters
    word.splice(numLetters, numRemoved, "...");
    var newText = word.join("");
    //create Word object
    var Word = {originalWord: longChars, charCount: longChars.length, numberChars: numLetters, shortWord: newText};
    return Word;
  }
