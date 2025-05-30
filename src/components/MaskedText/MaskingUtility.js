/**@param {The word which is given as input and expexted to be guessed} originalWord
/**@param {Letters which are guessed by user already} guessedLetters
Ex: originalWord: HUMBLE
guessedLetters: ['H','M','E']
return-->"H _ M _ E"
*/




export function getMaskedString(originalWord,guessedLetters){
    guessedLetters=guessedLetters.map(letter=>letter.toUpperCase());

    const guessedLetterSet=new Set(guessedLetters);
  
    const result= originalWord.toUpperCase().split('').map(char=>{
        if(guessedLetterSet.has(char)){
            
            return char;
        }
        else{
          
            return "_";

        }
    });
    // if(res==0)
    // setguessword=originalWord;
    
    return result;
}