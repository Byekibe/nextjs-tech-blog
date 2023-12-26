import Link from "next/link";
import styles from "./contactPage.module.css";
import {
  RiTwitterFill,
  RiGithubFill,
  RiLinkedinFill,
  RiYoutubeFill,
  RiMailLine,
} from "react-icons/ri";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.heading}>Contact:</h1>
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
};

export default Contact;
