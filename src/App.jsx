import React, { Component } from 'react'
import Title from './components/Title'
import Button from './components/Button'

import {ThemeProvider} from 'styled-components'
import colors from './theming/colors'


class App extends Component {

    render() {
        return (
            <>
                <Title />
                <ThemeProvider theme={colors}>
                    <Button >Click me!</Button>
                    <Button danger>Click me!</Button>
                    <Button ghost>Ghost me!</Button>
                    <Button danger ghost>Ghost me!</Button>
                </ThemeProvider>
            </>
        )
        
    }
}

export default App;
