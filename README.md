# 🛒 E-commerce API — Desafio Dev 1 ISI-TICs (Backend)

API REST de gestão de produtos de e-commerce, desenvolvida como solução para a **prova de Desenvolvedor 1 do Instituto SENAI de Inovação para Tecnologias da Informação e Comunicação (ISI-TICs)**.

Construída com **NestJS + TypeScript**, com foco em boas práticas: validação rigorosa de entrada, paginação/busca/ordenação, soft delete, documentação Swagger e ambiente 100% containerizado com Docker.

## ⚙️ Funcionalidades

### Produtos (CRUD completo)

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/products` | Cria um produto (com normalização do nome e verificação de duplicidade) |
| `GET` | `/products` | Lista produtos com **paginação, busca e ordenação** |
| `GET` | `/products/:id` | Busca um produto por ID |
| `PATCH` | `/products/:id` | Atualiza um produto (revalidando unicidade do nome) |
| `DELETE` | `/products/:id` | Remove um produto (**soft delete**) |

**Listagem** (via `nestjs-paginate`):
- Ordenável por `id`, `name` e `price`
- Busca textual em `name` e `description`
- Ordenação padrão por data de criação (mais recentes primeiro)
- Limite padrão de 10 itens por página (máx. 20)

Exemplo: `GET /products?page=1&limit=10&search=mouse&sortBy=price:ASC`

### Cupons de desconto 🚧

Módulo em desenvolvimento — já conta com a modelagem da entidade (código único, tipo, valor, uso único, vigência), DTO com validação de formato e serviço de normalização de códigos (remoção de acentos, case-insensitive e bloqueio de códigos reservados).

## 🛡️ Regras de negócio e validações

- **Nome único**: não é permitido cadastrar produtos com nomes duplicados (comparação feita sobre o nome normalizado — trim + espaços colapsados)
- **Validação de entrada** com `class-validator` + `ValidationPipe` global configurado com `whitelist` e `forbidNonWhitelisted` (campos não previstos no DTO são rejeitados)
- **Preço flexível**: aceita formato brasileiro (`"1.234,56"`) e o converte para número
- **Soft delete**: produtos removidos são marcados com `deleted_at` em vez de excluídos fisicamente, preservando histórico
- **Timestamps automáticos**: `created_at`, `updated_at` e `deleted_at` gerenciados pelo TypeORM
- **Erros semânticos**: `409 Conflict` para duplicidade e `404 Not Found` para produto inexistente

## 📖 Documentação (Swagger)

A API é documentada com **Swagger/OpenAPI**, com todas as entidades e DTOs anotados (`@ApiProperty` com descrições e exemplos).

Com a aplicação rodando, acesse:

```
http://localhost:3001/api
```

## 🛠️ Tecnologias

- **NestJS 11** + **TypeScript**
- **TypeORM** + **PostgreSQL 16**
- **nestjs-paginate** — paginação, busca e ordenação
- **class-validator / class-transformer** — validação e transformação de DTOs
- **Swagger (@nestjs/swagger)** — documentação da API
- **Docker + Docker Compose** — API e banco containerizados
- **Jest** — estrutura de testes
- **ESLint + Prettier** — padronização de código

## 📁 Estrutura

```
src/
├── modules/
│   ├── products/
│   │   ├── controllers/product.controller.ts
│   │   ├── services/product.service.ts
│   │   ├── entites/product.entity.ts
│   │   ├── dto/create-product.dto.ts
│   │   ├── dto/update-product.dto.ts
│   │   └── product.module.ts
│   └── coupon/            # 🚧 em desenvolvimento
│       ├── entities/coupon.entity.ts
│       ├── dto/create-coupon.dto.ts
│       └── services/coupon.service.ts
├── app.module.ts
└── main.ts                # Bootstrap + ValidationPipe global + Swagger
```

## ▶️ Como executar

### Com Docker (recomendado)

Sobe a API e o PostgreSQL com um único comando:

```bash
git clone https://github.com/luanmvcosta0/dev1-isitics-be.git
cd dev1-isitics-be
docker-compose up --build
```

- API: `http://localhost:3001`
- Swagger: `http://localhost:3001/api`
- PostgreSQL: `localhost:5433` (mapeado para evitar conflito com instâncias locais)

### Localmente (sem Docker)

Pré-requisitos: Node.js e PostgreSQL rodando.

```bash
npm install
npm run start:dev
```

Configure as variáveis de ambiente (`DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_NAME`, `PORT`) conforme seu ambiente.

### Testes

```bash
npm run test        # testes unitários
npm run test:cov    # cobertura
```

## 🎯 Contexto

Solução desenvolvida para a **prova técnica de Desenvolvedor 1 do ISI-TICs (Instituto SENAI de Inovação em TICs)**, demonstrando construção de API REST com NestJS aplicando validações robustas, regras de negócio, paginação, documentação e containerização.
