import './App.css'
import React, { Component } from 'react'
import Result from './component/Result'
import Search from './component/Search'



class App extends Component {


  componentDidMount(){
    const base = process.env.REACT_APP_BASE_URL
    const key = process.env.REACT_APP_API_KEY


    const url = `${base}current?access_key=${key}&query=${this.props.value}`
    
}


  render() {
    return (
        <div className="App">
            <Search/>
            <Result />

          </div>
    )
  }
}

export default App
