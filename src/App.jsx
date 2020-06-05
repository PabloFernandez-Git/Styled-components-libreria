import React, { Component } from 'react'
import Title from './components/Title';
import Button from './components/Button';

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import colors from './theming/colors'


const GlobalStyle = createGlobalStyle`
    body{
        background-color: greenyellow;
    }
`

class App extends Component {

    render() {
        return (
            <>
                <GlobalStyle />
                <Title />
                <ThemeProvider theme={colors}>
                    <Button>Click Me!</Button>
                    <Button danger>Click Me!</Button>
                    <Button ghost>Ghost Me!</Button>
                    <Button danger ghost>Ghost Me!</Button>
                </ThemeProvider>
            </>
        )
    }
}

export default App;


/*
Estilos globales

A. Podemos aplicar estilos globales con un 'index.css' importado en 'index.js' (el archivo que renderiza toda la aplicacion).


B. Con 'styled-components' tenemos una forma de aplicar estilos globales sin depender de un archivo CSS/SASS externo.   

1. En nuestro 'App.jsx' tenemos que importar 'createGlobalStyle'.
Este es el componente que nos da 'styled-components' para crear los estilos globales.

import { ThemeProvider, createGlobalStyle } from 'styled-components'

Funciona exactamente igual que cualquier 'styled-components'.

2. Crear el objeto ('styled-components') con los estilos

const GlobalStyle = createGlobalStyle`
    body{
        background-color: greenyellow;
    }
`

3. Al ser un componente solo resta utilizarlo.
No necesitamos ambas etiquetas; usamos una etiqueta que se cierra a si misma.

<GlobalStyle />
<Title />
<ThemeProvider theme={colors}>
    <Button>Click Me!</Button>
    <Button danger>Click Me!</Button>
    <Button ghost>Ghost Me!</Button>
    <Button danger ghost>Ghost Me!</Button>
</ThemeProvider>



*/