import React, { useState, useEffect, useMemo } from "react";

const UseStateComp = () => {
  const [click, setClick] = useState(0);
  const [theme, setTheme] = useState("theme1");

  const squaredNumber = useMemo(() => {
    return verySlowSquaring(click);
  }, [click]);

  const changeTheme = () => {
    if (theme === "theme1") setTheme("theme2");
    else setTheme("theme1");
  };

  useEffect(() => {
    alert(`Welcome`);
  }, []);

  return (
    <div>
      <button className="click-me" onClick={() => setClick(click + 1)}>
        Click me
      </button>
      <button className="change-theme" onClick={changeTheme}>
        Change theme
      </button>
      <span className={theme + " display-text"}>
        You've clicked {click} times. <br />
        Square that we get {squaredNumber}.
      </span>
    </div>
  );
};

const verySlowSquaring = (num) => {
  for (let i = 0; i < 4000000000; i++) {}
  return num * num;
};

export default UseStateComp;
