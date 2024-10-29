import { Container, Content, Logo } from "./styles";
import logo_gray from '../../assets/logo_gray.svg'

export function Footer() {
    return (
        <Container>
            <Content>
                <Logo>
                    <div className="logo">    
                        <span>GetNGo</span>
                    </div>
                </Logo>

                <p>
                    © 2024 - Todos os direitos reservados.
                </p>

            </Content>
        </Container>
    );
}
