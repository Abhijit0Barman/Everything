import styles from "./Container.module.css";

function Container({children}) {
  return <div className={styles.container} data-testid="common-container">{children}</div>;
}

export default Container;
