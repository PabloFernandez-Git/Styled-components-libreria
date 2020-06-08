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


