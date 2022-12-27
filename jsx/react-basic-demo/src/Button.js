import React from 'react';

const Button = (props) => {
    const buttonColor = props.buttonName;
    return (
        <button style={{color: props.color}} onClick={() => props.handleClick(buttonColor)}>{buttonColor}</button>
    );
};

export default Button;