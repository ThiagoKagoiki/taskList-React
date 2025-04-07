import React from "react";
import './Button.css'

const Button = ({OnClick, style, children}) => {
    return(
        <button className="botoes" onClick={OnClick} style={style}>
            {children}
        </button>
    )
}

export default Button