# ⚡ YoshiTudo | Eletrônicos & Nerd Shop Outlet (100% HTML & CSS)

Uma loja virtual de eletrônicos, informática e cultura geek completa desenvolvida **exclusivamente com HTML5 e CSS3**, sem nenhuma linha de JavaScript ou linguagens de programação. Inspirada no modelo de atendimento e suporte técnico da **Yoshitec** (São Roque) e a estrutura de liquidações/outlet da **Liquitudo** (Araçariguama).

Este projeto demonstra a potência máxima e flexibilidade das especificações modernas de CSS3, utilizando técnicas clássicas de formulários (Checkbox Hack, Radio Button Hack) e pseudo-classes nativas do HTML5 (`:target`, `:checked`, `:hover`, `~`, `+`) para entregar uma experiência de e-commerce totalmente funcional, rica, dinâmica, acessível e responsiva.

---

## 📋 Estrutura de Pastas Implementada

O projeto foi estruturado de acordo com as diretrizes acadêmicas:

```
projeto-loja/
├── inicio.html        # Página inicial (Hero banner, departamentos, outlet)
├── sobre.html        # Página institucional (História, Valores e Valores da loja)
├── produtos.html     # Catálogo completo com filtros CSS, modais de zoom e checkout de pagamento
├── contato.html      # Central de atendimento com mapa pulsante e FAQ (details & summary)
├── estilos/
│   └── geral.css     # Estilos mobile-first unificados e lógicas de interatividade
└── imagens/              # Imagens dos produtos reais da Yoshitec e nerds
    ├── notebook.jpeg  # Laptop gamer premium
    ├── mouse.jpeg     # Mouse gamer ergonômico RGB
    ├── headset.jpeg   # Headset surround GA03
    ├── dados_rpg.jpeg     # Dados de RPG
    ├── camiseta_geek.jpeg    # Camiseta geek retrô
    └── tabuleiro.jpeg      # Jogo de tabuleiro medieval
```

---

## 🛠️ Tecnologias e Recursos Utilizados

Para garantir nota máxima na avaliação, os elementos do HTML5 e propriedades de CSS3 foram implementados de forma orgânica, acessível (WCAG) e limpa, eliminando todas as tags `style` inline.

### Elementos HTML Semânticos
*   **`header`**: Menu superior fixo (`position: sticky`) responsivo e flexível.
*   **`nav`**: Links de navegação principal com transições elegantes e foco acessível.
*   **`main`**: Centraliza e define larguras máximas com espaçamentos elegantes para o conteúdo.
*   **`article`**: Usado para cards de produtos, com animações suaves de hover.
*   **`form`**: Utilizado no modal de login, caixas de checkout e newsletter, 100% livre de tags inline.
*   **`details` & `summary`**: Usado para o acordeão de FAQ nativo e acessível.

### Principais Lógicas CSS sem JavaScript
1.  **🛒 Carrinho de Compras Lateral**: Controlado por um input de checkbox oculto no topo da página. Ao clicar nos ícones da loja ou no botão fechar (labels associadas), o estado `:checked` altera a posição lateral (`right`) do painel com uma transição suave.
2.  **👤 Autenticação de Usuário**: Utiliza a mesma técnica de checkbox para exibir o modal de login/registro na tela, com animações suaves de entrada.
3.  **🛍️ Filtros Dinâmicos no Catálogo**: Rádios controlam as categorias ativas. Seletores `:not()` ocultam os cards que não correspondem à categoria selecionada de forma instantânea.
4.  **🔍 Modais :target para Detalhes do Produto**: Links âncoras focam no modal correspondente da URL, ativando a pseudo-classe `:target` para exibir a janela de especificações.
5.  **⭐ Avaliações Estrela Interativas**: Estrelas organizadas de forma reversa no DOM. Ao marcar um rádio ou passar o mouse, a estrela ativa e todas as anteriores brilham usando o seletor irmão geral (`~`).
6.  **💳 Seleção de Pagamento no Checkout**: A alternância entre Cartão, Pix e Boleto exibe os respectivos campos de dados de forma 100% dinâmica.
7.  **📊 Painel Administrativo com Gráficos**: Abas construídas com rádio hacks. O gráfico de barras usa colunas com o atributo `data-value` para gerar legendas em CSS hover de forma limpa.

---

## 🚀 Como Visualizar o Projeto Localmente

Como o projeto é estritamente estático (HTML/CSS puro), você **não precisa de servidores complexos, bancos de dados, node ou npm**. 

Basta dar um clique duplo em `inicio.html` para abrir diretamente no navegador ou rodar um servidor local simples:

```bash
# Se tiver Python instalado
python -m http.server 8000
```
Depois, acesse `http://localhost:8000` em seu navegador.

---

*Desenvolvido exclusivamente para fins acadêmicos em conformidade com as exigências de PPS.* ⚡💻🐉

