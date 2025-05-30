import getButtonStyling from "./getButtonStyling.js";
function Button({ text, onClickHandler ,styleType="primary",type="Button"}){

    return (
        <button
            onClick = {onClickHandler}
            type={type}
             className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`}
          > 
            {text}
           
        </button>
    );
}
export default Button;