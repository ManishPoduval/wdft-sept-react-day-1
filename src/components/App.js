import React from 'react'
import Header from './Header'
import './App.css'
import Input from './Input'
import Card from './Card'

class App extends React.Component {
    // this
    // this.props

    render(){
        console.log(this.props)

        return (
            <div>
                <Header name age="22"  />
                <Header name="Ash" age="23"/>
                <Header name="Helena" age="22"/>
                <h1>{this.props.name} works!</h1>
                <img className="pokemon" src="ash.png" />
                <Input text="Enter your email" />
                <Input text="Enter your password" />
                <Card />
            </div>
        )
            
    }
}

export default App