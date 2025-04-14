# 💸 LYOKO – FINANCIAL CORE PHASE

This phase initiates backend logic for the financial engine powering Lyoko's Bitcoin-native experience: real-time BTC trading, paycheck-to-Bitcoin conversions, and scalable fiat gateway routing.

---

## ✅ Goals for This Phase

### 1. `/buy` Endpoint
- [ ] Accept user-initiated BTC purchase requests
- [ ] Query real-time BTC price feed (via CoinGecko or other)
- [ ] Deduct funds from user USD wallet
- [ ] Apply tiered trading fee based on volume
- [ ] Log transaction with timestamp, BTC price, and fee

### 2. `/sell` Endpoint
- [ ] Accept BTC sell requests (user defines BTC or USD amount)
- [ ] Convert based on live price feed
- [ ] Apply trading fee
- [ ] Credit USD balance
- [ ] Log transaction with timestamp, BTC price, and fee

### 3. 🏦 Direct Deposit Onboarding (Robinhood-style)
- [ ] Generate unique virtual account + routing numbers per user (via Synapse, Astra, or Stripe Treasury)
- [ ] UI to display account/routing info
- [ ] Deposits auto-credit user USD wallet
- [ ] Option: auto-convert % or amount of each paycheck to BTC
- [ ] UI toggle: Convert 100%, 50%, or custom amount to BTC
- [ ] Record incoming deposit as system-initiated transaction

### 4. 🔁 DCA Rules Engine
- [ ] Allow users to set recurring buys (daily/weekly/monthly)
- [ ] Store next execution date per rule
- [ ] Execute rule if balance available
- [ ] Log transaction + notify user

### 5. 📦 Trading Fee Model
Tiered by monthly volume:

| Monthly Volume         | Fee     |
|------------------------|---------|
| <$250                  | 0.99%   |
| $250 – $2,000          | 0.95%   |
| $2,000 – $5,000        | 0.89%   |
| $5,000 – $50,000       | 0.79%   |
| $50,000 – $500,000     | 0.69%   |
| $500,000 – $5,000,000  | 0.59%   |
| $5,000,000 – $15,000,000 | 0.49% |
| >$15,000,000           | 0.39%   |

Apply based on 30-day rolling sum of buy/sell volume.

---

## 🔐 Compliance/Considerations
- Validate user identity (KYC in future phase)
- Confirm email for Direct Deposit setup
- Include legal disclaimer for bank linking

---

Let’s initiate the Lyoko engine — Bitcoin buying, selling, and paycheck automation begins now.

— Lyoko Core Team 🧠