import React from 'react'
import ReactDOM from 'react-dom'
import Bomdia from './componentes/BomDia'
import{BoaTarde, BoaNoite} from './componentes/Multiplos'
//const elemento = <h1>React</h1>
ReactDOM.render(
<div>
    <Bomdia nome="Leocassio"/>
    <BoaTarde nome="Leocassio"/>
    <BoaNoite nome="Leocassio"/>
</div>
    
, document.getElementById('root'))

