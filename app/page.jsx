import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.description_container}>
        <p className={styles.description}>
          All types of poultry, cattle and piggery feeds available at wholesale
          price
        </p>
        <button className={styles.check_button}>Check availability</button>
      </div>
    </div>
  );
}
