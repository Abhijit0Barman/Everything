import React from "react";
import styles from "./Button.module.css";

function Button({ children, onClick }) {
  return (
    <button
      data-testid="common-button"
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
