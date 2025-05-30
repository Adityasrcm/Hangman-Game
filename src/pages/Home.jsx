import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
function Home(){
    const [word,setWord]=useState('');
    // const [hint,setHint]=useState('');
    async function fetchWords(){
        const response=await fetch('http://localhost:3000/words');
        const data= await response.json();
        console.log(data);

        const randomIndex= Math.floor(Math.random()*data.length);
        console.log(randomIndex);
        setWord(data[randomIndex].wordValue);
        // setHint(data[randomIndex].hintValue);
    }

    useEffect(()=>{
        fetchWords();
    },[]);
    return (
        <>
            <Link to='/play' state= {{wordSelected:word}}>
            <Button text="Single Palyer"/>

            </Link>
            <br/>
            <Link to="/start">
                <div className="mt-4">
                    <Button text="Multi Player" styleType="secondary"/>
                </div>
            </Link>
        </>
    )

}
export default Home;