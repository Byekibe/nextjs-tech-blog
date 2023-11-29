"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./authgroup.module.css";

export default function AuthGroup({ slug }) {
  const { data, status } = useSession();

  //   console.log(data, status);

  return (
    <div>
      {status === "authenticated" &&
        data.user.email === "kibetpeter95@gmail.com" && (
          <div>
            <Link className={styles.link} href={`/deletePost/${slug}`}>
              Delete
            </Link>
            <Link className={styles.link} href={`/updatePost/${slug}`}>
              Update
            </Link>
            <Link className={styles.link} href={`/write`}>
              Write
            </Link>
          </div>
        )}
    </div>
  );
}
