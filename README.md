# Projeto randomuser-Colab

## Descrição do desafio proposto pela empresa [Colab.re](https://www.colab.re/)

- Esse teste tem um único objetivo, resolver o seguinte problema: “Listar os usuários e seus detalhes em uma interface web”
- Não foi solicitado o uso de nenhuma tecnologia específica. Liberdade para personalizar o projeto
- Foi feita apenas a indicação de qual API a ser utilizada [randomuser.me](https://randomuser.me/)

## Tecnologias 

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vscode,nodejs,vite,react,typescript,html,css,git,github,postman" />
  </a>
</p>

## O que o código faz

- Os códigos construídos implementam uma aplicação de backend e frontend para exibir informações de usuários.

- O primeiro código backend é um servidor Node.js que cria uma API REST simples para retornar uma lista de usuários. Ele usa o Express.js para gerenciar as rotas HTTP. Quando uma solicitação GET é feita para '/api/users', ele retorna uma lista de dois usuários com seus dados pessoais, incluindo nome, gênero, localização, endereço de e-mail, nome de usuário, senha e informações de imagem.

- O segundo código backend é semelhante ao primeiro, mas adiciona a funcionalidade do middleware CORS (Cross-Origin Resource Sharing) que permite que a API seja acessada por outros domínios. Ele também adiciona uma linha de código para imprimir no console sempre que um usuário faz uma solicitação GET para '/api/users'.

- O terceiro código frontend é um componente React que usa o pacote Axios para fazer uma solicitação GET para a API do segundo código. Quando a lista de usuários é recuperada com sucesso, ele armazena os usuários no estado e exibe seus nomes em uma tabela. Ele usa os Hooks useState e useEffect do React para gerenciar o estado e realizar efeitos secundários.

## Como ver o projeto em funcionamento

- Digite esses comandos no terminal do vscode:
```
gh repo clone Prdsilva80/randomuser-Colab
```
Baixe as dependências do projeto
```
npm init
```
- Após baixar e abrir o projeto em sua máquina, digite no terminal o comando:
```
npm start
```
- Copie o link do localhost em sua barra de endereço, e veja o projeto funcionando.
- Sempre que a página é atualizada, ela traz uma nova lista.
---

## Sobre o desafio, e o que eu achei

- O que achei interessante nesse desafio:

1. - Participar deste desafio foi uma ótima maneira de aprimorar minhas habilidades e mostrar o que sou capaz de fazer.
É uma oportunidade de colocar meus conhecimentos em prática e aprender novas técnicas e tecnologias.
Além disso, é uma forma de testar minhas habilidades em situações reais, simular o trabalho em equipe e desenvolver meu portfólio.

2. - É importante testar minhas habilidades e conhecimentos em projetos práticos para entender como eles podem ser aplicados no mundo real.
Isso ajuda a avaliar meu nível de preparação e identificar pontos que precisam ser aprimorados.
E, quem sabe, até mesmo conseguir uma oportunidade de emprego.

3. - O ReactJS é um framework JavaScript muito popular para criação de interfaces de usuário (UI).
Ele é baseado no paradigma de programação declarativa e é amplamente utilizado por desenvolvedores front-end para construir aplicativos web modernos e escaláveis.
O ReactJS oferece muitos recursos, como componentes reutilizáveis, gerenciamento de estado eficiente e renderização do lado do cliente.

4. - Já o Vite é um bundler (empacotador) de módulos JavaScript e TypeScript extremamente rápido e leve para projetos front-end.
Ele é conhecido por ser rápido no carregamento e compilação de código,
o que o torna ideal para desenvolvimento em tempo real e construção de aplicativos web com grande volume de código.

5. - E o TypeScript é uma linguagem de programação que adiciona tipagem estática ao JavaScript, o que ajuda a detectar erros de programação em tempo de compilação e melhora a legibilidade e manutenção do código.
Ele é amplamente utilizado por desenvolvedores de front-end e back-end e é uma opção popular para desenvolvimento em equipe.

6. - Estou me preparando e estudando muito para alcançar meu objetivo de me tornar um programador fullstack.
Além disso, minhas habilidades interpessoais e experiência de trabalho como funcionário público, e lidando com pessoas são importantes para trabalhar efetivamente em equipe.
Também é importante dizer que tenho a mentalidade de aprender continuamente e estar atualizado com as últimas tecnologias e tendências,
como as que usei nesse desafio: ReactJS, Vite e TypeScrip.

## O que eu sei sobre a [Colab.re](https://www.colab.re/)

- A Colab.re é uma empresa brasileira de tecnologia que oferece soluções para gestão pública, com foco em colaboração e engajamento cidadão.
A empresa foi fundada em 2013 e seu principal produto é uma plataforma online que permite aos cidadãos interagirem com as autoridades locais para reportar problemas,
fazer sugestões e avaliar serviços públicos.
- Além disso, a plataforma da Colab.re oferece recursos para as autoridades locais gerenciarem as demandas dos cidadãos, rastrearem o progresso das soluções implementadas e avaliarem o desempenho de suas equipes.
A empresa também oferece treinamentos e consultorias para ajudar as autoridades locais a utilizarem sua plataforma de forma eficiente.
- A Colab.re tem sido reconhecida por sua atuação no setor público e já recebeu prêmios nacionais e internacionais de inovação e empreendedorismo social.
A empresa tem como missão democratizar a gestão pública e torná-la mais transparente e eficiente por meio da tecnologia e da participação cidadã.
