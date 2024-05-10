import styles from "./MobileInfo.module.css";

const MobileInfo = () => {
  return (
    <div data-testid="mobile_info" className={styles.container}>
      <h1 className={styles.heading}>Mobile Operating System</h1>
      <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
      </ul>
      <h1 className={styles.heading}>Mobile Manufacturers</h1>
      <ul>
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li>Apple</li>
      </ul>
    </div>
  );
};
export default MobileInfo;
