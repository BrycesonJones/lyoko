
# Test Case: Frontend Login Flow (Tiered KYC)

## Objective
Verify that a user can successfully log in through the Lyoko web UI using valid credentials and is redirected to the dashboard.

## Precondition
A user account with a valid username, email, and secure password exists. KYC verification is **not** required for login.

## Steps

1. Navigate to the Lyoko web app at [Lyoko Web App](https://d70b5f83-afc7-4506-a1ef-5eb41a550421-00-2qmzayscvfdip.worf.replit.dev/)
2. Click on **"Get Started"**, **"Create Your Account"**, or **"Begin Your Journey"**
3. Fill in the following form fields:
   - **Username:** IAMBRYCESONTHEONE
   - **Email:** soundmoneyissound@gmail.com
   - **Password:** !MatrixPass1234  
     _(must meet complexity requirements: min 14 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character)_
   - **Confirm Password:** !MatrixPass1234
4. Click the **"Create Account"** button (Matrix green)
5. User should be redirected to the login screen
6. Enter same **email** and **password**
7. Click **"Sign In"** (Matrix green)
8. Upon success, user should be redirected to dashboard

## Expected Result
- User is successfully logged in and redirected to their dashboard
- Password requirements enforce 14+ characters with complexity
- Visual consistency is maintained (black background, Matrix styling)
- No full KYC required at this stage

## Notes
- Full KYC is triggered upon Bitcoin purchase, not account creation.
- Ensure login form accepts valid credentials and displays errors otherwise.

