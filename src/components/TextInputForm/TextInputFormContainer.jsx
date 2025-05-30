import TextInputForm from "./TextInputForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){
  
    const [inputType , setInputType]= useState("password");
    const [value,setValue]=useState("");
    const navigate=useNavigate();


    function handleFormSubmit(event){
     event.preventDefault();
     console.log("Form Submitted");
     if(value){
    
        navigate("/play",{state:{wordSelected:value}});
   
     }
    }
    function handleTextInputChange(event){
        console.log("text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }
    function handleShowHideClick(){
        console.log("Show/Hide Button clicked");
        if(inputType==="password")
        setInputType("text");
        else
        setInputType("password");
        console.log(inputType);
    }
    return (
        <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
        />
    );

}
export default TextInputFormContainer;