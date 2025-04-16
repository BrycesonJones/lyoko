# Test Case: AI Chatbot Integration

## Objective
Validate that the AI chatbot responds to prompts, maintains tone consistency, and handles unknown inputs gracefully.

## Precondition
- Chatbot widget is visible on the web app.
- OpenAI API key is configured and active.

## Test Steps
1. Click chatbot icon to open interface.
2. Enter a prompt: "What is DCA?"
3. Wait for response.
4. Enter unknown prompt: "Blorg zenta flux?"

## Expected Result
- Accurate response for known Bitcoin terms.
- Polite fallback message for unknown input.
- No API or UI errors.

## Pass Criteria
- OpenAI responses appear in under 5s.
- Chat history persists until page reload.
