import React from "react";
import styles from "./Component.module.css";

// function Center({ text, className }) {
//   return <div className={`${styles.center} ${className}`}>{text}</div>;
// }

function Center({ children, className }) {
  return <div className={`${styles.center} ${className}`}>{children}</div>;
}

function Comp() {
  return (
    <div>
      {/* <Center text="Hello" className={styles.container} /> */}
      <Center className={styles.container}>Hello</Center>
      {/* <Center className={styles.container}>
        <div>This is in a div!</div>
      </Center> */}
      <Center>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Center>
    </div>
  );
}

export default Comp;
