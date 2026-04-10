# Demo Engineer Take-Home Exercise

## The Scenario

You're a Demo Engineer at a life insurance technology company. Tomorrow morning, your sales team has a demo with a prospect — a large annuity carrier. You pull up the agent portal demo environment to verify everything looks good, and you notice problems.

The portal has an **Agent Book of Business** page that displays a summary of an agent's policies. It fetches data from a backend API and renders it in a table.

You've been given the relevant source files. **Find and fix the bugs so the demo is ready.**

## What You're Looking At

This is a simplified version of our stack:

| File | What it does |
|------|-------------|
| `policyService.ts` | Backend service — fetches raw policy data and transforms it for the API response |
| `PolicyTable.tsx` | React component — renders the agent's book of business |
| `types.ts` | Shared TypeScript types used by both layers |
| `policyData.ts` | Mock data — stands in for our database |

## What the Demo Should Look Like

When working correctly, the Agent Book of Business page should display:

- **Agent Name** at the top: "Margaret Chen"
- A table of the agent's policies showing: Policy Number, Insured Name, Product, Status, and Annual Premium
- Annual Premium should be displayed as a dollar amount (e.g., "$12,000.00")
- **Total Annual Premium** summed at the bottom
- Only **active** and **pending** policies should appear — not cancelled ones
- Policies sorted by policy number

The agent (Margaret Chen, agent ID `"AGT-1001"`) has 5 policies in the system. One is cancelled, so **4 policies** should appear in the table. Values should all appear as logically expected.

## What's Actually Happening

When you run the code in its current state, you'll notice things aren't right. Some issues will be obvious. Others are more subtle — the kind of thing a prospect might catch mid-demo and ask about (questions about configurability, component rendering logic, realistic and correct data values, etc.).

## Your Task

1. Review the code across all files
2. Identify the bugs
3. Fix them
4. Be prepared to walk us through your debugging process on a follow-up call — we're more interested in *how you found each issue* than the fixes themselves

## Setup

These are plain TypeScript files. You can:
- Read through them and identify issues by inspection
- Or set up a quick environment to run them (`ts-node`, etc.) — whatever is natural for you

There is no trick question here. The types are correct. The mock data represents what would really come back from our database. The bugs are the kind of real-world issues that show up when code gets written against one data shape and the data evolves.

**Time expectation: about 1 hour.**
