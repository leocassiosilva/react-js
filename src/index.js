import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
//const elemento = <h1>React</h1>
ReactDOM.render(
<div>
    <Pai nome="Leocassio" sobrenome="Silva">
        <Filho nome="Pedro"/>
        <Filho nome="Maria"/>
    </Pai>
</div>
    
, document.getElementById('root'))

