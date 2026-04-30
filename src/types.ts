// types.ts — Shared types used by the backend service and frontend component

export interface RawPolicy {
  policyNumber: string;
  agentID: string;
  insured: {
    firstName: string;
    lastName: string;
  };
  product: string;
  status: "active" | "pending" | "cancelled";
  premium: {
    amount: number;
    frequency: "monthly" | "quarterly" | "annual";
  };
}

export interface PolicySummary {
  policyNumber: string;
  insuredName: string;
  product: string;
  status: string;
  annualPremium: number;
}

export interface BookOfBusiness {
  agentName: string;
  policies: PolicySummary[];
  totalAnnualPremium: number;
}
