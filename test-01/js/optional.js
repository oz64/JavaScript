/**
 * Created by oscardelgadillo on 11/30/2015.
 */

/***
 * This function recive a paragraph and display in console the paragraph with vowels replace
 * with '*' character
 * @param paragraph
 */
replaceInParagraph = function(paragraph){

    var character = '*';

    var para = paragraph.replace(/a/g,character);
    para = para.replace(/e/g,character);
    para = para.replace(/i/g,character);
    para = para.replace(/o/g,character);
    para = para.replace(/u/g,character);


     console.log(para);
};