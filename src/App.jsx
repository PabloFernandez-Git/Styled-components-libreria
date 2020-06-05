import React, { Component } from 'react'
import Title from './components/Title'
import Button from './components/Button';

class App extends Component {

    render() {
        return (
            <>
                <Title />
                <Button bgcolor='red'>Click me!</Button>
                <Button bgcolor='royalblue'>Click me!</Button>
            </>
        )
        
    }
}

export default App;


