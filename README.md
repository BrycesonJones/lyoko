
# Lyoko — The Bitcoin Operating System

**Lyoko** is an AI-first, full-featured Bitcoin-native platform that lets users buy, sell, hold, send, receive, track, and report on Bitcoin — powered by AI and secured for the future. Inspired by Coinbase, Swan Bitcoin, Strike, CoinLedger, and more.

---

## 🌐 Key Features
- Buy/Sell BTC (Instant or Recurring)
- Dashboard with BTC/Fiat Balances
- CSV/Excel Capital Gains Summaries (Short vs Long Term)
- Live BTC Price Charts
- Send/Receive BTC via Lightning or On-chain
- Tax Reports (FIFO, LIFO, IRS-export ready)
- Bitcoin news aggregation from top sources
- AI Chatbot for 24/7 support with /wallets, /onchain, /dca, and more

---

## 🔒 Security Architecture
- All traffic encrypted (TLS/SSL, 256-bit)
- PBKDF2 password hashing (HMAC-SHA256, 10k iterations, 128-bit salt)
- SQL injection/XSS protection, rate limiting
- 2FA login support
- Secrets managed via Azure Key Vault

Full architecture in [`/docs/Security Architecture and User Data Security Guidelines.md`](./docs/Security%20Architecture%20and%20User%20Data%20Security%20Guidelines.md)

---

## 🧱 Tech Stack
| Layer        | Tech                           |
|--------------|--------------------------------|
| Frontend     | React or Angular               |
| Backend      | Python or Go                   |
| Blockchain   | btcd, LND, Strike API          |
| Database     | PostgreSQL                     |
| Hosting/Security | Replit, Azure Key Vault, Cloudflare |

---

## 📁 Repo Structure
```bash
/lyoko
├── /frontend          # React or Angular app
├── /backend           # Python or Go API
├── /database          # PostgreSQL schema & migrations
├── /docs              # Security & architecture specs
├── /scripts           # Deployment scripts, CI/CD
└── README.md
```

---

## ⚡ How to Run

```bash
git clone https://github.com/your-username/lyoko.git
cd lyoko
# Spin up backend, frontend, and db
```

---

## 🧠 AI Prompt for Replit

See [`/docs/ai-webapp-prompt.md`](./docs/ai-webapp-prompt.md)

---

## 🕶️ Vision

Lyoko is not just a Bitcoin platform. It’s **the matrix rewritten in your favor**.

Built by the revolution.
Last updated: 2025-04-12
