import React, { useState } from "react";

const UseStateComp = () => {
  const [click, setClick] = useState(0);

  const welcomeUser = () => {
    alert(`Welcome`);
  };

  const informRender = () => {
    alert(`The component just rendered.`);
  };

  const informClicked = () => {
    alert(`You've clicked ${click} times.`);
  };

  return (
    <div>
      <button className="click-me" onClick={() => setClick(click + 1)}>
        Click me
      </button>
    </div>
  );
};

export default UseStateComp;
