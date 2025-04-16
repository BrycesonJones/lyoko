# ✅ Test Case: Frontend Login Flow with Tiered KYC

## Objective
Verify that a user can:
- Create an account with a username and secure password
- Is redirected to the dashboard
- Can log out and log back in
- Ensure the login process and redirect logic is functioning as expected

---

## Precondition
- The Lyoko web application is running in a browser (Replit or local deployment).
- No prior login session is active.

---

## 🧾 Steps:
1. Navigate to the Lyoko web app at `Lyoko Web App`.

2. Click on **"Get Started"**, **"Create Your Account"**, or **"Begin Your Journey"**.

3. Fill in the following form fields:

   - **Username:** IAMBRYCESONTHEONE
   - **Email:** soundmoneyissound@gmail.com
   - **Password:** !MatrixPass12345  
     (must meet complexity requirements: min 14 chars, 1 uppercase, 1 lowercase, 1 symbol, 1 alphabetic character)

4. Click the **Create Account** button.

5. ✅ Expected result:
   - You are redirected directly to the **Dashboard** after successful signup.

6. Click the **Logout** button in the header.

7. Click **Sign In**.

8. Enter:
   - **Email:** soundmoneyissound@gmail.com
   - **Password:** !MatrixPass12345

9. Click **Sign In** again.

10. ✅ Expected result:
   - You are redirected to the **Dashboard**.

---

## ✅ Pass Criteria
- Form accepts valid entries and enforces password complexity.
- User is redirected to the dashboard upon successful account creation.
- Logging out clears session and returns user to login screen.
- Logging back in works using previously created credentials.

---

## ❌ Fail Criteria
- Invalid passwords are accepted (e.g., fewer than 14 characters).
- Signup form allows blank username/email/password fields.
- No redirect occurs after signup or login.
- Logout doesn't clear session.
