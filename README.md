# Projeto de Aula: React com Vite

Este projeto utiliza React, TypeScript, e Vite como base para desenvolvimento com Hot Module Replacement (HMR) e ESLint para garantir boas práticas de código.

## Requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16.0 ou superior)
- [npm](https://www.npmjs.com/) (geralmente incluído com o Node.js)

## Passos para Inicializar

1. **Clonar o repositório**:

   Execute o seguinte comando no seu terminal para clonar o repositório:

   ```bash
   git clone https://github.com/nullbyte-s/aula-react
   ```

2. **Instalar as dependências**:

   Acesse o diretório do projeto e instale as dependências com o comando:

   ```bash
   npm install
   ```

3. **Rodar o servidor de desenvolvimento**:

   Para iniciar o servidor de desenvolvimento, utilize o comando:

   ```bash
   npm run dev
   ```

4. **Acessar a aplicação**:

   Após rodar o servidor, a aplicação estará disponível em:

   ```
   http://localhost:5173
   ```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com HMR.
- `npm run build`: Cria uma versão otimizada para produção.
- `npm run lint`: Executa o ESLint para verificar erros de estilo no código.

## Estrutura do Projeto

- `src/`: Contém os arquivos principais do React.
- `public/`: Arquivos públicos e estáticos, como imagens.

## Customização do ESLint

Para aplicações de produção, considere expandir as regras do ESLint conforme necessário. Consulte o arquivo `eslint.config.js` para mais detalhes.

---

Este projeto foi gerado com [Vite](https://vitejs.dev/) para um desenvolvimento rápido e eficiente.