import React from 'react'
//import './button.css'
import styled from 'styled-components'


const StyledButton = styled.button`
    background-color: royalblue;
    color: #fff;

    &:hover{
        background-color: red;
        color: royalblue;
    }
`

const Button = () => {
    return (
        <StyledButton>Click Me!</StyledButton>
    )
}

export default Button


/*
Creando nuestro primer Styled Component

Extension recomendada:
vscode-styled-components

1. Importar la libreria

import styled from 'styled-components'


2. Crear una constante que es donde se va a guardar nuestro styled component.
Todos los styled components deben ir guardados en constantes y se tratan como componentes, por lo tanto empiezan con mayuscula.

const StyledButton = styled.button`
    background-color: royalblue;
    color: #fff;

    &:hover{
        background-color: red;
        color: royalblue;
    }
`

La constante que estamos creando (StyledButton) va a ser = a 'styled' (la libreria) seguida de un punto (.) y el elemento que queremos crear.

const StyledButton = styled.button

A continuacion, sin espacios, colocamos `` para crear un template string.
Dentro del template string se trabajaba igual que en CSS/SASS


3. Ahora para utilizar nuestro styled component debemos utilizarlo como etiqueta dentro de nuestro codigo:

<StyledButton>Click Me!</StyledButton>



*/