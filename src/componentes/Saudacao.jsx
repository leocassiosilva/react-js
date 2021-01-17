import React, {Component} from 'react'

export default class Saudacao extends Component{
    
    state = {
        tipo: this.props.tipo, 
        nome: this.props.nome
    }

    constructor(props){
        super(props)
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }


    //função tipo
    setTipo(e){
        //alterar o estado
        this.setState ({tipo : e.target.value })
    }

    //função nome
    setNome(e){
        this.setState({nome : e.target.value })
    }
    
    render(){
        const {tipo, nome} = this.state
        return(
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input type="text" placeholder="tipo.." value={tipo}
                onChange={this.setTipo}/>
                <input type="text" placeholder="nome.." value={nome} onChange={this.setNome}/>
            </div>
        )
    }

}