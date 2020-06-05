import React from 'react'

import styled from 'styled-components'

const getBorder = (width, type, color) => {
    return `${width} ${type} ${color}`
}

const Header = styled.header`
    border: ${getBorder('3px', 'solid', 'royalblue')};
    text-align: center;
    margin-bottom: 1rem;

    & h1{
        margin: 0;
        color:red;
    }

    & h1::after{
        content:'';
        display: block;
        width:100px;
        height:100px;
        background-color: greenyellow;
    }

    &:hover ::after{
        background-color: blue;
    }
`

const Title = () => {
    return (
        <Header>
            <h1>
                Styled Components
             </h1>
        </Header >
    )
}

export default Title


/*
Anidamiento

En casos donde tenemos un elemento dentro de otro, por ejemplo un <h1> dentro de un <header>, podemos anidar los elementos utilizando un '&'. 

Dependera la cantidad de codigo (css) que requiera cada elemento si conviene anidarlos o crear un nuevo elemento y luego anidar las etiquetas.



*/