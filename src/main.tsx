import React from "react";
import ReactDOM from "react-dom/client";
import { BookOfBusinessPage } from "./components/BookOfBusinessPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookOfBusinessPage agentID="AGT-1001" />
  </React.StrictMode>
);
