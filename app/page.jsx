import Image from "next/image";
import styles from "./page.module.css";
import ImageSlider from "@/component/imageSlider/imageSlider";

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
            src="/hero.png"
            width={250}
            height={250}
            alt="Hero"
          />
          <button className={styles.check_button}>Check availability</button>
        </div>
      </div>
      <div className={styles.products}>Products</div>
      <ImageSlider />
    </>
  );
}
