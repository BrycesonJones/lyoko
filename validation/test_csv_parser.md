# Test Case: Tax CSV File Parser

## Objective
Ensure the tax report upload and parser correctly reads a well-formatted CSV or XLSX file and displays a gain/loss summary.

## Precondition
- Valid login session.
- Sample formatted CSV/XLSX with headers: Date, Type, BTC, USD.

## Test Steps
1. Navigate to /tax.
2. Upload the test file.
3. Observe parsed table and summary output.

## Expected Result
- Table renders with all transactions.
- Totals match BTC and USD columns.
- Gain/loss breakdown shows short vs long-term.

## Pass Criteria
- Table loads with correct number of rows.
- No parsing errors shown.
- Export options enabled (PDF/CSV).
