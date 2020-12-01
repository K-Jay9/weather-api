import './App.css'
import React, { Component } from 'react'
import Result from './component/Result'
import Search from './component/Search'


class App extends Component {
  
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
