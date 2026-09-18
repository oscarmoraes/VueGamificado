# 🚀 Funil Gamificado Vue.js 3 — Trilha SENAI Dev (Aulas 01 a 21)

> Aplicação web interativa, minimalista e gamificada desenvolvida para os cursos de **Desenvolvimento de Sistemas / Web Frontend do SENAI**, baseada na playlist de **Vue.js 3.0.8** do canal Ralf Lima.

---

## 🎯 Sobre o Projeto

O objetivo deste projeto é transformar a jornada de aprendizado do framework Vue.js em uma **experiência gamificada em funil**:
- **Avanço Sequencial com Bloqueio Real**: O aluno assiste à aula e só consegue liberar o próximo vídeo após responder corretamente à pergunta técnica de validação.
- **Banco de Dados em JSON (`data/database.json`)**: Estrutura simples e desacoplada contendo todas as 21 aulas, perguntas de múltipla escolha, explicações didáticas, dicas e conquistas.
- **Design Mobile-First com Tailwind CSS**: Interface compacta, responsiva e focada na usabilidade em smartphones e desktops.
- **Barras de Rolagem Estilizadas**: Customização completa eliminando barras nativas cinzas do sistema operacional.
- **Sistema de Gamificação**:
  - ⚡ **Pontos de Experiência (XP)**: Ganho de XP a cada acerto (+100 XP por aula básica e +150 XP no desafio final).
  - 🎖️ **Patentes / Níveis Dev SENAI**: Evolução de *Dev Iniciante* até *Especialista Vue SENAI*.
  - 🏆 **Galeria de Conquistas (Badges)**: 21 medalhas exclusivas desbloqueadas ao longo da trilha.
  - 🎵 **Efeitos Sonoros Nativos**: Síntese de áudio via Web Audio API (sem dependência de arquivos externos).
  - 🎓 **Certificado Final**: Modal de graduação comemorativo com confetes e opção de impressão ao concluir a aula 21.
  - 💾 **Persistência no Navegador**: O progresso (etapas liberadas, XP e conquistas) fica salvo no `localStorage`.

---

## 📚 Grade Curricular do Funil (Aulas 01 ao 21)

| Aula | Título da Aula | Competência Desenvolvida | Recompensa |
|:---:|:---|:---|:---:|
| **01** | Introdução ao Treinamento | Conceitos iniciais e organização de estudos | 🚀 +100 XP |
| **02** | Conhecendo o Framework Vue.js | Reatividade e ecossistema progressivo | ⚡ +100 XP |
| **03** | Criando Projeto Vue.js | Setup com Node.js e gerenciadores | 🛠️ +100 XP |
| **04** | Interpolação de Texto | Sintaxe mustache `{{ }}` | ✨ +100 XP |
| **05** | Trabalhando com Componentes | Single File Components (.vue) | 🧩 +100 XP |
| **06** | Diretiva `v-if` | Renderização condicional no DOM real | ⚖️ +100 XP |
| **07** | Diretivas `v-else-if` e `v-else` | Estruturas de controle encadeadas | 🔀 +100 XP |
| **08** | Diretiva `v-for` | Listas dinâmicas e o papel do `:key` | 📋 +100 XP |
| **09** | Diretiva `v-html` | Injeção de HTML e proteção contra XSS | 🛡️ +100 XP |
| **10** | Diretiva `v-model` | Two-way data binding em formulários | 🔄 +100 XP |
| **11** | Interligações de Classes | Estilos dinâmicos com `v-bind:class` | 🎨 +100 XP |
| **12** | Evento de Clique | Manipulação de eventos com `@click` | 👆 +100 XP |
| **13** | Eventos de Teclado | Modificadores como `@keyup.enter` | ⌨️ +100 XP |
| **14** | Evento de Submissão | Tratamento de formulários com `@submit` | 📬 +100 XP |
| **15** | `PreventDefault` | Modificador `@submit.prevent` em SPAs | 🛑 +100 XP |
| **16** | Lifecycle (Ciclo de Vida) | Hooks de montagem como `onMounted` | 🧬 +100 XP |
| **17** | Props Estáticos | Comunicação pai-filho com strings | 📦 +100 XP |
| **18** | Props Dinâmicos | Vinculação reativa de dados com `:props` | ⚡ +100 XP |
| **19** | Rotas (Vue Router) | Navegação SPA com `<router-view>` | 🧭 +100 XP |
| **20** | Requisições HTTP | Consumo de APIs REST com `fetch` nativo | 🌐 +100 XP |
| **21** | Considerações Finais | Boas práticas de arquitetura e consolidação | 🎓 +150 XP |

---

## 🛠️ Tecnologias Utilizadas

- **[Vue.js 3](https://vuejs.org/)** (Composition API, reatividade e renderização declarativa)
- **[Tailwind CSS](https://tailwindcss.com/)** (Design mobile-first utilitário e responsivo)
- **HTML5 Semântico** & **CSS3 Moderno** (Scrollbars personalizadas e animações)
- **Web Audio API** (Sons sintetizados em tempo real)
- **Canvas Confetti** (Efeitos visuais comemorativos)
- **JSON nativo** (Banco de dados desacoplado)
- **LocalStorage API** (Salvamento automático do progresso)

---

## 📂 Estrutura de Arquivos

```text
VueGamificado/
├── data/
│   ├── database.json        # Banco de dados com as 21 aulas e perguntas
│   └── database.fallback.js # Fallback de execução direta sem servidor HTTP
├── css/
│   └── style.css            # Tratamento avançado de scrollbars e animações
├── js/
│   └── app.js               # Aplicação reativa Vue 3 e lógica do funil
├── index.html               # Interface única (Mobile-First)
├── .gitignore               # Arquivos ignorados pelo Git
└── README.md                # Documentação completa do projeto
```

---

## 💻 Como Executar o Projeto

### Opção 1: Direto no Navegador (Sem Instalação)
Basta abrir o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, etc.). O projeto conta com fallback local integrado.

### Opção 2: Via VS Code (Live Server)
1. Abra a pasta do projeto no VS Code.
2. Com a extensão **Live Server**, clique com o botão direito sobre o arquivo `index.html` e selecione **Open with Live Server**.

### Opção 3: Via Servidor Web Local
Você pode servir a pasta com qualquer servidor local:
- **Node.js**:
  ```bash
  npx serve .
  ```
- **Python**:
  ```bash
  python -m http.server 8000
  ```
- **Apache / Nginx / XAMPP**:
  Copie a pasta para o diretório raiz do seu servidor web (ex: pasta `htdocs` ou `www`) e acesse via `http://localhost/sua-pasta/`.

---

## 🌐 Publicação no GitHub Pages

Para publicar este projeto online gratuitamente:
1. Acesse seu repositório no GitHub.
2. Vá em **Settings** > **Pages**.
3. Na seção **Build and deployment**, selecione a branch `main` e a pasta `/ (root)`.
4. Clique em **Save**. Em alguns minutos a página estará online!

---

## 👨‍🏫 Créditos e Referências

- Conteúdo das aulas: **[Ralf Lima - Treinamento Vue.js 3](https://www.youtube.com/watch?v=K8zIkkq8VbE&list=PLWXw8Gu52TRL3sY3esdsH2PxYiRdXwfvX)**
- Projeto elaborado para fins didáticos na formação **SENAI Dev**.
