# ✅ Test Case: Frontend Login Flow (Tiered KYC)

**Objective:**  
Verify that a user can successfully register and log in through the Lyoko web UI using valid credentials, gaining access to the dashboard without completing KYC initially.

---

## 🧪 Precondition:
- No KYC is required during account creation.
- The application is running and accessible at the designated frontend URL.
- Database is available and properly configured to store user credentials.

---

## 🧾 Steps:

1. Navigate to the Lyoko web app at [Lyoko Web App](https://d70b5f83-afc7-4506-a1ef-5eb41a550421-00-2qmzayscvfdip.worf.replit.dev/)

2. Click on **"Get Started"**, **"Create Your Account"**, or **"Begin Your Journey"**.

3. Fill in the following form fields:
   - **Legal First Name**: `Neo`
   - **Legal Last Name**: `Anderson`
   - **Email**: `neo@example.com`
   - **Password**: `!MatrixPass12345`  
     _(must meet complexity requirements: min 15 chars, 1 uppercase, 1 lowercase, 1 symbol, 1 alphabetic character)_

4. Submit the form.

5. Check for a success message or redirect to the **Dashboard**.

6. On the dashboard:
   - Confirm no KYC-blocking modal appears.
   - Verify access to non-KYC features:
     - Bitcoin price chart
     - News feed
     - AI chatbot
     - Settings page

---

## ✅ Expected Results:

- ✅ Account creation succeeds without requiring KYC.
- ✅ User is redirected to the dashboard.
- ✅ Dashboard UI loads with functional components.
- ✅ KYC-related features (buy/sell, tax, deposit) are **locked or gated** with a KYC prompt modal.
- ✅ No sensitive API errors are thrown.

---

## 📌 Notes:

- This confirms Lyoko uses a **tiered access KYC** model.
- KYC will be enforced only at compliance-critical interaction points.

---

**Tested on:** 2025-04-16 13:57 UTC  
**Tester:** Human Operator (Neo)
