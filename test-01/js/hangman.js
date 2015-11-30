/**
 * Created by oscardelgadillo on 11/30/2015.
 */
// List of word for example and testing
var Words = ['monitor','pencil','eraser','goes','windows'];

/***
 * This function return a word of a list of words, random choose
 * @param listWords
 * @returns a word
 */
var selectRandomWord = function(listWords){
    var itemWord = Math.floor(Math.random() * listWords.length);
    return word = listWords[itemWord];
};


/***
 * Function principal of the game
 */
var hangman = function () {
    replaceInParagraph(selectRandomWord(Words))

};
