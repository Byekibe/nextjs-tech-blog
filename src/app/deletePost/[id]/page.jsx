"use client";

import styles from "./deleteSpecificPost.module.css";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import UpdatePage from "../../updatePage/page";
import { useState } from "react";

export default function Modify({ params }) {
  const router = useRouter();
  const { id } = params;
  console.log(id);
  function handlePostDelete() {
    fetch(`http://localhost:3000/api/posts/${id}`, {
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
