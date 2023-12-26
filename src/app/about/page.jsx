"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./aboutPage.module.css";
import { validEmail } from "../../components/regex/index";

export default function About() {
  const [mail, setMail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setEmailErr("err");
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [emailErr]);

  function handleSubmit(e) {
    e.preventDefault();

    validate();
    console.log(mail);
    setMail("");

    // setEmailErr("");
  }

  function validate() {
    if (!validEmail.test(mail)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
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
        <p>Software dev | Regular technical writer | Open source</p>
        <p></p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="">Subscribe to my posts</label>
        <div className={styles.container}>
          <div className={styles.inputGroup}>
            <input
              className={styles.mailBox}
              type="text"
              placeholder="Type your email..."
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <button className={styles.subscribe}>Subscribe</button>
          </div>
          <div className={styles.err}>{emailErr && "Invalid Email"}</div>
        </div>
      </form>
    </div>
  );
}
