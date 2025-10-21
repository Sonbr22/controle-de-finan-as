# 💼 Painel Financeiro Pessoal

Este é um **projeto web educativo** desenvolvido com o objetivo de **aprimorar meus conhecimentos em HTML, CSS e JavaScript**, enquanto crio uma ferramenta prática para **organizar e visualizar informações financeiras pessoais**.

---

## 🧠 Objetivo do Projeto

O objetivo principal é criar um **painel centralizado** que permita acessar diferentes funções financeiras — como calculadora de investimentos, controle de gastos e saldo devedor — tudo dentro de uma mesma interface.

---

## 🧩 Funcionalidades Planejadas

### 🔹 Página Principal (Menu)
- Interface inicial com botões para cada ferramenta.
- Uso de **iframe** para carregar páginas secundárias.
- Permite trocar entre módulos sem sair da página principal.

### 🔹 Calculadora de Investimentos
Ferramenta voltada para organizar e visualizar seus investimentos, mostrando não apenas o total aplicado, mas também a distribuição entre diferentes tipos de ativos.

**Funcionalidades:**
- 💸 **Distribuição inteligente:** separa automaticamente quanto do total investido vai para cada tipo de ativo (renda fixa, ações, FIIs, cripto e exterior).
- 📊 **Resumo financeiro:** mostra o valor total investido e o saldo atualizado.
- 📈 **Desempenho:** exibe lucro ou prejuízo de cada categoria e o resultado consolidado.

### 🔹 Controlador de Gastos
- Cadastro de gastos e categorias.
- Visualização do total gasto por período.
- Armazenamento local usando **LocalStorage** (para não perder os dados ao recarregar).
- Futuro: gráficos e filtros por categoria.

### 🔹 Saldo Devedor
- Controle de dívidas e valores pendentes.
- Atualização automática conforme pagamentos.
- Exibição do total devido e histórico.

---

## 🏗️ Estrutura de Pastas

```bash
meu-projeto/
│
├── index.html                # Página principal (menu + iframe)
├── estaisticas.html                
├── menu.html
│
├── src
│   ├── css
│   └── js
│   
├── pages/                    # Páginas carregadas 
│   ├── assinatura
│   ├── cartão
│   ├── credtrack
│   ├── despesas
│   ├── extras
│   ├── finaças
│   └── playclub
└──

 # Finan-as
