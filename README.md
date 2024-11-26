🎟️ Get’nGo: Plataforma de Venda de Ingressos
1. Introdução
1.1. Visão Geral do Projeto
O Get'nGo é uma plataforma online dedicada a facilitar a compra e venda de ingressos para os mais variados tipos de eventos. Nosso propósito é oferecer uma solução prática e eficiente para aqueles que buscam adquirir ingressos de forma ágil e segura, bem como para aqueles que desejam comercializar ingressos adquiridos previamente, mas que não poderão ser utilizados.
Nosso objetivo central é atender a todas as pessoas interessadas em participar de eventos culturais, esportivos, musicais, teatrais, entre outros. Além disso, buscamos suprir as necessidades de indivíduos que, por qualquer motivo, não possam utilizar seus ingressos e desejem revendê-los de maneira confiável e descomplicada.
1.2. Objetivos do Projeto
Facilitar a aquisição de ingressos: Criar uma interface simplificada e intuitiva.
Promover acessibilidade: Garantir compatibilidade com dispositivos móveis e desktops.
Aumentar a confiabilidade: Proporcionar segurança nas transações.

2. Público-Alvo
Qualquer pessoa interessada em eventos culturais, esportivos, de entretenimento, etc.
Pessoas que buscam revender ingressos de forma prática e segura.
Organizadores de eventos que desejam uma plataforma para comercializar ingressos.

3. Funcionalidades Principais
🕺 Exploração de Eventos: Encontre eventos por categorias ou palavras-chave.
🎫 Compra de Ingressos: Processo de checkout simplificado e seguro.
🔄 Revenda de Ingressos: Usuários podem listar ingressos não utilizados para venda.
📅 Gerenciamento de Eventos: Histórico de compras e informações sobre próximos eventos.
🔔 Notificações Personalizadas: Alertas sobre eventos novos ou próximos de acordo com as preferências do usuário.

4. Requisitos
Node.js (versão 16 ou superior).
Gerenciador de pacotes: npm ou yarn.
Ambiente de desenvolvimento configurado para React e servidor local (ex.: Vite ou Webpack).

5. Arquitetura do Sistema
5.1. Fluxo de Navegação
Home: Página inicial com destaques de eventos.
Categorias: Segmentação por tipos de evento (Shows, Esportes, Teatro).
Detalhes do Evento: Informações detalhadas, incluindo mapa de assentos (quando aplicável).
Carrinho de Compras: Resumo dos ingressos selecionados antes do pagamento.
Minha Conta: Alterar informações da conta, e alterar informações de ingressos (quando aplicável).
5.2. Tecnologias Utilizadas
Front-end: React, React Native, JS, CSS/SCSS.
Back-end: Node.js, Beekeeper Studio.

6. Configuração e Execução
6.1. Clonando o Repositório
bash
Copiar código
git clone https://github.com/EnzoAS11/GetNGo
cd GetNGo

6.2. Instalando Dependências
bash
Copiar código
npm install

6.3. Iniciando o Ambiente de Desenvolvimento
bash
Copiar código
npm run dev


7. Design do Website
7.1. Guia de Estilo
Paleta de Cores:
Cor Laranja Fire : #DD571C
R 221 G 87 B 28
Cor Branca Off-white : #F9F9F9
R 249 G 249 B 249
Tipografia:
Primária: Raleway (usada para títulos).
Secundária: Roboto (usada para corpo do texto).
Exemplo padrão para capa de ingresso:

Logo:

Componentes Visuais:
Botões com bordas arredondadas e efeito hover.
Cards para exibir eventos com imagens, títulos e datas.

8. Testes
8.1. Testes Funcionais
Login e registro de novos usuários.
Simulação de compra de ingressos.
Validação de filtros de busca.
8.2. Testes de Usabilidade
Realização de testes para aprimorar a interface.
Coleta de feedbacks de usuários durante a fase beta.

9. Implantação
Hospedagem: Microsoft Azure para o back-end e Netlify para o front-end.
Banco de Dados: Beekeeper Studio para armazenamento.
Código armazenado: Via GitHub.


