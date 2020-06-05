import React, { Component } from 'react'
import Title from './components/Title'
import Button from './components/Button';

class App extends Component {

    render() {
        return (
            <>
                <Title />
                <Button danger>Click me!</Button>
                <Button >Click me!</Button>
            </>
        )
        
    }
}

export default App;


