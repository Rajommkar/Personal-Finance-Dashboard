import { formatCurrency, formatDate } from "@repo/utils";
import type { User, Transaction } from "@repo/types";

const mockUser: User = {
  id: "usr_91283",
  email: "rajommkar@example.com",
  name: "Rajommkar",
  createdAt: new Date().toISOString(),
};

const mockTransactions: Transaction[] = [
  {
    id: "tx_001",
    userId: mockUser.id,
    amount: 1500.5,
    type: "income",
    category: "Salary",
    description: "Monthly payout from client work",
    date: "2026-05-15T00:00:00.000Z",
  },
  {
    id: "tx_002",
    userId: mockUser.id,
    amount: 45.3,
    type: "expense",
    category: "Utilities",
    description: "Electric bill",
    date: "2026-05-16T00:00:00.000Z",
  },
];

console.log("=========================================");
console.log("   FINANCE API CORE SERVICE STARTING   ");
console.log("=========================================");
console.log(`Active User: ${mockUser.name} (${mockUser.email})`);
console.log(`Registered:  ${formatDate(mockUser.createdAt)}`);
console.log("-----------------------------------------");
console.log("Recent Transactions:");

mockTransactions.forEach((tx) => {
  const symbol = tx.type === "income" ? "+" : "-";
  console.log(
    `[${formatDate(tx.date)}] [${tx.category}] ${symbol}${formatCurrency(tx.amount)} - ${tx.description}`
  );
});
console.log("=========================================");
