import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UseStateComp from "./starts/useState.start";
import UseEffectComp from "./starts/useEffect.start";
import UseMemoComp from "./starts/useMemo.start";
import UseCallbackComp from "./starts/useCallback.start";
import UseStateCompEnd from "./ends/useState.end";
import UseEffectCompEnd from "./ends/useEffect.end";
import UseMemoCompEnd from "./ends/useMemo.end";
import UseCallbackCompEnd from "./ends/useCallback.end";
import UseCallbackTestMemoComp from "./useCallbackVsUseMemo/useCallbackTestMemo";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="start/useState" element={<UseStateComp />} />
      <Route path="start/useEffect" element={<UseEffectComp />} />
      <Route path="start/useMemo" element={<UseMemoComp />} />
      <Route path="start/useCallback" element={<UseCallbackComp />} />
      <Route path="end/useState" element={<UseStateCompEnd />} />
      <Route path="end/useEffect" element={<UseEffectCompEnd />} />
      <Route path="end/useMemo" element={<UseMemoCompEnd />} />
      <Route path="end/useCallback" element={<UseCallbackCompEnd />} />
      <Route
        path="compare/useCallbackTestMemo"
        element={<UseCallbackTestMemoComp />}
      />
    </Routes>
  </BrowserRouter>
);
