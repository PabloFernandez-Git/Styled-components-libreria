import React, { Component } from 'react'
import Title from './components/Title'
import Button from './components/Button';

class App extends Component {

    render() {
        return (
            <>
                <Title />
                <Button >Click me!</Button>
                <Button danger>Click me!</Button>
                <Button ghost>Ghost me!</Button>
                <Button danger ghost>Ghost me!</Button>
            </>
        )
        
    }
}

export default App;
