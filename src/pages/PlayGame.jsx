// import { useState,useEffect } from 'react';
// import {Link,useLocation,useNavigate} from 'react-router-dom'
// import HangMan from '../components/HangMan/HangMan';
// import LetterButtons from '../components/LetterButtons/LetterButtons';
// import MaskedText from '../components/MaskedText/MaskedText';


// function PlayGame(){
//     const {state}=useLocation();
//     const [guessedLetters,setGuessedLetters]=useState([]);
//     const [step,setStep] = useState(0);
//     // const setguessword="";
//     // const navigate=useNavigate();

//     function handleLetterClick(letter){
//         if(state.wordSelected.toUpperCase().includes(letter))
//         {
//             console.log('correct');
//         }
//         else{
//             console.log('wrong');
//             setStep(step+1);
           
//         }
//         setGuessedLetters([...guessedLetters,letter]);
//     }
//     // useEffect(() => {
//     //     let timeout;

//     //     if (step === 7) {
//     //         timeout = setTimeout(() => {
//     //             navigate('/Gameover', { state: { result: step, org: state.wordSelected } });
//     //         }, 1000);
//     //     } else if (
//     //         setguessword.toUpperCase() === state.wordSelected.toUpperCase()
//     //     ) {
//     //         timeout = setTimeout(() => {
//     //             navigate('/Gameover', { state: { result: "win", org: state.wordSelected } });
//     //         }, 1000);
//     //     }

//     //     return () => clearTimeout(timeout);
//     // }, [step, setguessword, navigate, state.wordSelected]);


//     return (
//         <>
//             <h1>Play Game </h1>
         
//             {state?.wordSelected && (
//                 <>
//             <MaskedText text={state.wordSelected} guessedLetters={guessedLetters}  />
//             <div>
//                 <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={ handleLetterClick}/>
//             </div>
//             <div>
//                 <HangMan step={step}/>
                
//             </div>
           
//             </>
//             )}
        
//             <Link to='/' className="text-red-400">Home</Link>
//             <br/>
//             <Link to='/start' className="text-blue-400">Start Game</Link>
//         </>

//     );
// }
// export default PlayGame;





import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HangMan from '../components/HangMan/HangMan';
import LetterButtons from '../components/LetterButtons/LetterButtons';
import MaskedText from '../components/MaskedText/MaskedText';
import { getMaskedString } from '../components/MaskedText/MaskingUtility'; // ✅ import utility

function PlayGame() {
  const { state } = useLocation();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const originalWord = state?.wordSelected?.toUpperCase() || "";

  function handleLetterClick(letter) {
    if (originalWord.includes(letter)) {
      console.log("correct");
    } else {
      console.log("wrong");
      setStep((prev) => prev + 1);
    }
    setGuessedLetters((prev) => [...prev, letter]);
  }

  // 🧠 This function calculates the current guess from guessed letters
  function calculateGuessword() {
    return getMaskedString(originalWord, guessedLetters).join("");
  }

  useEffect(() => {
    let timeout;

    const currentGuess = calculateGuessword();

    if (step >= 7) {
      timeout = setTimeout(() => {
        navigate("/Gameover", {
          state: { result: "lose", org: state.wordSelected },
        });
      }, 2000); // 2-second delay
    } else if (currentGuess === originalWord) {
      timeout = setTimeout(() => {
        navigate("/Gameover", {
          state: { result: "win", org: state.wordSelected },
        });
      }, 2000); // 2-second delay
    }

    return () => clearTimeout(timeout);
  }, [step, guessedLetters, navigate, originalWord, state.wordSelected]);

  return (
    <>
      <h1>Play Game</h1>

      {originalWord && (
        <>
          <MaskedText text={originalWord} guessedLetters={guessedLetters} />
          <div>
            <LetterButtons
              text={originalWord}
              guessedLetters={guessedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>
          <div>
            <HangMan step={step} />
          </div>
        </>
      )}

      <Link to="/" className="text-red-400">
        Home
      </Link>
      <br />
      <Link to="/start" className="text-blue-400">
        Start Game
      </Link>
    </>
  );
}

export default PlayGame;
