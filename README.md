# PsyIA - Aplicativo de Suporte à Saúde Mental

PsyIA é um aplicativo focado em oferecer suporte emocional e bem-estar, utilizando tecnologias de Inteligência Artificial para criar um espaço seguro e acolhedor onde os usuários possam expressar seus sentimentos, acompanhar seu humor e, se desejarem, conectar-se com pessoas que oferecem suporte, como profissionais ou voluntários.

## Tabela de Conteúdos

1. [Descrição](#descrição)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Pré-requisitos](#pré-requisitos)
5. [Instalação](#instalação)
6. [Uso](#uso)
7. [Contribuição](#contribuição)
8. [Licença](#licença)

## Descrição

PsyIA tem como objetivo proporcionar suporte emocional para pessoas em busca de bem-estar. Através da análise de sentimentos por emojis, o chatbot empático e a conexão com pessoas dispostas a ajudar, o aplicativo cria uma plataforma amigável para expressão emocional e troca de apoio. O diferencial do PsyIA é seu layout adaptativo, que muda conforme o humor do usuário, proporcionando uma experiência personalizada e acolhedora.

## Funcionalidades

- **Cadastro e Login**: Registro e autenticação segura do usuário.
- **Análise de Sentimentos com Emojis**: Permite que o usuário expresse seu humor de forma rápida e visual.
- **Chatbot Empático**: Chatbot que utiliza IA para oferecer suporte emocional em tempo real.
- **Conexão com Voluntários ou Profissionais**: Acesso a pessoas que estão disponíveis para conversas de suporte.

## Tecnologias Utilizadas

- **Frontend**: [React Native](https://reactnative.dev/)
- **Backend**: [Node.js](https://nodejs.org/) e [Firebase](https://firebase.google.com/)
- **Banco de Dados**: [Firebase](https://firebase.google.com/), ou [MongoDB](https://www.mongodb.com/) para dados de usuários e histórico de conversas
- **Inteligência Artificial**: [API do OpenAI](https://platform.openai.com/) para análise de sentimentos e chatbot
- **Hospedagem**: [Google Cloud](https://cloud.google.com/) ou [AWS](https://aws.amazon.com/)

## Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **React Native CLI** e **Expo CLI**
- Conta no **Firebase** para configuração de autenticação e banco de dados
- Conta e chave de API no **OpenAI** para uso do Chatbot

## Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/PsyIA.git
    cd PsyIA
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure o Firebase e a API do OpenAI:
   - Adicione as credenciais do Firebase no arquivo `.env`.
   - Insira a chave de API do OpenAI em `config.js`.

4. Execute o aplicativo:
    ```bash
    npm start
    ```

## Uso

- Faça login ou registre-se para criar uma conta.
- Após o login, utilize o menu para registrar seu humor com emojis, interagir com o chatbot ou iniciar uma conversa com voluntários ou profissionais de saúde mental.

## Contribuição

Sinta-se à vontade para contribuir com o desenvolvimento do PsyIA. Para começar, faça um fork do projeto e envie um pull request com suas melhorias e correções.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
