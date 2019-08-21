import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Frase from './pages/Frase'
import Main from './pages/Main'

export default function Routes(){

    return(
        <BrowserRouter>
            <Route path="/" exact component={Main}  />
            <Route path="/frase" component={Frase}  />
        </BrowserRouter>
    )
}