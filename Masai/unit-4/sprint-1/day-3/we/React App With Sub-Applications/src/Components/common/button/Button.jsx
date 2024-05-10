import styles from "./Button.module.css"

function Button(props) {
  const { handle, children } = props;
  return (
    <button
      onClick={handle}
      className={styles.button}
      data-testid="common-button"
    >
    {children}
    </button>
  )
}

export default Button;
