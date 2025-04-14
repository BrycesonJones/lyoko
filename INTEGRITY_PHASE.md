
# 🛡️ INTEGRITY_PHASE.md

This sprint locks in the operational integrity, internal observability, and scalable AI foundations of the Lyoko Bitcoin-native platform.

---

## ✅ 1. UX Polish Sprint (Final Round)
Polish with surgical precision:
- [ ] Refine **tax CSV wizard** — show alerts for malformed/missing rows
- [ ] Add **loading spinners** to:
  - CSV uploads  
  - Lightning send  
  - Wallet connection status
- [ ] **Animate dashboard tab transitions** (fade/slide)
- [ ] Add **placeholder/empty state** UI for:
  - Portfolio view  
  - Transaction history  
  - Wallet connections
- [ ] Add **edit + tag** option for transactions (e.g., “income”, “gift”, “trade”)

---

## ✅ 2. Security & Identity Reinforcement
Harden identity and data privacy:
- [ ] Add **logout** option to nav
- [ ] Add **“Reveal” toggle** for wallet addresses and balances
- [ ] Confirm/enforce **PBKDF2 password hashing** with 128-bit salt + 256-bit key
- [ ] Create **2FA recovery flow** — email fallback or downloadable recovery codes

---

## ✅ 3. Admin Console (Internal Only)
Observability for Neo:
- [ ] Display **total users** registered
- [ ] Show **transaction volume (7d, 30d)**
- [ ] Count of:
  - Lightning invoices issued
  - Tax files uploaded
- [ ] Button to **Export DB snapshot** (admin-only access)

---

## ✅ 4. AI Scaling Readiness
Future-proof the Morpheus advisor:
- [ ] Add `modelSwitcher` to toggle OpenAI / local fine-tuned GPT
- [ ] Store all user queries in DB (for future model tuning)
- [ ] Implement `/feedback` command:
  - Capture rating (1–5)
  - Optional comment field

---

Once these are complete, we'll begin Compliance Phase and Beta Launch tasks.

