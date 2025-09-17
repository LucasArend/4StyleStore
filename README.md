# 4StyleStore

Uma mini loja desenvolvida em **React** para demonstrar **4 abordagens diferentes de estilização**:  
- CSS Global  
- CSS Modules  
- TailwindCSS  
- Styled Components  

Cada versão conta com **tema Light/Dark** implementado de forma customizada, permitindo comparar diferentes estilos e estratégias de UI/UX.

---

## 🔍 Sobre

Este projeto foi criado com o objetivo de **comparar técnicas de estilização em React** dentro de um mesmo contexto.  
A aplicação simula uma pequena loja online, com páginas de produtos e promoções, mas cada estilo possui:  

- Sua **Navbar própria**  
- Seus **ProductCards**  
- **Tema Light/Dark** com cores diferentes para cada abordagem  
- **Skeleton loading** exibido durante a troca de páginas  

---

## 🛠 Tecnologias usadas

- React  
- React Router DOM — roteamento entre estilos e páginas  
- Vite — bundler / dev server  
- TailwindCSS — versão utilitária  
- CSS Global  
- CSS Modules  
- Styled Components  
- React Icons — ícones para Navbar e UI  

---

## 📁 Estrutura do Projeto

```
/
├── src/
│   ├── 01-css-global/         ← versão com CSS Global
│   ├── 02-css-modules/        ← versão com CSS Modules
│   ├── 03-tailwind/           ← versão com TailwindCSS
│   ├── 04-styled-components/  ← versão com Styled Components
│   ├── assets
│   ├── context
│   ├── global
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── App.jsx                    ← rotas principais
├── main.jsx                   ← ponto de entrada
├── package.json
├── README.md
└── index.html
```

Cada pasta de estilo contém:  

- `Navbar` personalizada  
- `ProductCard` com estilização local   
- Suporte a **Light/Dark mode**  

---

## 🚀 Como rodar localmente

```bash
# Clona o repositório
git clone https://github.com/LucasArend/4StyleStore.git

cd 4StyleStore

# Instala dependências
npm install

# Roda em modo de desenvolvimento
npm run dev
```

Depois acesse [http://localhost:3000](http://localhost:3000) (ou a porta que o Vite indicar).

---

## 🔄 Rotas Principais

As rotas do projeto são baseadas no estilo selecionado:  

| Estilo             | Caminho base | Exemplo de navegação |
|--------------------|--------------|-----------------------|
| TailwindCSS        | `/`          | `/` → Loja Tailwind |
| CSS Global         | `/global`    | `/global` → Loja CSS Global |
| CSS Modules        | `/modules`   | `/modules` → Loja CSS Modules |
| Styled Components  | `/styled`    | `/styled` → Loja Styled |

Durante a troca de rotas, um **skeleton loader** é exibido para melhorar a experiência do usuário.

---

## 🎨 Paleta de Cores por Estilo

Cada versão possui uma paleta personalizada para **Light/Dark Mode**:

| Estilo              | Tema Light                   | Tema Dark                      |
|---------------------|------------------------------|--------------------------------|
| TailwindCSS         | Índigo (padrão TW)           | Cinza                          |
| CSS Global          | Pale cyan                    | Violeta / Mellow Orange        |
| CSS Modules         | Sea Green                    | Dark shadow red                |
| Styled Components   | Dark moderate orange         | Earthy brown                   |

---

## ✅ Possíveis Melhorias Futuras

- Adicionar persistência do tema (Light/Dark) no localStorage  
- Adicionar testes unitários (React Testing Library)  
- Criar documentação comparativa mais detalhada sobre cada técnica  

---

## 📄 Licença

[MIT](LICENSE) — sinta-se livre para usar, modificar e distribuir.

---

👨‍💻 Desenvolvido por [Lucas Arend](https://github.com/LucasArend)
