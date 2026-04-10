// policyData.ts — Mock data (stands in for database queries)

import { RawPolicy } from "./types";

export const agents: Record<string, { name: string }> = {
  "AGT-1001": { name: "Margaret Chen" },
  "AGT-1002": { name: "David Kowalski" },
};

export const policies: RawPolicy[] = [
  {
    policyNumber: "POL-2024-001",
    agentID: "AGT-1001",
    insured: { firstName: "James", lastName: "Whitfield" },
    product: "Secure Horizon Term Life",
    status: "active",
    premium: { amount: 125.0, frequency: "monthly" },
  },
  {
    policyNumber: "POL-2024-002",
    agentID: "AGT-1001",
    insured: { firstName: "Anika", lastName: "Patel" },
    product: "Legacy Builder Whole Life",
    status: "active",
    premium: { amount: 4800.0, frequency: "annual" },
  },
  {
    policyNumber: "POL-2024-003",
    agentID: "AGT-1001",
    insured: { firstName: "Robert", lastName: "Espinoza" },
    product: "FlexGrowth Indexed Annuity",
    status: "pending",
    premium: { amount: 750.0, frequency: "quarterly" },
  },
  {
    policyNumber: "POL-2024-004",
    agentID: "AGT-1001",
    insured: { firstName: "Susan", lastName: "O'Brien" },
    product: "Secure Horizon Term Life",
    status: "cancelled",
    premium: { amount: 89.5, frequency: "monthly" },
  },
  {
    policyNumber: "POL-2024-005",
    agentID: "AGT-1001",
    insured: { firstName: "Michael", lastName: "Tanaka" },
    product: "RetireWell Fixed Annuity",
    status: "active",
    premium: { amount: 500.0, frequency: "monthly" },
  },
  {
    policyNumber: "POL-2024-010",
    agentID: "AGT-1002",
    insured: { firstName: "Laura", lastName: "Freeman" },
    product: "Legacy Builder Whole Life",
    status: "active",
    premium: { amount: 200.0, frequency: "monthly" },
  },
];
