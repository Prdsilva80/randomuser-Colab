# Projeto randomuser-Colab

## Descrição do desafio proposto pela empresa [Colab.re](https://www.colab.re/)

- Esse teste, ele tem um único objetivo, resolver o seguinte problema: “Listar os usuários e seus detalhes em uma interface web”
- Não foi solicitado o uso de nenhuma tecnologia específica. Liberdade para personalizar o projeto
- Foi feita apenas a indicação de qual API a ser utilizada [randomuser.me](https://randomuser.me/)

## Tecnologias 

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vscode,nodejs,vite,react,html,css,git,github" />
  </a>
</p>

## O que o código faz

- O módulo "react" é importado, juntamente com os hooks useState e useEffect.
- O módulo "axios" é importado para realizar uma chamada à API externa.
- O tipo User é definido como um objeto que possui campos como name, gender, location e picture, e cada campo tem seu próprio tipo.
- Foi definido um componente funcional React chamado UserList, que não recebe props externas (React.FC sem genéricos).
- Existe um estado inicial que é criado usando o hook useState, com um array de usuários vazio.
- Foi utilizado o hook useEffect para realizar uma chamada à API externa no momento em que o componente é montado na tela (array de dependências vazio []).
- É feita uma chamada GET para a API externa usando o módulo "axios".
- O resultado da chamada é definido no estado dos usuários usando o setUsers.
- A função de retorno do componente é definida, que renderiza um título "Lista de Usuários" e uma lista de usuários.
- É utilizado o método map para iterar sobre o array de usuários e renderizar um elemento.
- No código é definido um atributo chave para o elemento, que é definido como o índice do elemento no array.
- No código é renderizada a imagem do usuário com a propriedade src definida como o valor do campo thumbnail do objeto picture do usuário.
- No código também são renderizados os campos name, gender, email, adress e location do usuário.
- Por fim, o componente UserList é exportado como padrão para ser usado em outros módulos.

## Como ver o projeto em funcionamento

- Faça um clone do projeto:
```
git clone randomuser-Colab
```
- Após baixar e abrir o projeto em sua máquina, digite no terminal o comando:
```
npm rum dev
```
- Copie o link do localhost em sua barra de endereço, e veja o projeto funcionando.
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
