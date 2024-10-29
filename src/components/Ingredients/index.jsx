/*
import { Container } from "./styles";

import imagePlaceholder from '../../assets/image-not-found-icon.svg';

import Arquibancada from '../../assets/arquibancada.png'
import Cadeira_inferior from '../../assets/cadeira_inferior.png'
import Cadeira_intermediaria from '../../assets/cadeira_intermediaria.png'
import Pista from '../../assets/pista.png'
import Pista_premium from '../../assets/pista_premium.png'

export function Ingredients({ ingredient }) {
    
    function fetchImageIngredient(name) {
        let ingredient = name.toLowerCase().trim()
        
        let ingredientImage;
        
        if (ingredient == "Arquibancada") {
            return ingredientImage = Arquibancada
            
        } else if (ingredient == "Cadeira inferior") {
            return ingredientImage = Cadeira_inferior
            
        } else if (ingredient == "Cadeira intermediaria") {
            return ingredientImage = Cadeira_intermediaria
            
        } else if (ingredient == "Pista") {
            return ingredientImage = Pista
            
        } else if (ingredient == "Pista Premium") {
            return ingredientImage = Pista_premium
            
        }else {
            return ingredientImage = imagePlaceholder
        }
    }
    
    let ingredientImage = fetchImageIngredient(ingredient)
    
    return(
        <Container>
        <div className="Setores">
        <div>
        <img src={ingredientImage} alt="Imagem da setores" />
        <p>{ingredient}</p>
        </div>
        </div>
        </Container>
        );
    }
*/

import { Container } from "./styles";

import imagePlaceholder from '../../assets/image-not-found-icon.svg';
import Arquibancada from '../../assets/arquibancada.png';
import Cadeira_inferior from '../../assets/cadeira_inferior.png';
import Cadeira_intermediaria from '../../assets/cadeira_intermediaria.png';
import Pista from '../../assets/pista.png';
import Pista_premium from '../../assets/pista_premium.png';

export function Ingredients({ ingredient }) {
    function fetchImageIngredient(name) {
        const ingredientName = name.toLowerCase().trim();
        
        switch (ingredientName) {
            case "arquibancada":
                return Arquibancada;
            case "cadeira inferior":
                return Cadeira_inferior;
            case "cadeira intermediaria":
                return Cadeira_intermediaria;
            case "pista":
                return Pista;
            case "pista premium":
                return Pista_premium;
            default:
                return imagePlaceholder;
        }
    }
    
    const ingredientImage = fetchImageIngredient(ingredient);

    console.log("Ingredient Image:", ingredientImage); // Debugging line

    return (
        <Container>
            <div className="Setores">
                <div>
                    <img src={ingredientImage} alt="Imagem da setores" />
                    <p>{ingredient}</p>
                </div>
            </div>
        </Container>
    );
}
