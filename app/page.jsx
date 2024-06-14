import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.description_container}>
          <p className={styles.description}>
            All types of poultry, cattle and piggery feeds available at
            wholesale price
          </p>
          <Image
            className={styles.background_image}
            src={"/hero.png"}
            width={250}
            height={250}
          />
          <button className={styles.check_button}>Check availability</button>
        </div>
      </div>
      <div className={styles.products}>Products</div>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={"/a.jpg"}
          width={250}
          height={250}
        />
        <Image
          className={styles.image}
          src={"/b.jpg"}
          width={250}
          height={250}
        />
        <Image
          className={styles.image}
          src={"/c.jpg"}
          width={250}
          height={250}
        />
        <Image
          className={styles.image}
          src={"/d.jpg"}
          width={250}
          height={250}
        />
        <Image
          className={styles.image}
          src={"/e.jpg"}
          width={250}
          height={250}
        />
        <Image
          className={styles.image}
          src={"/f.jpg"}
          width={250}
          height={250}
        />
        <Image
          className={styles.image}
          src={"/g.jpg"}
          width={250}
          height={250}
        />
        <Image
          className={styles.image}
          src={"/h.jpg"}
          width={250}
          height={250}
        />
      </div>
    </>
  );
}
