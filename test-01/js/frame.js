/**
 * Created by oscardelgadillo on 11/30/2015.
 */

/***
 * Return the cant max of the word more lenght
 * @param listOfWords
 */
var lenghtMaxWord = function(listOfWords){
    var sizeMax = 0;
    for (var i = 0; i < listOfWords.length; i++)
    {
        var temp = listOfWords[i].length;
        if (temp > sizeMax)
            sizeMax = temp;
    }
    return sizeMax;
};

/***
 * Draw a line of '*' according to size
 * @param size = tam of the line
 */
var drawLineSupInf = function(size){
    var character = '*';
    for(var i = 0; i < size+3; i++)
        character = character + '*';
    console.log(character);
};

/***
 * Display in console the word with the sides of '*'
 * @param word the word that display
 * @param sizeMax, size max of all word
 */
var drawRow = function(word, sizeMax){
    var sizeWord = word.length;
    var cad = '* '+ word;
    for (var i = sizeWord; i < sizeMax; i++)
        cad=cad+' ';
    console.log(cad,'*');
};

/***
 *  This function recive the list of word and display in console
 *  The word list has to be passed as arguments
 *  e.g: showFrame('hello','word','in','a','frame')
 */
var showFrame = function(){
    var cant = lenghtMaxWord(arguments);
    drawLineSupInf(cant);
    for (var i = 0; i < arguments.length; i++)
        drawRow(arguments[i],cant);
    drawLineSupInf(cant);
};

