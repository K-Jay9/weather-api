import './App.css'
import Result from './component/Result'
import Search from './component/Search'
import model from './model'

import {StoreProvider, createStore} from 'easy-peasy'



const store = createStore({model})


function App(){


    return (
      <StoreProvider store={store}>
        <div className="App">
              <Search/>
              <Result />

            </div>
      </StoreProvider>
    )
}

export default App
