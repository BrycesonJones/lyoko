
# ⚖️ COMPLIANCE_PHASE.md

This sprint prepares Lyoko for institutional, financial, and legal readiness. We will integrate Terms of Service, audit logs, data exports, and regulatory KYC/AML foundations.

---

## ✅ 1. Legal Surface & User Agreements

- [ ] Add `/terms`, `/privacy`, and `/disclaimers` pages with legal content
- [ ] Prompt users to agree to Terms before onboarding
- [ ] Disclaimers for:
  - AI-generated responses
  - Tax guidance limitations
  - Lightning Network risks
  - Fiat on-ramp volatility

---

## ✅ 2. Audit Logging System

Track major financial events:
- [ ] Create `audit_logs` table with:
  - `userId`
  - `action` (e.g. BUY, CSV_UPLOAD, EXPORT)
  - `timestamp`
  - `metadata` (e.g. BTC amount, IP address)
- [ ] Add logging hooks to:
  - Buy/Sell endpoints
  - Tax downloads
  - Wallet updates
- [ ] Display logs in `/admin/audit` (admin only)

---

## ✅ 3. Data Export System (GDPR + IRS-ready)

Users must be able to export all their data:
- [ ] “Export My Data” button in Settings
- [ ] Bundle includes:
  - Profile info
  - Transaction history
  - Uploaded tax documents
  - Wallet addresses
- [ ] ZIP file emailed to user securely (with audit trail)

---

## ✅ 4. Admin & Permission Layers

Secure sensitive functionality:
- [ ] Add `role: 'admin' | 'user'` to User model
- [ ] Restrict admin-only panels:
  - DB Snapshot
  - Audit logs
  - All-Users CSV export

---

## ✅ 5. KYC / AML Compliance Foundation

Prepare to meet Know Your Customer (KYC) and Anti-Money Laundering (AML) standards:

### KYC Account Verification Flow:
- [ ] Add “Identity Verification” tab to onboarding
- [ ] User must provide:
  - Full Legal Name
  - Date of Birth
  - Residential Address
  - Upload Photo ID (Driver’s License or Passport)
  - Biometric Selfie Capture (image or short video)
- [ ] Status options:
  - `unverified` → `pending` → `verified` → `restricted`
- [ ] Link to identity verification provider (Stripe Identity, Persona, etc.)

### AML Triggers & Watchlist Screening:
- [ ] Add placeholder logic for:
  - Suspicious transaction limits (e.g. > $10,000)
  - Multiple rapid transfers
  - Blockchain blacklists (e.g. OFAC-sanctioned wallets)
- [ ] Admin-only “Flagged Activity” panel

---

## ✅ 6. Logging & Consent

- [ ] Log user acceptance of legal terms (`accepted_terms_at`)
- [ ] Log identity verification attempts and timestamps
- [ ] Log export requests, IPs, and delivery status

---

Once these systems are in place, Lyoko will be positioned to scale compliantly across global jurisdictions and banking integrations.
