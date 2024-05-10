import styles from "./MobileInfo.module.css"

const MobileInfo = () => {
  return <div className={styles.container} data-testid="mobile_info">
    <h1 className={styles.heading}>Mobile Operating System</h1>
    <ul>
      <li>Android</li>
      <li>Blackberry</li>
      <li>iPhone</li>
      <li>Windows Phone</li>
    </ul>
    <h1 className={styles.heading}>Mobile Manufacture</h1>
    <ul>
      <li>Samsung</li>
      <li>HTC</li>
      <li>Micromax</li>
      <li>Apple</li>
    </ul>
  </div>;
};
export default MobileInfo;
