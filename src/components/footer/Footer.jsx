import Link from "next/link";
import {
  RiTwitterFill,
  RiGithubFill,
  RiLinkedinFill,
  RiYoutubeFill,
  RiMailLine,
} from "react-icons/ri";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>&copy; Peter Kibet Byegon 2023</div>
      <div className={styles.socials}>
        <Link className={styles.social} href="https://twitter.com/kibetpete">
          <RiTwitterFill className={styles.socialIcon} />
        </Link>
        <Link className={styles.social} href="https://github.com/Byekibe">
          <RiGithubFill className={styles.socialIcon} />
        </Link>
        <Link
          className={styles.social}
          href="https://www.linkedin.com/in/byekibe/"
        >
          <RiLinkedinFill className={styles.socialIcon} />
        </Link>
        <Link className={styles.social} href="mailto:kibetpeter95@gmail.com">
          <RiMailLine className={styles.socialIcon} />
        </Link>
      </div>
    </div>
  );
}
