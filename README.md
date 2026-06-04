# 🧪 Desafio Técnico – Desenvolvedor 1 – ISI-TICs

## Repositório destinado ao desafio técnico para a vaga de [Desenvolvedor 1 – ISI-TICs](https://github.com/isi-tics/desafio-isi-dev-1).

Este projeto contempla apenas o backend, desenvolvido com foco em arquitetura limpa, regras de negócio robustas e boas práticas REST.

# 📌 Sobre o Projeto

## Este backend simula um fluxo real de vendas em um ambiente corporativo, permitindo:

- Cadastro e gerenciamento de produtos
- Aplicação e remoção de descontos percentuais
- Aplicação de cupons promocionais
- Listagem paginada com filtros avançados
- Soft delete e restauração de produtos
- Validações rigorosas de regras de negócio

## O foco principal foi:

- Clareza arquitetural
- Separação de responsabilidades
- Tratamento adequado de erros HTTP
- Persistência consistente e transacional
- Código limpo e legível

# 🛠 Tecnologias Utilizadas

- NestJS
- TypeScript
- Docker
- Docker Compose
- PostgreSQL
- TypeORM
- Validação: class-validator
- Paginação: nestjs-paginate (se estiver usando)

---

# 🐳 Como Executar o Projeto

## ✅ Pré-requisitos

- Docker
- Docker Compose

## 🚀 Executando

```bash
docker compose build
docker compose up
```

### A aplicação estará disponível em:

```
 http://localhost:3001
```

# 📂 Estrutura do Projeto

```
src/
├── modules/
│   └── produtos/
│       ├── dto/
│       │   ├── create-produto.dto.ts
│       │   └── update-produto.dto.ts
│       │
│       ├── entities/
│       │   └── produto.entity.ts
│       │
│       ├── produto.controller.ts
│       ├── produto.service.ts
│       └── produto.module.ts
│
├── common/
│   ├── filters/
│   ├── interceptors/
│   └── exceptions/
│
├── database/
│
├── app.controller.ts
├── app.service.ts
├── app.module.ts
└── main.ts
```

---

#### Projeto desenvolvido como parte do desafio técnico do [ISI-TICs](https://github.com/isi-tics).
