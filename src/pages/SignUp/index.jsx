// Styling Imports
import { Container, Form, Logo } from "./styles";

// Theme Import
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import darkTheme from '../../styles/theme';

// Components Imports
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logo from '../../assets/logo.svg';

// Strategic Imports (API and others)
import { api } from "../../services/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleSignUp(){
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        setLoading(true);

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate(-1);
                setLoading(false);
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar");
                }

                setLoading(false)
            });
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
                <Container>
                    
                    <Logo>
                        <div className="logo">
                            <img src={logo} />
                        </div>
                    </Logo>
                    
                    <Form>
                        <h2>Crie sua conta</h2>

                        <div className="inputs">
                            <p>Seu nome</p>
                            <Input
                                placeholder="Exemplo: Maria da Silva"
                                type="text"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="inputs">
                            <p>Email</p>
                            <Input
                                placeholder="Exemplo: exemplo@exemplo.com.br"
                                type="text"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className="inputs">
                            <p>Senha</p>
                            <Input
                                placeholder="No mínimo 6 caracteres"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <Button 
                            title={loading ? "Cadastrando" : "Criar conta"}
                            onClick={handleSignUp} 
                            disabled={loading}
                        />

                        <Link onClick={handleBack}>
                            Já tenho uma conta
                        </Link>

                    </Form>
                </Container>
        </ThemeProvider>
    );
}
