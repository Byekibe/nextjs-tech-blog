"use client";

import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import {
  RiMenuFill,
  RiTwitterFill,
  RiGithubFill,
  RiYoutubeFill,
  RiLinkedinFill,
  RiCloseFill,
  RiCloseCircleFill,
  RiSunLine,
  RiMoonClearLine,
  RiMailLine,
} from "react-icons/ri";
import { MenuContext } from "@/context/MenuContext";
import { useTheme } from "next-themes";

export default function Header() {
  const { showMenu, toggleMenu } = useContext(MenuContext);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : "undefined"
  );
  const [scrollDelta, setScrollDelta] = useState(
    typeof window !== "undefined" ? window.scrollY : "undefined"
  );
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    toggleMenu();
  };

  const handleClickLargeScreen = () => {
    toggleMenu();
  };

  const handleScroll = (event) => {
    setScrollDelta(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });

      return () => {
        window.removeEventListener("resize", setWidth(window.innerWidth));
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h1 className={styles.heading}>ByeDev</h1>
        </Link>
      </div>
      <div
        style={{
          top: !showMenu ? "-8em" : "1.375em",
          display: width > 640 ? "none" : "flex",
          backgroundColor: theme === "light" ? "gray" : "black",
          color: theme === "light" ? "#fff" : "#fff",
        }}
        className={styles.linksSmallScreen}
      >
        <Link className={styles.linkSmallScreen} href="/">
          Home
        </Link>
        <Link className={styles.linkSmallScreen} href="/about">
          About
        </Link>
        <Link className={styles.linkSmallScreen} href="/contact">
          Contact
        </Link>
        {/* onClick={handleThemeToggle} */}
        <button onClick={() => setTheme("light")}>
          <RiSunLine />
        </button>
        <button onClick={() => setTheme("dark")}>
          <RiMoonClearLine />
        </button>
        <button onClick={handleClick}>
          {scrollDelta > 200 ? (
            <RiCloseCircleFill className={styles.closeCircle} />
          ) : (
            ""
          )}
        </button>
      </div>
      <button onClick={handleClick} className={styles.menu}>
        {!showMenu ? (
          <RiMenuFill className={styles.menuSize} />
        ) : (
          <RiCloseFill className={styles.menuSize} />
        )}
      </button>
      <div
        style={{
          top: showMenu ? "1em" : "1em",
          backgroundColor: theme === "light" ? "gray" : "black",
          color: theme === "light" ? "#fff" : "#fff",
          border: "2px solid #ffff80",
        }}
        className={styles.links}
      >
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
        {/* onClick={handleThemeToggle} */}
        <button onClick={() => setTheme("light")}>
          <RiSunLine />
        </button>
        <button onClick={() => setTheme("dark")}>
          <RiMoonClearLine />
        </button>

        {/* {theme? <button onClick={handleThemeToggle}>{< RiSunLine/>}</button>: <button onClick={handleThemeToggle}><RiMoonClearLine /></button>} */}
        <button onClick={handleClickLargeScreen}>
          {scrollDelta > 200 ? (
            <RiCloseCircleFill className={styles.closeCircle} />
          ) : (
            ""
          )}
        </button>
      </div>
      <div className={styles.socials}>
        <Link
          className={styles.social}
          href="https://twitter.com/kibetpete"
          target="_blank"
        >
          <RiTwitterFill className={styles.socialIcon} />
        </Link>
        <Link
          className={styles.social}
          href="https://github.com/Byekibe"
          target="_blank"
        >
          <RiGithubFill className={styles.socialIcon} />
        </Link>
        <Link
          className={styles.social}
          href="https://www.linkedin.com/in/byekibe/"
          target="_blank"
        >
          <RiLinkedinFill className={styles.socialIcon} />
        </Link>
        <Link className={styles.social} href="mailto:kibetpeter95@gmail.com">
          <RiMailLine className={styles.socialIcon} />
        </Link>
      </div>
    </header>
  );
}
