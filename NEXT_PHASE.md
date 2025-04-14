# 🚀 LYOKO – NEXT PHASE FEATURE IMPLEMENTATION

Now that the frontend layout, Matrix animation, and hero UX are complete, we are ready to move into the next feature phase of development. The goal here is to advance Lyoko from MVP to full PaaS readiness.

---

## ✅ Feature Sprint Checklist

### 1. `/tax` CSV Wizard Polish
- [ ] Refine the CSV/XLSX upload flow
- [ ] Show real-time feedback: rows parsed, errors, and totals
- [ ] Validate for headers like: `Date`, `Type`, `Amount`, `Cost Basis`, `USD Value`
- [ ] Display short-term vs long-term capital gains table
- [ ] Add “Download Tax Summary” button for PDF export

---

### 2. ⚡ Lightning Send/Receive Panel
- [ ] Build send/receive interface with sats or BTC entry
- [ ] Add destination Lightning invoice input
- [ ] Show routing fee estimation (low/medium/high)
- [ ] Add QR code generator for receiving BTC over Lightning

---

### 3. 🔗 Wallet Connection Panel
- [ ] UI panel for connecting major exchanges:
  - Coinbase, Strike, CashApp, Kraken, River, etc.
- [ ] Show connection status and BTC balances from each
- [ ] Begin with mock data and stubs for future API integrations

---

### 4. 🤖 AI Advisor Chatbot Enhancement
- [ ] Transform into a floating bottom-right pop-up widget (Intercom style)
- [ ] Auto-load with greeting: “I’m Morpheus. Ready to navigate Bitcoin?”
- [ ] Provide command buttons: `/price`, `/taxhelp`, `/wallets`, `/dca`
- [ ] Style chat window in Matrix theme (dark + green)

---

### 5. 📊 Portfolio Overview Page
- [ ] Show real-time BTC holdings in BTC + USD
- [ ] Summarize all-time:
  - [ ] Total invested
  - [ ] Realized gains
  - [ ] Unrealized gains
- [ ] Line chart with toggle options (1W, 1M, 1Y, All)

---

## ⚙️ Reminder of Live Environment Design Specs
- Matrix green (#00FF00) across primary buttons, charts, animations
- Digital rain background active on hero + footer
- Font styling similar to [Scale.com](https://scale.com) with animated flip effect on `Bitcoin Platform`
- Minimal black UI + light glow aesthetics across all components

---

Let’s ship the future of Bitcoin financial AI.

**– Lyoko Core Team 🧠**
