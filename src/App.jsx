import React, { Component } from 'react'
import Title from './components/Title';
import Button from './components/Button';

import { ThemeProvider } from 'styled-components'
import colors from './theming/colors'

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
                </ThemeProvider>
            </>
        )
    }
}

export default App;