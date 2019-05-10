import React, { Component } from 'react'

import axios from 'axios'

import './pokedex.css'

class App extends Component {

    state = {
        pokemons: []
    }

    componentDidMount(){
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=500/`)
            .then(res => {
                const pokemons = res.data.results
                this.setState({ pokemons })
            })
    }

    render(){        
        return (                                   
            <>                      
                <h1 className="title"> Pokedex </h1>                                  
                <ul className="ul_flex">                
                    { this.state.pokemons.map((pokemon) => <h2 key={pokemon.name}> 
                    <img src={`http://www.pokestadium.com/sprites/xy/${pokemon.name}.gif`}/>
                    {pokemon.name}</h2> )} 
                </ul>
            </>                      
        )
    }
}

export default App