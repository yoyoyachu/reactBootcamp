import React,{Component} from 'react';
import './Pokecard.css'
const poke_api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const padtoThree = (number) =>(number <= 999 ? `00${number}`.slice(-3) : number)
class Pokecard extends Component{
    render(){
        const {id,name,type,exp} = this.props;
        const imgSrc = `${poke_api}${padtoThree(id)}.png`;
        return(
                <div className="pokecard">
                    <h2 className="pokecard-title">{name}</h2>
                    <div className="pokecard-image">
                        <img src={imgSrc} alt={name} />
                    </div>
                    <p className="pokecard-data">{type}</p>
                    <p className="pokecard-data">{exp}</p>
                </div>
        )
    }
}


export default Pokecard;