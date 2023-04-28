import Demos from "./demos";
import styles from "../../styles/content.module.css";
import ContentNav from "./nav";

export default function Content() {
  return (
    <div className={styles.container}>
      <ContentNav />
      test
      <Demos />
    </div>
  );
}
