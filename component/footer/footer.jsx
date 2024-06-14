import Link from "next/link";
import styles from "./footer.module.css";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer_container}>
        <h4>Address</h4>
        <div className={styles.footer_item}>
          Chumukedima, 4th mile, <br />
          Diphupar, Nagaland
          <br />
          Pin code: 797103
        </div>
      </div>
      <div className={styles.footer_container}>
        <h4>Contact</h4>
        <div className={styles.footer_item}>
          Email: zaveto@gmail.com
          <br />
          Phone no. : 7005659677
        </div>
      </div>
      <div className={styles.footer_container}>
        <h4>Follow us</h4>
        <div className={styles.icon_container}>
          <Link
            className={styles.icon}
            href={
              "https://www.instagram.com/poultry_feeds_dmp?igsh=MXA4MGZiOZM5MWh6Yg=="
            }
          >
            <FaInstagramSquare />
          </Link>
          <Link className={styles.icon} href="#">
            <FaFacebookSquare />
          </Link>
          <Link className={styles.icon} href="#">
            <FaSquareXTwitter />
          </Link>
        </div>
      </div>
      <div className={styles.designed_by_container}>
        <hr className={styles.hr} />
        <p className={styles.designed_by}>Designed by emanekho@gmail.com</p>
      </div>
    </div>
  );
}
