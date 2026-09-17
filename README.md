# 🚀 Funil Gamificado Vue.js 3 — Trilha SENAI Dev (Aulas 01 a 21)

> Aplicação web interativa, minimalista e gamificada desenvolvida para os cursos de **Desenvolvimento de Sistemas / Web Frontend do SENAI**, baseada na playlist de **Vue.js 3.0.8** do canal Ralf Lima.

---

## 🎯 Sobre o Projeto

O objetivo deste projeto é transformar a jornada de aprendizado do framework Vue.js em uma **experiência gamificada em funil**:
- **Avanço Sequencial com Bloqueio Real**: O aluno assiste à aula e só consegue liberar o próximo vídeo após responder corretamente à pergunta técnica de validação.
- **Banco de Dados em JSON (`data/database.json`)**: Estrutura simples e desacoplada contendo todas as 21 aulas, perguntas de múltipla escolha, explicações didáticas, dicas e conquistas.
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
- **HTML5 Semântico** & **CSS3 Moderno** (design minimalista, dark mode e responsivo)
- **Web Audio API** (sons de vitória, erro e fanfarra sintetizados em tempo real)
- **Canvas Confetti** (animação de celebração ao atingir conquistas)
- **JSON nativo** (armazenamento leve e editável da estrutura do curso)
- **LocalStorage API** (salvamento automático do progresso do aluno)

---

## 📂 Estrutura de Arquivos

```text
playlists/
├── data/
│   ├── database.json        # Banco de dados com as 21 aulas e perguntas
│   └── database.fallback.js # Fallback de execução direta sem servidor HTTP
├── css/
│   └── style.css            # Estilos minimalistas e responsivos (SENAI Dev)
├── js/
│   └── app.js               # Aplicação reativa Vue 3 e lógica do funil
├── index.html               # Página principal do sistema
├── .gitignore               # Arquivos ignorados pelo Git
└── README.md                # Documentação completa do projeto
```

---

## 💻 Como Executar o Projeto

### Opção 1: Via XAMPP (Recomendado)
1. Coloque a pasta do projeto em seu diretório de projetos do XAMPP:
   ```text
   C:\xampp\htdocs\30porti\playlists\ (ou E:\xampp\htdocs\30porti\playlists\)
   ```
2. Inicie o módulo **Apache** no painel de controle do XAMPP.
3. Abra no navegador:
   ```
   http://localhost/30porti/playlists/
   ```

### Opção 2: Via VS Code Live Server
1. Abra a pasta no VS Code.
2. Clique com botão direito em `index.html` e selecione **Open with Live Server**.

### Opção 3: Direto no Navegador (Offline)
- Basta dar duplo clique no arquivo `index.html` (o arquivo `data/database.fallback.js` garante a execução sem bloqueio de CORS local).

---

## 📤 Como Subir no GitHub

Para publicar o projeto em seu repositório no GitHub, siga os comandos abaixo no terminal dentro da pasta do projeto:

```bash
# 1. Inicialize o repositório Git
git init

# 2. Adicione todos os arquivos
git add .

# 3. Crie o primeiro commit
git commit -m "feat: funil gamificado de vue.js 3 (aulas 01 a 21) para o curso dev senai"

# 4. Defina a branch principal como main
git branch -M main

# 5. Adicione o seu repositório remoto do GitHub (substitua com a sua URL)
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

# 6. Envie os arquivos para o GitHub
git push -u origin main
```

> **Dica**: Você pode ativar o **GitHub Pages** nas configurações do repositório (`Settings > Pages > Branch: main`) para ter o projeto rodando online gratuitamente!

---

## 👨‍🏫 Créditos e Referências

- Conteúdo original das aulas: **[Ralf Lima - Treinamento Vue.js 3](https://www.youtube.com/watch?v=K8zIkkq8VbE&list=PLWXw8Gu52TRL3sY3esdsH2PxYiRdXwfvX)**
- Projeto elaborado para fins didáticos na formação **SENAI Dev**.
