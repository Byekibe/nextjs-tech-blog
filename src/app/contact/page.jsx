import Link from "next/link";
import styles from "./contactPage.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <button className={styles.myBtn}>
        <Link href="http://peter-techie.com/contacts" target="_blank">
          Contact
        </Link>
      </button>
    </div>
  );
};

export default Contact;
