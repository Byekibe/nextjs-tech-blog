"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./aboutPage.module.css";

export default function About() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.about}>
      <Image
        className={styles.avatar}
        src="/myAvatar.JPG"
        height={300}
        width={300}
        alt="Avatar of Peter Kibet"
      />
      <p className={styles.name}>PETER KIBET BYEGON</p>
      <div>
        <p>Software dev</p>
        <p></p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="">Subscribe to my posts</label>
        <div className={styles.inputGroup}>
          <input
            className={styles.mailBox}
            type="text"
            placeholder="Type your email..."
          />
          <button className={styles.subscribe}>Subscribe</button>
        </div>
      </form>
    </div>
  );
}
