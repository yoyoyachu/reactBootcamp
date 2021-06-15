import React,{Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'
class Pokedex extends Component{
    static defaultProps = {
        pokemon : [
            {id: 44, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 77, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 111, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 172, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 245, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 329, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 293, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }
    render(){
        return(
            <div className="pokedex">
            <h1>Pokedex</h1>
            <div className="pokedex-cards">
                {this.props.pokemon.map((m)=>(
                    <Pokecard id= {m.id} name= {m.name} type= {m.type} exp= {m.base_experience}/>
                ))}
            </div>
            
            </div>
        )
    }
}


export default Pokedex;


