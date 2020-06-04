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
Estilos dinámicos con funciones





*/