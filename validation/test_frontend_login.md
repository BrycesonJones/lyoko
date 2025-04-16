
# ✅ Test Case: Frontend Login Flow (Tiered KYC + Dashboard Routing)

## Objective
Verify that a user can successfully create an account using username-based sign-up, is redirected to the dashboard, can log out, and then log back in to return to the dashboard.

---

## Precondition
- User does **not** need to complete full KYC at account creation.
- Username, email, and secure password must be provided.

---

## Steps:

1. Navigate to the Lyoko web app at [Lyoko Web App](https://d70b5f83-afc7-4506-a1ef-5eb41a550421-00-2qmzayscvfdip.worf.replit.dev/)

2. Click on **"Get Started"**, **"Create Your Account"**, or **"Begin Your Journey"**

3. Fill in the following form fields:
   - **Username:** NeoTheOne
   - **Email Address:** neo@example.com
   - **Password:** !MatrixPass12345
     - Must be at least **14 characters** with **1 number**, **1 uppercase letter**, and **1 special character**

4. Click **Create Account**

5. ✅ Confirm you are **redirected to the dashboard**

6. Click **Logout** in the header navigation

7. Click **Login**

8. On the login screen, enter:
   - **Email:** neo@example.com
   - **Password:** !MatrixPass12345

9. Click **Sign In**

10. ✅ Confirm you are **redirected to the dashboard** again

---

## Expected Result
User can register → see dashboard → log out → sign back in → and re-enter dashboard without issues.

---

## Notes
- Password strength indicator works
- Replaces earlier assumption that users should be redirected to the login screen after registration
- Aligns with intuitive SaaS UX standards
