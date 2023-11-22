"use client";

import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./modify.module.css";

const ModifySinglePost = ({ id }) => {
  const postId = ObjectId(id);

  console.log(postId);

  function handleEdit(postId) {
    console.log(`Clicked post of id: ${postId}`);
  }

  return (
    <div className={styles.modify}>
      <MdEdit onClick={handleEdit} className={styles.editPen} /> ||{" "}
      <FaTrashAlt className={styles.trash} />
    </div>
  );
};

export default ModifySinglePost;
