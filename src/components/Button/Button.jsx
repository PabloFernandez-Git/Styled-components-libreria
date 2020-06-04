import React from 'react'
//import './button.css'
import styled from 'styled-components'

const color = 'royalblue'
const padding = '2rem'

const StyledButton = styled.button`
    background-color: ${color};
    color: #fff;
    padding: ${padding};

    &:hover{
        background-color: red;
        color: ${color};
    }
`

const Button = () => {
    return (
        <StyledButton>Click Me!</StyledButton>
    )
}

export default Button


/*
Variables

Con Styled components podemos crear cualquier variable:

const color = 'royalblue'
const padding = '2rem'

Para utilizar esa variable lo unico que tenemos que hacer es interpolarla exactamente igual que en un template string:

background-color: ${color};
padding: ${padding};





*/