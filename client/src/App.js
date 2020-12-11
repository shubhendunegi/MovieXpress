import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import { MoviesContextProvider } from './context/MoviesContext'
import Home from './routes/Home'



const App = ()=> {
    return (
    <MoviesContextProvider>
        <div className= 'container'>
        <Router>
            <Switch>
            <Route exact path = '/' component = {Home}/>
            </Switch>
        </Router>
    </div>
    </MoviesContextProvider>    
    )
}

export default App