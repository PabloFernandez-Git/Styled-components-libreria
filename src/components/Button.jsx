import styled, {css} from 'styled-components'


const Button = styled.button`
    padding: .5rem .8rem;
    border: none;
    outline: none;
    margin-right: 1rem;
    margin-bottom: 1rem;
    color: #fff;
    background-color: ${({ theme }) => theme.primary};

    ${({danger, ghost}) => danger && ghost && css`
        background-color: transparent;
        color: red;
        border: 1px solid ${({ theme }) => theme.danger};
    `}

    ${({danger, ghost}) => danger && !ghost && css`
        background-color: ${({ theme }) => theme.danger};   
    `}

    ${({danger, ghost}) => !danger && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.primary};
        border: 1px solid ${({ theme }) => theme.primary};
    `}

`

export default Button;


/*
ThemeProvider

En los proyectos se suelen separar los colores en un archivo aparte (theming/colors.js)

styled-components nos brinda una solucion muy simple para administrar los colores de nuestra aplicacion.

ThemeProvider nos da la opcion de utilizar el archivo 'colors.js' en un unico sitio y utilizarlo en cada uno de los componentes que necesitemos.

La principal ventaja de ThemeProvider es que podemos controlar nuestros colores desde un unico archivo.
Simplemente importando ThemeProvider, la hoja con los colores y rodeando los componentes con la etiqueta <ThemeProvider theme={colors}></ThemeProvider> ya tenemos disponibles los colores donde queramos usarlos.



1. Debemos importar ThemeProvider en nuestro 'App.js' para poder utilizarlo. 
ThemeProvider nos da la posibilidad de usar nuestro archivo 'colors.js' en un unico lugar y aplicarlo a cada uno de los componentes que hagan falta. 

import {ThemeProvider} from 'styled-components'
import colors from './theming/colors'

2. Como {ThemeProvider} es un componente lo unico que resta es utilizarlo en el sitio donde queremos englobar todos los componentes que vayan a utilizar los estilos.

<ThemeProvider theme={colors}>
    <Button >Click me!</Button>
    <Button danger>Click me!</Button>
    <Button ghost>Ghost me!</Button>
    <Button danger ghost>Ghost me!</Button>
</ThemeProvider>

{ThemeProvider} necesita una prop 'theme' igualada a nuestro archivo contenedor de los colores.

<ThemeProvider theme={colors}>

3. Finalmente para utilizarlo vamos al componente (en este caso Button.jsx)

Debemos acceder a traves de las props al color.
Destructuramos la prop 'theme' para usar el color.

background-color: ${({ theme }) => theme.primary};
background-color: ${({ theme }) => theme.danger};



*/