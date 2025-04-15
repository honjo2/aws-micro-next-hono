# Microservice + BFF + Hono + Next.js Starter

HonoとNext.jsを使ったマイクロサービス + BFFのスターターです。

## クイックスタート

```bash
npm install
npm run dev
```

- Users Service: http://localhost:4001/users
- BFF: http://localhost:5100/api/users
- Web: http://localhost:3000

## ディレクトリ構成

```
.
├── package.json      # ← ルート (workspaces 設定あり)
├── tsconfig.json
├── services/         # ← マイクロサービス群
│   └── users/
│       ├── package.json
│       └── src/index.ts
├── bff/              # ← BFF
│   ├── package.json
│   └── src/index.ts
└── web/              # ← Next.js
    ├── package.json
    └── app/
        └── page.tsx
```

## AWS想定

- マイクロサービス
  - Lambda + API Gateway
- BFF
  - Lambda + API Gateway
- Frontend
  - S3 + CloudFront
