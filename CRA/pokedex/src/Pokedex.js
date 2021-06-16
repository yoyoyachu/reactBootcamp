import React,{Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'
class Pokedex extends Component{
    
    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className="pokedex-winner">Winning Hand</h1>
        }else{
            title = <h1 className="pokedex-loser">Losing Hand</h1>
        }
        return(
            <div className="pokedex">
            {title}
            <h4>Total Experience: {this.props.exp}</h4>
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


