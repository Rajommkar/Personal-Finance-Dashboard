import { formatCurrency, formatDate } from "@repo/util";
import type { Transaction } from "@repo/types";

console.log("=========================================");
console.log(" FINANCE BACKGROUND WORKER STARTING...   ");
console.log("=========================================");

const sampleTransactionsToProcess: Transaction[] = [
  {
    id: "tx_991",
    userId: "usr_91283",
    amount: 120.0,
    type: "expense",
    category: "Investments",
    description: "Weekly recurring index fund buy",
    date: new Date().toISOString(),
  },
];

function processRecurringJobs() {
  console.log(`[Worker - ${formatDate(new Date().toISOString())}] Processing recurring payments...`);
  
  sampleTransactionsToProcess.forEach((tx) => {
    console.log(
      `[SUCCESS] Processed category '${tx.category}' of value ${formatCurrency(tx.amount)}: ${tx.description}`
    );
  });
}

// Run initial job
processRecurringJobs();
