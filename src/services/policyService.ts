// policyService.ts — Backend service that prepares the Book of Business API response

import { RawPolicy, PolicySummary, BookOfBusiness } from "../types";
import { agents, policies } from "../data/policyData";

/**
 * Converts a premium to its annual equivalent.
 */
const annualizePremium = (premium: RawPolicy["premium"]): number => {
  switch (premium.frequency) {
    case "monthly":
      return premium.amount * 12;
    case "quarterly":
      return premium.amount * 4;
    case "annual":
      return premium.amount;
  }
};

/**
 * Transforms a raw policy record into the summary shape the frontend expects.
 */
const toSummary = (policy: RawPolicy): PolicySummary => ({
  policyNumber: policy.policyNumber,
  insuredName: `${policy.insured.firstName} ${policy.insured.lastName}`,
  product: policy.product,
  status: policy.status,
  annualPremium: annualizePremium(policy.premium),
});

/**
 * Returns the Book of Business for a given agent.
 * Filters to active and pending policies only.
 */
export const getBookOfBusiness = (agentID: string): BookOfBusiness => {
  const agent = agents[agentID];
  if (!agent) {
    throw new Error(`Agent not found: ${agentID}`);
  }

  // Get this agent's non-cancelled policies
  const agentPolicies = policies
    .filter((p) => p.agentID === agentID && p.status !== "cancelled") // [BUG] this should not filter by hardcoded ID
    .map(toSummary)
    .sort((a, b) => a.policyNumber.localeCompare(b.policyNumber));

  const totalAnnualPremium = agentPolicies.reduce(
    (sum, p) => sum + p.annualPremium,
    0
  );

  return {
    agentName: agent.name,
    policies: agentPolicies,
    totalAnnualPremium,
  };
};
