window.FALLBACK_DATABASE = {
  "course": {
    "title": "Trilha Vue.js 3.0.8 - Funil Gamificado Dev SENAI",
    "institution": "SENAI - Serviço Nacional de Aprendizagem Industrial",
    "program": "Desenvolvimento de Sistemas & Web Frontend",
    "instructor": "Baseado no treinamento oficial Ralf Lima",
    "description": "Trilha sequencial com 21 etapas gamificadas. Cada aula possui um vídeo prático e um desafio técnico. Desbloqueie todas as etapas, ganhe XP e conquiste sua certificação de conclusão!",
    "totalLessons": 21,
    "totalXp": 2150
  },
  "ranks": [
    {
      "title": "Dev Iniciante",
      "minXp": 0,
      "badge": "🌱"
    },
    {
      "title": "Dev Aprendiz",
      "minXp": 400,
      "badge": "💻"
    },
    {
      "title": "Dev Júnior I",
      "minXp": 900,
      "badge": "⚡"
    },
    {
      "title": "Dev Júnior II",
      "minXp": 1400,
      "badge": "🚀"
    },
    {
      "title": "Dev Pleno Frontend",
      "minXp": 1800,
      "badge": "🔥"
    },
    {
      "title": "Especialista Vue SENAI",
      "minXp": 2100,
      "badge": "🏆"
    }
  ],
  "lessons": [
    {
      "id": 1,
      "index": 1,
      "title": "01 - Introdução ao Treinamento",
      "category": "Fundamentos",
      "videoId": "V14jTusJ9os",
      "duration": "4:15",
      "summary": "Apresentação inicial do curso de Vue.js 3, objetivos da formação, estrutura dos módulos e configuração básica do ambiente de desenvolvimento.",
      "competency": "Compreender o papel do Vue.js no ecossistema moderno de desenvolvimento frontend e como se organizar nos estudos.",
      "xp": 100,
      "badge": {
        "name": "Primeiro Passo Dev",
        "icon": "🚀",
        "description": "Iniciou a jornada no treinamento Vue.js 3 SENAI!"
      },
      "question": {
        "text": "Qual é a principal proposta do Vue.js no desenvolvimento web moderno?",
        "options": [
          "Ser um sistema gerenciador de banco de dados relacional para servidores Linux.",
          "Ser um framework JavaScript progressivo focado na construção de interfaces de usuário reativas e componentizadas.",
          "Substituir totalmente linguagens de backend como PHP, Java e Python na camada de servidor.",
          "Funcionar exclusivamente como uma biblioteca de estilos CSS para estilização de botões e tabelas."
        ],
        "correctIndex": 1,
        "tip": "Pense no conceito de 'framework progressivo' para a camada de visualização (View).",
        "explanation": "O Vue.js é definido como um framework JavaScript progressivo projetado para construir interfaces de usuário (UIs) de forma reativa, escalável e baseada em componentes."
      }
    },
    {
      "id": 2,
      "index": 2,
      "title": "02 - Conhecendo o Framework Vue.js",
      "category": "Fundamentos",
      "videoId": "K8zIkkq8VbE",
      "duration": "5:30",
      "summary": "Visão geral sobre o que é o Vue.js, quem o criou (Evan You), vantagens em relação a outros frameworks e o conceito de reatividade e Virtual DOM.",
      "competency": "Identificar os diferenciais do Vue.js, como sua curva de aprendizado suave e arquitetura reativa.",
      "xp": 100,
      "badge": {
        "name": "Explorador Vue",
        "icon": "⚡",
        "description": "Dominou os conceitos fundamentais do Vue.js!"
      },
      "question": {
        "text": "O que torna o Vue.js 'progressivo' em comparação com outros frameworks mais opinativos?",
        "options": [
          "Ele só pode ser executado se compilado através de servidores proprietários em nuvem.",
          "Ele obriga o desenvolvedor a usar TypeScript e Redux desde o primeiro dia de projeto.",
          "Ele pode ser adotado gradualmente, desde uma simples inclusão via tag <script> até SPAs complexas com ferramentas avançadas.",
          "Ele não possui suporte a componentes nem a reatividade de dados."
        ],
        "correctIndex": 2,
        "tip": "Lembre-se da flexibilidade de usar o Vue tanto em páginas existentes quanto em projetos de grande porte.",
        "explanation": "O termo 'progressivo' significa que o Vue é adaptável: você pode utilizá-lo como uma simples biblioteca via CDN em uma página HTML existente ou escalá-lo para uma aplicação de página única (SPA) robusta."
      }
    },
    {
      "id": 3,
      "index": 3,
      "title": "03 - Criando Projeto Vue.js",
      "category": "Fundamentos",
      "videoId": "KpHwezVCroA",
      "duration": "8:20",
      "summary": "Instalação do Node.js, uso do CLI/Vite para inicialização de um projeto Vue.js 3 e explicação da estrutura de pastas gerada.",
      "competency": "Inicializar e estruturar projetos Vue.js profissionais utilizando ferramentas de automação e linha de comando.",
      "xp": 100,
      "badge": {
        "name": "Setup Master",
        "icon": "🛠️",
        "description": "Criou e estruturou um projeto Vue.js do zero!"
      },
      "question": {
        "text": "Qual ferramenta do ecossistema JavaScript é pré-requisito fundamental instalada no computador para criar projetos Vue via CLI ou Vite?",
        "options": [
          "Node.js (acompanhado do gerenciador de pacotes npm/yarn/pnpm)",
          "Apache Tomcat Server com JDK Java 21",
          "Docker Desktop com Kubernetes cluster ativo",
          "Microsoft SQL Server Management Studio"
        ],
        "correctIndex": 0,
        "tip": "É o ambiente de execução JavaScript no servidor utilizado pelos empacotadores modernos.",
        "explanation": "O Node.js fornece o ambiente e o npm/yarn para baixar as dependências, executar servidores locais de desenvolvimento e compilar o projeto Vue."
      }
    },
    {
      "id": 4,
      "index": 4,
      "title": "04 - Interpolação de Texto",
      "category": "Sintaxe Básica",
      "videoId": "KXqazYQ05Pc",
      "duration": "6:10",
      "summary": "Utilização da sintaxe 'mustache' {{ }} para exibir variáveis reativas no template HTML e interpolação de expressões simples.",
      "competency": "Aplicar a interpolação de texto para vincular dinamicamente dados do script na interface.",
      "xp": 100,
      "badge": {
        "name": "Mustache Master",
        "icon": "✨",
        "description": "Dominou a interpolação de texto {{ }} no template!"
      },
      "question": {
        "text": "No Vue.js, qual sintaxe padrão de interpolação é utilizada para exibir o valor de uma propriedade reativa diretamente no template HTML?",
        "options": [
          "<% variavel %>",
          "[[ variavel ]]",
          "{{ variavel }}",
          "${ variavel }"
        ],
        "correctIndex": 2,
        "tip": "A famosa sintaxe dos 'bigodes' duplos (mustache syntax).",
        "explanation": "A sintaxe de chaves duplas {{ expressao }} é a forma mais básica de vinculação de dados (data binding) para renderização de texto no Vue.js."
      }
    },
    {
      "id": 5,
      "index": 5,
      "title": "05 - Trabalhando com Componentes",
      "category": "Componentes",
      "videoId": "ugN7t7Pm0e8",
      "duration": "9:45",
      "summary": "Conceito de Single File Components (.vue), divisão da aplicação em template, script e style, e reutilização de componentes.",
      "competency": "Arquitetar interfaces modulares através da criação e importação de componentes Vue independentes.",
      "xp": 100,
      "badge": {
        "name": "Arquiteto de Telas",
        "icon": "🧩",
        "description": "Modularizou e reutilizou componentes Single File!"
      },
      "question": {
        "text": "Quais são as três seções fundamentais que compõem a estrutura de um arquivo de componente Single File (.vue)?",
        "options": [
          "<head>, <body> e <footer>",
          "<template>, <script> e <style>",
          "<model>, <view> e <controller>",
          "<xml>, <javascript> e <css>"
        ],
        "correctIndex": 1,
        "tip": "Visual, lógica e estilos encapsulados no mesmo arquivo.",
        "explanation": "Um arquivo .vue (SFC - Single File Component) organiza seu código em três blocos bem definidos: <template> (estrutura HTML), <script> (lógica JavaScript) e <style> (estilização CSS)."
      }
    },
    {
      "id": 6,
      "index": 6,
      "title": "06 - Diretiva v-if",
      "category": "Diretivas",
      "videoId": "E6m2R2w_OBw",
      "duration": "7:00",
      "summary": "Introdução à diretiva condicional v-if, renderização dinâmica de elementos e diferença de comportamento em relação ao DOM real.",
      "competency": "Controlar a existência de elementos na árvore DOM com base em condições booleanas reativas.",
      "xp": 100,
      "badge": {
        "name": "Condicional Pro",
        "icon": "⚖️",
        "description": "Dominou a renderização condicional com v-if!"
      },
      "question": {
        "text": "O que acontece fisicamente no DOM da página quando a expressão atribuída a uma diretiva `v-if` é avaliada como falsa (false)?",
        "options": [
          "O elemento continua no DOM, porém com o estilo CSS `display: none` aplicado.",
          "O elemento e seus filhos são completamente destruídos e removidos da árvore do DOM.",
          "O elemento é convertido automaticamente em um comentário HTML e mantido na tela.",
          "A página inteira para de responder e entra em modo de depuração."
        ],
        "correctIndex": 1,
        "tip": "Diferente do v-show, o v-if possui custo de montagem/desmontagem real no DOM.",
        "explanation": "A diretiva `v-if` é uma renderização condicional 'real': os elementos só são criados e inseridos no DOM se a condição for verdadeira; caso seja falsa, eles são desmontados e removidos."
      }
    },
    {
      "id": 7,
      "index": 7,
      "title": "07 - Diretivas v-else-if e v-else",
      "category": "Diretivas",
      "videoId": "qVfmm_JrI78",
      "duration": "6:40",
      "summary": "Encadeamento de estruturas condicionais com v-else-if e v-else para construir lógicas de exibição com múltiplos cenários.",
      "competency": "Construir fluxos condicionais ramificados de forma limpa e sem redundâncias no template.",
      "xp": 100,
      "badge": {
        "name": "Fluxo de Decisão",
        "icon": "🔀",
        "description": "Construiu múltiplos cenários com v-else-if e v-else!"
      },
      "question": {
        "text": "Qual é a regra sintática obrigatória para utilizar as diretivas `v-else-if` ou `v-else` em relação ao elemento com `v-if`?",
        "options": [
          "O elemento com `v-else` deve ser declarado em um arquivo de script externo.",
          "Deve haver pelo menos uma tag <div> intermediária sem diretivas entre eles.",
          "O elemento com `v-else-if` ou `v-else` deve estar imediatamente após o elemento com `v-if` ou `v-else-if` irmão.",
          "Elas só funcionam dentro de loops `v-for`."
        ],
        "correctIndex": 2,
        "tip": "Elas precisam ser irmãs contíguas no template para que o compilador entenda o encadeamento.",
        "explanation": "Para que o compilador do Vue reconheça a cadeia condicional, o elemento com `v-else` ou `v-else-if` deve vir imediatamente após o elemento correspondente com `v-if` ou `v-else-if`."
      }
    },
    {
      "id": 8,
      "index": 8,
      "title": "08 - Diretiva v-for",
      "category": "Diretivas",
      "videoId": "r7UxYUx17oc",
      "duration": "8:50",
      "summary": "Renderização de listas de dados com v-for, sintaxe de iteração de arrays e objetos, e importância do atributo :key para otimização do Virtual DOM.",
      "competency": "Renderizar coleções de dados dinâmicas mantendo a eficiência do algoritmo de diffing do Vue.",
      "xp": 100,
      "badge": {
        "name": "Mestre das Listas",
        "icon": "📋",
        "description": "Iterou coleções com maestria usando v-for e :key!"
      },
      "question": {
        "text": "Por que é altamente recomendado utilizar o atributo `:key` com um identificador único ao iterar elementos com `v-for`?",
        "options": [
          "Porque o CSS do navegador não estiliza listas sem o atributo key.",
          "Para que o Virtual DOM do Vue possa identificar unicamente cada nó e rastrear mudanças eficientemente no diffing.",
          "Porque sem a chave o Vue não consegue ler o tamanho do array JavaScript.",
          "Para criptografar as informações do array contra acesso não autorizado."
        ],
        "correctIndex": 1,
        "tip": "Pense no desempenho do Virtual DOM ao adicionar, remover ou reordenar itens.",
        "explanation": "A propriedade `:key` fornece uma chave única estável para cada item, permitindo que o motor do Virtual DOM reutilize e reordene nós de forma precisa e com alta performance."
      }
    },
    {
      "id": 9,
      "index": 9,
      "title": "09 - Diretiva v-html",
      "category": "Diretivas",
      "videoId": "WW6PPWnQl3Y",
      "duration": "5:50",
      "summary": "Uso da diretiva v-html para renderizar código HTML bruto contido em variáveis e conscientização sobre os riscos de ataques XSS (Cross-Site Scripting).",
      "competency": "Injetar conteúdo HTML formatado de forma consciente e com práticas de sanitização contra vulnerabilidades de segurança.",
      "xp": 100,
      "badge": {
        "name": "Guardião da Segurança",
        "icon": "🛡️",
        "description": "Entendeu o uso do v-html e preveniu ataques XSS!"
      },
      "question": {
        "text": "Qual o principal risco de segurança associado ao uso inadequado da diretiva `v-html` com dados fornecidos por usuários?",
        "options": [
          "Sobrecarga de memória na placa de vídeo do usuário.",
          "Injeção de scripts maliciosos conhecida como XSS (Cross-Site Scripting).",
          "Corrupção de tabelas no banco de dados SQLite local.",
          "Bloqueio permanente de portas HTTP do roteador do cliente."
        ],
        "correctIndex": 1,
        "tip": "Quando HTML não sanitizado é interpretado, tags <script> ou eventos onload podem ser executados.",
        "explanation": "Renderizar HTML puro recebido de usuários sem sanitização pode permitir ataques XSS (Cross-Site Scripting), onde agentes mal-intencionados injetam scripts no navegador de outras pessoas."
      }
    },
    {
      "id": 10,
      "index": 10,
      "title": "10 - Diretiva v-model",
      "category": "Diretivas",
      "videoId": "5VXZPQBoBaI",
      "duration": "8:10",
      "summary": "Implementação de two-way data binding (vinculação bidirecional de dados) entre inputs de formulário e o estado da aplicação.",
      "competency": "Sincronizar entradas do usuário em campos de texto, checkboxes, selects e radios de forma automática com o modelo de dados.",
      "xp": 100,
      "badge": {
        "name": "Mestre dos Inputs",
        "icon": "🔄",
        "description": "Dominou o Two-Way Data Binding com v-model!"
      },
      "question": {
        "text": "Qual conceito a diretiva `v-model` simplifica ao conectar campos de formulário (como <input>) às propriedades de dados do Vue?",
        "options": [
          "Two-Way Data Binding (sincronização bidirecional entre o valor do campo e a variável de estado).",
          "One-Way Encryption (criptografia unilateral de senhas).",
          "Multi-Threading Execution (criação de threads paralelas no processador).",
          "Reverse Proxy Routing (roteamento de proxy reverso no servidor web)."
        ],
        "correctIndex": 0,
        "tip": "Quando o usuário digita, o dado atualiza; quando o dado muda, o campo atualiza.",
        "explanation": "O `v-model` combina a vinculação de valor (`:value`) com a escuta do evento de atualização (`@input` ou `@change`), estabelecendo o 'Two-Way Data Binding' de forma prática."
      }
    },
    {
      "id": 11,
      "index": 11,
      "title": "11 - Interligações de Classes",
      "category": "Estilização",
      "videoId": "RTTknNJGebU",
      "duration": "7:40",
      "summary": "Vinculação dinâmica de classes CSS utilizando v-bind:class com objetos e arrays para alterar o visual conforme o estado reativo.",
      "competency": "Modificar dinamicamente a aparência e classes CSS de elementos com base nas regras de negócio da aplicação.",
      "xp": 100,
      "badge": {
        "name": "Estilo Reativo",
        "icon": "🎨",
        "description": "Aplicou classes CSS condicionais com v-bind:class!"
      },
      "question": {
        "text": "Ao utilizar a sintaxe de objeto com `:class=\"{ 'alerta-ativo': isAtivo }\"`, quando a classe CSS 'alerta-ativo' será aplicada ao elemento?",
        "options": [
          "Apenas se a variável `isAtivo` for uma string contendo 'css'.",
          "Sempre que o valor da variável `isAtivo` for avaliado como verdadeiro (truthy).",
          "Nunca, pois classes CSS com hífen não são aceitas no Vue.",
          "Apenas no momento em que o usuário clica com o botão direito do mouse."
        ],
        "correctIndex": 1,
        "tip": "A chave é o nome da classe e o valor é a condição booleana.",
        "explanation": "Na sintaxe de objeto para `:class`, a presença da classe depende do valor booleano da propriedade: se for `true` (ou truthy), a classe é adicionada; se for `false`, é removida."
      }
    },
    {
      "id": 12,
      "index": 12,
      "title": "12 - Evento de Clique",
      "category": "Eventos",
      "videoId": "v6zaz8VIg7M",
      "duration": "6:30",
      "summary": "Captura e tratamento de cliques do usuário utilizando v-on:click ou o atalho @click para acionar métodos e funções no componente.",
      "competency": "Manipular interações de clique do usuário e disparar ações que alteram o estado da interface.",
      "xp": 100,
      "badge": {
        "name": "Interatividade Total",
        "icon": "👆",
        "description": "Conectou ações de clique com o atalho @click!"
      },
      "question": {
        "text": "Qual é a forma abreviada e mais comum no Vue.js para a diretiva de escuta de eventos de clique `v-on:click`?",
        "options": [
          "#click=\"executar()\"",
          ":click=\"executar()\"",
          "@click=\"executar()\"",
          "&click=\"executar()\""
        ],
        "correctIndex": 2,
        "tip": "O caractere especial utilizado como atalho para o v-on é a arroba.",
        "explanation": "O caractere `@` é a sintaxe abreviada padrão do Vue.js para a diretiva `v-on:`. Portanto, `@click` é idêntico a `v-on:click`."
      }
    },
    {
      "id": 13,
      "index": 13,
      "title": "13 - Eventos de Teclado",
      "category": "Eventos",
      "videoId": "cfGpD-j9cUM",
      "duration": "7:15",
      "summary": "Escuta de eventos de teclado com @keyup e @keydown e uso de modificadores de tecla específicos como @keyup.enter.",
      "competency": "Aprimorar a experiência do usuário com atalhos de teclado e captura inteligente de teclas como Enter e Escape.",
      "xp": 100,
      "badge": {
        "name": "Mestre do Teclado",
        "icon": "⌨️",
        "description": "Utilizou modificadores como @keyup.enter com sucesso!"
      },
      "question": {
        "text": "Como podemos disparar uma função `pesquisar()` apenas quando o usuário soltar especificamente a tecla Enter dentro de um campo de texto no Vue?",
        "options": [
          "<input @keydown.space=\"pesquisar\">",
          "<input @keyup.enter=\"pesquisar\">",
          "<input v-bind:key-enter=\"pesquisar\">",
          "<input @keypress.tab=\"pesquisar\">"
        ],
        "correctIndex": 1,
        "tip": "O modificador de evento de tecla '.enter' é adicionado diretamente após o evento keyup.",
        "explanation": "O modificador `@keyup.enter` permite escutar exclusivamente o evento de soltar a tecla Enter, evitando checagens manuais do código da tecla (`event.key === 'Enter'`)."
      }
    },
    {
      "id": 14,
      "index": 14,
      "title": "14 - Evento de Submissão",
      "category": "Eventos",
      "videoId": "TcTW18faiuk",
      "duration": "6:50",
      "summary": "Tratamento de eventos de envio de formulários (@submit), validações preliminares de dados e captura dos dados submetidos.",
      "competency": "Gerenciar o ciclo de envio de formulários e processar entradas de dados no frontend.",
      "xp": 100,
      "badge": {
        "name": "Form Handler",
        "icon": "📬",
        "description": "Manipulou a submissão de formulários no Vue!"
      },
      "question": {
        "text": "Em qual elemento HTML do template costumamos colocar a escuta do evento `@submit` para gerenciar o envio de dados do formulário?",
        "options": [
          "Diretamente na tag `<form>` que envolve os campos e botões.",
          "Na tag `<head>` da página web.",
          "Em qualquer elemento `<span>` aleatório no rodapé.",
          "Exclusivamente dentro do arquivo vite.config.js."
        ],
        "correctIndex": 0,
        "tip": "O formulário é o elemento nativo responsável pelo evento submit ao clicar no botão de tipo submit.",
        "explanation": "O evento nativo de submissão pertence à tag `<form>`. Escutar `@submit` no formulário garante que o evento seja capturado tanto por clique em botões submit quanto pelo pressionamento de Enter."
      }
    },
    {
      "id": 15,
      "index": 15,
      "title": "15 - PreventDefault",
      "category": "Eventos",
      "videoId": "HNeAux4mLUQ",
      "duration": "7:00",
      "summary": "Compreensão do comportamento padrão do navegador ao submeter formulários (recarregar página) e aplicação do modificador @submit.prevent.",
      "competency": "Garantir o comportamento de Single Page Application impedindo recarregamentos indesejados da página.",
      "xp": 100,
      "badge": {
        "name": "SPA Specialist",
        "icon": "🛑",
        "description": "Evitou recarregamento com o modificador .prevent!"
      },
      "question": {
        "text": "Qual é a forma mais idiomática no Vue.js para evitar que o formulário recarregue a página inteira ao ser submetido?",
        "options": [
          "<form @submit.prevent=\"salvar\">",
          "<form action=\"javascript:void(0)\">",
          "<form @submit=\"window.stop()\">",
          "<form v-reload=\"false\">"
        ],
        "correctIndex": 0,
        "tip": "O Vue possui modificadores de evento embutidos, e '.prevent' chama automaticamente o event.preventDefault().",
        "explanation": "O modificador `@submit.prevent` instrui o Vue a chamar automaticamente `event.preventDefault()`, mantendo o fluxo na mesma página (essencial para SPAs)."
      }
    },
    {
      "id": 16,
      "index": 16,
      "title": "16 - Lifecycle (Ciclo de Vida)",
      "category": "Ciclo de Vida",
      "videoId": "h6bTXP6ehxw",
      "duration": "10:15",
      "summary": "Entendimento das fases de criação, montagem, atualização e destruição de um componente Vue, com ênfase no hook onMounted/mounted.",
      "competency": "Executar rotinas assíncronas e inicializações no momento correto do ciclo de vida do componente.",
      "xp": 100,
      "badge": {
        "name": "Ciclo de Vida Pro",
        "icon": "🧬",
        "description": "Dominou os hooks de ciclo de vida do Vue.js!"
      },
      "question": {
        "text": "Qual hook de ciclo de vida é o local mais recomendado para realizar requisições ou interagir com o DOM assim que o componente estiver inserido na tela?",
        "options": [
          "onBeforeCreate",
          "onMounted (ou mounted)",
          "onDestroyed",
          "onUnmounted"
        ],
        "correctIndex": 1,
        "tip": "Pense no momento em que o componente já foi 'montado' e está visível no navegador.",
        "explanation": "O hook `onMounted` (ou `mounted` na Options API) é chamado logo após o componente ter sido renderizado e inserido no DOM real, sendo o momento ideal para buscas de dados iniciais e integrações."
      }
    },
    {
      "id": 17,
      "index": 17,
      "title": "17 - Props Estáticos",
      "category": "Componentes",
      "videoId": "7dgv8LOBDPg",
      "duration": "7:30",
      "summary": "Passagem de propriedades estáticas (strings literais) de um componente pai para um componente filho através do mecanismo de props.",
      "competency": "Estabelecer comunicação unidirecional de dados entre componentes pai e filho.",
      "xp": 100,
      "badge": {
        "name": "Comunicação Component",
        "icon": "📦",
        "description": "Transmitiu parâmetros e dados estáticos via Props!"
      },
      "question": {
        "text": "Como é definida a passagem de uma propriedade estática de texto (por exemplo, `titulo=\"Relatório\"`) para um componente filho?",
        "options": [
          "Utiliza-se o atributo diretamente na tag do filho: `<MeuComponente titulo=\"Relatório\" />`",
          "Escreve-se uma variável global no arquivo index.html.",
          "Executa-se um comando SQL no terminal do projeto.",
          "Envia-se uma mensagem socket para a porta 8080."
        ],
        "correctIndex": 0,
        "tip": "Props estáticas são passadas exatamente como atributos HTML convencionais.",
        "explanation": "Para passar valores estáticos de texto simples, basta definir o atributo com o nome da prop na tag do componente filho sem os dois pontos (`:`), como em `<MeuCard titulo=\"Alunos\" />`."
      }
    },
    {
      "id": 18,
      "index": 18,
      "title": "18 - Props Dinâmicos",
      "category": "Componentes",
      "videoId": "8Qw1xwQ-GmQ",
      "duration": "8:40",
      "summary": "Uso de v-bind (:prop) para passar variáveis, números, booleanos, objetos e arrays reativos de forma dinâmica para componentes filhos.",
      "competency": "Vincular dados complexos e reativos entre componentes pai e filhos mantendo a reatividade intacta.",
      "xp": 100,
      "badge": {
        "name": "Reatividade Avançada",
        "icon": "⚡",
        "description": "Transmitiu dados dinâmicos e reativos via :props!"
      },
      "question": {
        "text": "Por que devemos usar `:idade=\"25\"` (com dois pontos) em vez de `idade=\"25\"` ao passar um número como prop para um componente?",
        "options": [
          "Os dois pontos são opcionais e não fazem diferença de tipo no JavaScript.",
          "Sem os dois pontos, o valor '25' é interpretado como uma string literal; com `:idade`, o Vue avalia como expressão JavaScript (tipo Number).",
          "Com dois pontos o valor é ocultado dos leitores de tela por acessibilidade.",
          "Os dois pontos indicam que o número deve ser formatado em moeda Real brasileiro."
        ],
        "correctIndex": 1,
        "tip": "O ':' é o atalho de v-bind, que faz o valor entre aspas ser interpretado pelo motor JavaScript.",
        "explanation": "O prefixo `:` (atalho de `v-bind`) faz com que o valor entre aspas seja executado como expressão JavaScript, garantindo que tipos como números, booleanos ou variáveis reativas preservem seus tipos nativos."
      }
    },
    {
      "id": 19,
      "index": 19,
      "title": "19 - Rotas (Vue Router)",
      "category": "Ecossistema",
      "videoId": "b09eNpZpD8A",
      "duration": "11:20",
      "summary": "Conceito de navegação em aplicações de página única (SPA), introdução ao Vue Router, uso das tags <router-link> e <router-view>.",
      "competency": "Estruturar sistemas de navegação com múltiplas visualizações sem recarregar o navegador.",
      "xp": 100,
      "badge": {
        "name": "Navegador SPA",
        "icon": "🧭",
        "description": "Compreendeu rotas e navegação SPA com Vue Router!"
      },
      "question": {
        "text": "No Vue Router, qual componente nativo é responsável por atuar como um 'marcador de posição' onde os componentes da rota atual serão renderizados?",
        "options": [
          "<router-link>",
          "<router-view>",
          "<router-holder>",
          "<route-outlet-vue>"
        ],
        "correctIndex": 1,
        "tip": "É a 'visão' da rota que se altera conforme o endereço URL muda.",
        "explanation": "O `<router-view>` é o componente funcional do Vue Router que renderiza na tela o componente associado à rota atualmente visitada pelo usuário."
      }
    },
    {
      "id": 20,
      "index": 20,
      "title": "20 - Requisições HTTP",
      "category": "Integração API",
      "videoId": "Ai-zd3Bz05o",
      "duration": "7:50",
      "summary": "Consumo de dados assíncronos e integração com APIs REST externas utilizando a função nativa fetch do JavaScript dentro do ciclo do Vue.",
      "competency": "Integrar a interface Vue com serviços backend e APIs RESTful tratando respostas assíncronas.",
      "xp": 100,
      "badge": {
        "name": "API Explorer",
        "icon": "🌐",
        "description": "Consumiu APIs externas e requisições HTTP com fetch!"
      },
      "question": {
        "text": "Ao utilizar a função `fetch('https://api.exemplo.com/dados')` para consumir uma API REST que retorna JSON, qual é o próximo passo obrigatório na cadeia de Promises?",
        "options": [
          "Chamar o método `response.json()` para converter o corpo da resposta HTTP em um objeto JavaScript utilizável.",
          "Executar `JSON.stringify(response)` diretamente sem aguardar o streaming de dados.",
          "Reiniciar a máquina para limpar o cache DNS do navegador.",
          "Fechar a conexão manualmente invocando `fetch.close()`."
        ],
        "correctIndex": 0,
        "tip": "A primeira Promise retorna o objeto Response, que precisa ser parseado para JSON com `.json()`.",
        "explanation": "A função nativa `fetch` resolve uma resposta HTTP (objeto `Response`). Para acessar os dados no formato de objeto JavaScript, devemos chamar o método assíncrono `response.json()`."
      }
    },
    {
      "id": 21,
      "index": 21,
      "title": "21 - Considerações Finais",
      "category": "Conclusão",
      "videoId": "M6scYSimZh4",
      "duration": "5:10",
      "summary": "Encerramento da primeira etapa da formação em Vue.js 3, consolidação dos aprendizados, boas práticas de código e transição para desenvolvimento de CRUDs completos.",
      "competency": "Consolidar a arquitetura de aplicações frontend e planejar os próximos passos na carreira de desenvolvedor web.",
      "xp": 150,
      "badge": {
        "name": "Graduado Vue SENAI",
        "icon": "🎓",
        "description": "Completou o funil gamificado de Vue.js 3 com distinção!"
      },
      "question": {
        "text": "Qual é a principal recomendação para manter projetos frontend em Vue.js manuteníveis e escaláveis no ambiente corporativo?",
        "options": [
          "Escrever todo o código da aplicação dentro de um único arquivo de 50.000 linhas.",
          "Adotar componentização com responsabilidades bem definidas, reuso de código, boas práticas de reatividade e separação de lógica de negócio.",
          "Evitar o uso de controle de versão como Git e hospedar os arquivos apenas via FTP.",
          "Não documentar nenhuma função nem realizar validações de props."
        ],
        "correctIndex": 1,
        "tip": "Pense nos pilares da engenharia de software ensinados nos cursos de tecnologia do SENAI.",
        "explanation": "Componentizar a interface em partes reutilizáveis com responsabilidades únicas, seguir padrões de reatividade e organizar o código em camadas são os pilares para construir sistemas manuteníveis e preparados para o mercado de trabalho."
      }
    }
  ]
};