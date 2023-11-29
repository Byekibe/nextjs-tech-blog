"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const redirectUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://byedev.com";

export default function LoginPage() {
  const router = useRouter();
  const { data, status } = useSession();
  //   if (status === "authenticated") {
  //     router.push("/");
  //   }
  return (
    <div className={styles.login}>
      <button
        onClick={() =>
          signIn("google", {
            redirect: true,
            callbackUrl: redirectUrl,
          })
        }
        className={styles.myBtn}
      >
        <div className={styles.icon}>
          <FcGoogle />
          Login
        </div>
      </button>

      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
