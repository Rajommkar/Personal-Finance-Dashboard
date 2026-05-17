# Worker Service

A high-performance background processor for Rajommkar's **Personal Finance Dashboard**.

## Planned Capabilities

This worker is designed to offload heavy asynchronous computations from the main web and api servers, handling:

1. **AI Jobs**
   * Automatic transaction categorization using fine-tuned models.
   * Detecting anomalous expenses or sudden spikes in spending.
   * Generating personalized AI financial advice summaries.

2. **Analytics Jobs**
   * Running daily calculations on category spending trends.
   * Computing cash flow forecasts and savings trajectory metrics.
   * Aggregating historical account balances.

3. **Notifications**
   * Triggering push notifications and emails for budget threshold violations.
   * Sending daily, weekly, or monthly financial recap alerts.

4. **Scheduled Tasks**
   * Daily cron sync with third-party open banking APIs (e.g., Plaid).
   * Scheduled database maintenance and cache pre-warming.

5. **Report Generation**
   * Generating downloadable PDF/CSV monthly financial statements.
   * Formulating annual tax reports and exportable expense receipts.

## Getting Started

To run the worker in development mode with hot-reloading:

```bash
pnpm --filter worker dev
```

To build the worker for production:

```bash
pnpm --filter worker build
```
