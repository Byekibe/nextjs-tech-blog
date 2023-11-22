import Link from "next/link";
import styles from "./aboutPage.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <button className={styles.myBtn}>
        <Link target="_blank" href="http://peter-techie.com/about">
          About
        </Link>
      </button>
    </div>
  );
}
