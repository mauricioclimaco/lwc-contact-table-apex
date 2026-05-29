# Salesforce Contact Manager (LWC + Apex)

Este projeto consiste em um componente customizado desenvolvido em **Lightning Web Components (LWC)** e **Apex** para otimizar a gestão e visualização de contatos diretamente na página de registros de Conta (`Account`) no Salesforce. 

O componente foi desenhado para ser reativo, performático e integrado nativamente à interface do Lightning Experience, conforme ilustrado na evidência do ambiente (`FireShot Capture 014 - Atualização via batch atráves de um agendamento - Account - Salesfo_ - [curious-panda-2wy2j3-dev-ed.trailblaze.lightning.force.com].png`).

---

## 🛠️ Arquitetura e Funcionalidades

* **Componente LWC Customizado (`contactTable`):** Renderiza uma tabela de dados dinâmica (`lightning-datatable`) carregando as informações em tempo real de forma assíncrona.
* **Controller Apex Eficiente (`ContactController`):** Implementa lógica de busca utilizando queries SOQL otimizadas e mecanismo de cache para garantir alta performance (`cacheable=true`).
* **Reatividade com Contexto:** Utiliza o decorador `@wire` e a propriedade `@api recordId` para capturar automaticamente o identificador da Conta atual e filtrar os contatos vinculados sem a necessidade de recarregar a página.
* **Tratamento de Erros:** Interface amigável que captura e exibe mensagens de erro em conformidade com o Design System do Salesforce (SLDS).

---

## 💻 Tecnologias e Recursos Utilizados

* **Lightning Web Components (LWC):** HTML5, JavaScript (ES6), e Lightning Data Service.
* **Apex Language:** Criação de classes e métodos com a anotação `@AuraEnabled`.
* **SOQL (Salesforce Object Query Language):** Filtragem relacional (`WHERE AccountId = :contaId`).
* **Salesforce Lightning Design System (SLDS):** Estilização de feedback de erro.

---

## 📁 Estrutura de Código do Projeto

O projeto está estruturado seguindo o padrão de desenvolvimento do Salesforce DX:

### 1. Front-end (Lightning Web Component)

* **`contactTable.html`**: Estrutura de marcação utilizando `lightning-card` e `lightning-datatable` para exibir colunas como Nome, Email, Telefone e Cargo.
* **`contactTable.js`**: Lógica de controle em JavaScript responsável por importar o método Apex, mapear as colunas e injetar o `recordId` contextual de forma reativa.
* **`contactTable.js-meta.xml`**: Configuração do componente que o expõe exclusivamente para páginas de registro (`lightning__RecordPage`).

### 2. Back-end (Apex Controller)

* **`ContactController.cls`**: Classe controladora responsável por disponibilizar o método `getContactsByAccountId` para o ecossistema Lightning.
