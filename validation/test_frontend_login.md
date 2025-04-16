# Test Case: Frontend Login Flow

## Objective
Verify that a user can successfully log in through the Lyoko web UI using valid credentials and is redirected to the dashboard.

## Precondition
- User account with valid credentials exists.

## Test Steps
1. Navigate to the login page.
2. Enter a valid email and password.
3. Click the login button.

## Expected Result
- User is redirected to the dashboard.
- Session token is stored.
- Header updates to show logged-in state.

## Pass Criteria
- Successful redirection.
- Console shows no JavaScript errors.
- UI reflects authenticated state.
