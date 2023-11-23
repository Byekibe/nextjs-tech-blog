"use client";

import styles from "./deleteSpecificPost.module.css";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import UpdatePage from "../../updatePage/page";
import { useState } from "react";
// import { baseUrl } from "@/app/page";
const baseUrl = "http://localhost:3000";

export default function Modify({ params }) {
  const router = useRouter();
  const { id } = params;
  const deletePostUrl = `${baseUrl}/api/posts/${id}`;
  console.log(deletePostUrl);

  const deletePostUrlUsed = `/api/posts/${id}`;

  function handlePostDelete() {
    fetch(deletePostUrlUsed, {
      method: "POST",
    }).catch((err) => console.log(err));

    router.push("/");
  }

  return (
    <div className={styles.modify}>
      <button onClick={handlePostDelete} className={styles.trashBtn}>
        <FaTrashAlt className={styles.trash} />
        Delete
      </button>
    </div>
  );
}
