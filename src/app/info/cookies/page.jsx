import Link from "next/link";
import styles from "./cookies.module.css";

export default function cookiePolicy() {
  return (
    <div>
      <h1 className={styles.header}>Cookie policy</h1>
      <p>
        Please read this cookie policy ("cookie policy", "policy") carefully
        before using [website] website ("website", "service") operated by [name]
        ("us", "we", "our").
      </p>
      <h3 className={styles.subHeader}>What are cookies?</h3>
      <p>
        {" "}
        Cookies are simple text files that are stored on your computer or mobile
        device by a website's server. Each cookie is unique to your web browser.
        It will contain some anonymous information such as a unique identifier,
        website's domain name, and some digits and numbers.
      </p>
      <h3 className={styles.subHeader}>What types of cookies do we use?</h3>
      <h4 className={styles.smallHeading}>Necessary cookies</h4>
      <p>
        {" "}
        Necessary cookies allow us to offer you the best possible experience
        when accessing and navigating through our website and using its
        features. For example, these cookies let us recognize that you have
        created an account and have logged into that account.
      </p>
      <h4 className={styles.smallHeading}>Functionality cookies</h4>
      <p>
        {" "}
        Functionality cookies let us operate the site in accordance with the
        choices you make. For example, we will recognize your username and
        remember how you customized the site during future visits.
      </p>
      <h4 className={styles.smallHeading}>Analytical cookies</h4>
      <p>
        {" "}
        These cookies enable us and third-party services to collect aggregated
        data for statistical purposes on how our visitors use the website. These
        cookies do not contain personal information such as names and email
        addresses and are used to help us improve your user experience of the
        website.
        <h4 className={styles.smallHeading}>How to delete cookies?</h4>
        If you want to restrict or block the cookies that are set by our
        website, you can do so through your browser setting. Alternatively, you
        can visit{" "}
        <Link href="https://www.internetcookies.com">
          <span className={styles.link}>www.internetcookies.com</span>
        </Link>
        , which contains comprehensive information on how to do this on a wide
        variety of browsers and devices. You will find general information about
        cookies and details on how to delete cookies from your device.
        <h4 className={styles.smallHeading}>Contacting us</h4>
        If you have any questions about this policy or our use of cookies,
        please{" "}
        <Link href="/contact">
          <span className={styles.contact}>contact</span>
        </Link>{" "}
        us.
      </p>
    </div>
  );
}
