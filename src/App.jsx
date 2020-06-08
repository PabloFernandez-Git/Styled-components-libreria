import React, { Component } from 'react'
import Title from './components/Title';
import Button from './components/Button';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import colors from './theming/colors'


const ButtonRounded = styled(Button)`
    border-radius: 15px;
    padding: 1rem 2rem;
`


const GlobalStyle = createGlobalStyle`
    body{
        background-color: greenyellow;
    }
`

class App extends Component {

    render() {
        return (
            <>
                <Title />
                <ThemeProvider theme={colors}>
                    <Button>Click Me!</Button>
                    <Button danger>Click Me!</Button>
                    <Button ghost>Ghost Me!</Button>
                    <Button danger ghost>Ghost Me!</Button>
                    <ButtonRounded danger ghost>Rounded</ButtonRounded>
                </ThemeProvider>
            </>
        )
    }
}

export default App;


/*
Heredando estilos

Utilizar la herencia nos permite reutilizar codigo para no tener que escribir un componente desde cero.


1. Para ello debemos importar 'styled':

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'


2. Creamos un styled-component con una pequeña variante a la forma tradicional de crearlos.
Si nosotros queremos que este componente (en este caso un boton), tenga todos los estilos de otro boton, y sumarle o sobre escribirle alguna propiedad lo unico que tenemos que hacer es, en lugar de escribir 'styled.button' escribir 'styled(Button)' donde le pasamos de que componente queremos que herede los estilos.

const ButtonRounded = styled(Button)`
    border-radius: 15px;
    padding: 1rem 2rem;
`


3. Al ser un componente lo utilizamos como cualquier otro.

<ButtonRounded danger ghost>Rounded</ButtonRounded>

Este componente admite que le pasemos atributos JSX.
De esta forma no solo podemos añadir propiedades, sino que tambien podemos sobreescribir alguna en particular.
Lo que escribimos en este nuevo componente va a valer mas que lo que tenga por defecto. 


*/