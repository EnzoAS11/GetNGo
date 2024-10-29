// Styling Imports
import { Container, Content, Form } from "./styles.js";

// Theme Swap Imports
import { ThemeProvider } from 'styled-components';
import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

// Components Imports
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { IngredientsTag } from "../../components/IngredientsTag";
import { Textarea } from "../../components/Textarea";
import { PageError } from "../../components/PageError";

// Strategic Imports (API and others)
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Image Imports
import { RiArrowLeftSLine } from 'react-icons/ri';
import { FiUpload } from "react-icons/fi";

export function CreateDish( ) {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;
    
    const { user } = useAuth()
    
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // Add and Remove Ingredients
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    function handleAddIngredient() {
        if (newIngredient.length < 3) {
            return alert("Erro: Você está tentando inserir um nome de setor inválido!");
        } else {
            setIngredients(prevState => [...prevState, newIngredient]);
            setNewIngredient("");
        }
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    // Create New Dish Function
    async function handleNewDish() {
        if (!image) {
            return alert("Erro: Você não inseriu uma imagem para o ingresso!");
        }
        
        if (!title) {
            return alert("Erro: Você não informou o nome do ingresso!");
        }

        if (ingredients.length < 1) {
            return alert("Erro: Adicione pelo menos um setor!")
        }

        if (newIngredient) {
            return alert("Erro: Você deixou um setor no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!");
        }

        if (!category) {
            return alert("Erro: Você não selecionou a categoria do ingresso!");
        }

        if (!price) {
            return alert("Erro: Você não informou o preço do ingresso!");
        }

        if (!description) {
            return alert("Erro: Você não informou uma descrição para o ingresso!");
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ))

        await api
            .post("/dishes", formData)
            .then(alert("Ingresso adicionado com sucesso!"), navigate("/"));  

        setLoading(false);
    }
      
    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Container>
                    <Header />

                        {
                            user.isAdmin ?

                                <Content>

                                <ThemeSlider theme={theme} toggleTheme={toggleTheme}/>

                                <Form>
                                    <header>
                                        <Link to="/">
                                            <ButtonText title="Voltar" icon={RiArrowLeftSLine}/>
                                        </Link>
                                        <h1>Criar ingresso</h1>
                                    </header>

                                    <div className="details">
                                        <div className="dishImage">
                                            <p>Imagem do Ingresso</p>
                                            <label htmlFor="image">
                                                <FiUpload size={24}/> 
                                                Selecione imagem 
                                            </label>
                                            <Input 
                                                type="file"
                                                id="image" 
                                                name="image"
                                                accept="image/*" 
                                                onChange={e => setImage(e.target.files[0])}
                                            />
                                        </div>
                                        
                                        <div className="dish">
                                            <p>Nome do Ingresso/Show</p>
                                            <Input
                                                placeholder="Ex.: Show Taylor Swift"
                                                type="text"
                                                onChange={e => setTitle(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="ingredientsTag">
                                        <div>
                                            <p>Setor</p>
                                            <div className="ingredients">
                                                {
                                                    ingredients.map((ingredient, index) => (
                                                        <IngredientsTag 
                                                            key={String(index)} 
                                                            value={ingredient} 
                                                            onClick={() => handleRemoveIngredient(ingredient) }
                                                            
                                                        />
                                                    ))
                                                }

                                                <IngredientsTag 
                                                    isNew 
                                                    placeholder="Adicionar" 
                                                    onChange={e => setNewIngredient(e.target.value)}
                                                    value={newIngredient}
                                                    onClick={handleAddIngredient}
                                                />
                                            </div>
                                        </div>

                                        <div className="dishCategory">
                                            <p>Categoria</p>

                                            <select defaultValue={'default'} onChange={e => setCategory(e.target.value)}>
                                                <option value="default" disabled>Selecione a categoria</option>
                                                <option value="drinks">Teatro</option>
                                                <option value="dishes">Sports</option>
                                                <option value="dessert">Shows</option>
                                            </select> 
                                        </div>

                                        <div className="price">
                                            <p>Preço</p>
                                            <Input
                                                placeholder="R$ 00,00"
                                                type="number"
                                                onChange={e => setPrice(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="textarea">
                                        <p>Descrição</p>
                                        <Textarea 
                                            placeholder="Fale brevemente sobre o ingresso e suas informações"
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                    </div>

                                </Form>

                                <div className="button">
                                    <Button 
                                        title={loading ? "Salvando alterações" : "Salvar alterações"}
                                        onClick={handleNewDish} 
                                        disabled={loading}
                                    />
                                </div>

                                </Content>

                            :

                                <PageError />
                        }
                    
                        <Footer />
                </Container>
        </ThemeProvider>
    );
}