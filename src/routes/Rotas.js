import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
import Artistas from '../pages/Artistas/Artistas'
import Obras from '../pages/Obras/Obras'
import Contato from '../pages/Contato/Contato';



function Rotas() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/artistas' component={Artistas} />
            <Route path='/obras' component={Obras} />
            <Route path='/contato' component={Contato} />
        </Switch>
    </BrowserRouter>
    )

}

export default Rotas 