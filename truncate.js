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
