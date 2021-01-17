import  React from 'react'
import { childrenWithprops } from '../utils/utils'

export default props => 
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filho</h2>
    <ul>
       {childrenWithprops(props)} 
    </ul>
</div>