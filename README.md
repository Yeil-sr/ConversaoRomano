# ConversaoRomano

<p>Este projeto é uma aplicação web que converte números entre os formatos decimal e romano e realiza operações matemáticas (adição, subtração, multiplicação e divisão) utilizando números decimais e romanos. A aplicação é construída em JavaScript para o front-end e utiliza Node.js e Express.js para o back-end.</p>

<h2>Layout</h2>

<div>
  <img src="https://github.com/user-attachments/assets/1f7aa9fa-2752-4037-b1e6-65a36daf6249" alt="pagina_principal">
</div>

## Estrutura do Projeto

<div>
  <ul>
     <li><b>index.html:</b> Página principal da aplicação onde o usuário interage com o formulário. </li>
     <li><b>enviarDados.js:</b> Script responsável por enviar os dados do formulário para o back-end e exibir os resultados.</li>
     <li><b>numerosRomanos.js:</b> Classe que contém a lógica de conversão e operações matemáticas com números romanos e decimais.</li>
     <li><b>server.js:</b> Arquivo principal do servidor, que processa as requisições do front-end e envia as respostas.</li>
  </ul>
</div>

### 1. Arquivo index.html
<div>
  <p>Este é o arquivo de interface do usuário (UI) da aplicação. Ele contém um formulário que permite ao usuário:</p>
  <ul>
     <li>Inserir dois números (em formato decimal ou romano).</li>
     <li>Selecionar uma operação (adição, subtração, multiplicação, divisão, conversão para romano ou conversão para decimal).</li>
     <li>Submeter o formulário para ver o resultado da operação.</li>
  </ul>
</div>

### 2. Arquivo enviarDados.js
<div>
  <p>Este arquivo contém o código JavaScript que lida com a submissão do formulário. Ele:</p>
  <ul>
     <li>Intercepta o evento de submissão do formulário (event.preventDefault()).</li>
     <li>Coleta os valores dos inputs (number1, number2, operation).</li>
     <li>Envia os dados ao servidor via requisição POST para a rota /processar.</li>
    <li>Recebe e exibe o resultado retornado pelo servidor</li>
  </ul>
</div>

### 3. Arquivo numerosRomanos.js
<div>
  <p>Este arquivo define a classe NumerosRomanos, que contém a lógica para converter números entre decimal e romano, bem como para realizar operações matemáticas.</p>
  <ul>
     <li><b>converterParaRomano:</b> Converte um número decimal para o formato romano.</li>
     <li><b>converterParaInteiro::</b> Converte um número romano para o formato decimal.</li>
     <li><b>processarEntrada:</b> Verifica se a entrada é romana ou decimal e a converte adequadamente.</li>
     <li><b> adicionar, subtrair, multiplicar, dividir:</b> Realizam operações matemáticas entre dois números, independentemente do formato.</li>
  </ul>
</div>

### 4. Arquivo server.js
<div>
  <p>Este é o arquivo principal do servidor Node.js, utilizando o framework Express. Ele:</p>
  <ul>
     <li><b>Serve arquivos estáticos </b>como imagens e estilos.</li>
     <li><b>Define a rota principal (/) </b> que carrega a página index.html.</li>
     <li><b>Define a rota /processar</b> que recebe os dados do front-end, realiza as operações necessárias utilizando a classe NumerosRomanos e retorna o resultado.</li>
  </ul>
</div>

### Processo de Instalação
<p>Siga as instruções abaixo para configurar e rodar o projeto localmente:</p>
<di>
  <ul>
 <li>Clone o repositório para a sua máquina local:</li>

```bash
git clone https://github.com/Yeil-sr/ConversaoRomano.git
```
 <li>Navegue até o diretório do projeto:</li>

```bash
cd conversor-numeros-romanos

```
 <li>Instale as dependências:</li>

```bash
npm install

```
 <li>Inicie o servidor:</li>

```bash
node server.js


```
<li>Abra o navegador e acesse http://localhost:8080 para usar a aplicação.</li>


  </ul>
</di>
