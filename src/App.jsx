import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const startRoutes = [
  { path: "start/component", name: "Component" },
  { path: "start/useState", name: "useState()" },
  { path: "start/useEffect", name: "useEffect()" },
  { path: "start/useMemo", name: "useMemo()" },
  { path: "start/useCallback", name: "useCallback()" },
  { path: "start/useContext", name: "useContext()" },
  { path: "start/useContextDest", name: "useContextDest()" },
];

const endRoutes = [
  { path: "end/component", name: "Component" },
  { path: "end/useState", name: "useState()" },
  { path: "end/useEffect", name: "useEffect()" },
  { path: "end/useMemo", name: "useMemo()" },
  { path: "end/useCallback", name: "useCallback()" },
  { path: "end/UseContext", name: "useContext()" },
  { path: "end/UseContextDest", name: "useContextDest()" },
];

export const App = () => {
  return (
    <>
      <h1>Routes</h1>
      <h2>Starts</h2>
      <div className="routes-container">
        {startRoutes.map((route, index) => (
          <Link to={route.path} key={index}>
            <div className="route">
              <span>{route.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <h2>Ends</h2>
      <div className="routes-container">
        {endRoutes.map((route, index) => (
          <Link to={route.path} key={index}>
            <div className="route">
              <span>{route.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <h2>useCallback() vs useMemo()</h2>
      <div className="routes-container">
        <Link to={"compare/useCallbackTestMemo"}>
          <div className="route">
            <span>{"useCallback vs useMemo"}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default App;
