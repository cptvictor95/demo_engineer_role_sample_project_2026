import React, { useEffect, useState } from "react";
import { BookOfBusiness } from "../types";
import { getBookOfBusiness } from "../services/policyService";
import { PolicyTable } from "./PolicyTable";

const fetchBookOfBusiness = (agentID: string): Promise<BookOfBusiness> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(getBookOfBusiness(agentID));
      } catch (err) {
        reject(err);
      }
    }, 800);
  });

type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: BookOfBusiness };

interface BookOfBusinessPageProps {
  agentID: string;
}

export const BookOfBusinessPage: React.FC<BookOfBusinessPageProps> = ({
  agentID,
}) => {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    setState({ status: "loading" });
    fetchBookOfBusiness(agentID)
      .then((data) => setState({ status: "success", data }))
      .catch((err) =>
        setState({
          status: "error",
          message: err instanceof Error ? err.message : "Unexpected error",
        })
      );
  }, [agentID]);

  if (state.status === "loading") {
    return (
      <div style={containerStyle}>
        <p style={{ color: "#64748b" }}>Loading book of business...</p>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div style={containerStyle}>
        <div style={errorBoxStyle}>
          <strong>Unable to load agent data</strong>
          <p style={{ margin: "4px 0 0", fontSize: "0.9em", color: "#b91c1c" }}>
            {state.message}
          </p>
          <p style={{ margin: "8px 0 0", fontSize: "0.85em", color: "#64748b" }}>
            This is a system error — please contact support if the issue persists.
          </p>
        </div>
      </div>
    );
  }

  return <PolicyTable data={state.data} />;
};

const containerStyle: React.CSSProperties = {
  fontFamily: "sans-serif",
  padding: "24px",
};

const errorBoxStyle: React.CSSProperties = {
  padding: "16px",
  borderRadius: "6px",
  backgroundColor: "#fef2f2",
  border: "1px solid #fecaca",
  color: "#991b1b",
  maxWidth: "480px",
};
