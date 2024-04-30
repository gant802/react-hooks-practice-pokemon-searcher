import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
const [isClicked, setClicked] = useState(false)


  return (
    <Card>
      <div onClick={() => setClicked(!isClicked)}>
        <div className="image">
          {isClicked ? <img src={pokemon.sprites.back} alt="oh no!" /> : 
          <img src={pokemon.sprites.front} alt="oh no!" />}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
