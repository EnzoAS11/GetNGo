import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

export function IngredientsTag({ isNew, value, onClick, ...rest }) {
    return (
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
                list="ingredientName"
            />

            <datalist id="ingredientName">
                <option value="Arquibancada">Arquibancada</option>
                <option value="Cadeira_inferior">Cadeira_inferior</option>
                <option value="Cadeira_intermediaria">Cadeira_intermediaria</option>
                <option value="Pista">Pista</option>
                <option value="Pista_premium">Pista premium</option>
            </datalist>

            <button
                type="button"
                onClick={onClick}
                className={isNew ? "button-add" : "button-delete"}
            >
                { isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}
