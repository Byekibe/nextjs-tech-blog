"use client";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import styles from "./likeShare.module.css";
import { useState } from "react";

export default function LikeShare({ slug }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  function handleShare() {
    console.log("Shared");
  }

  function handleLike() {
    if (liked === false) {
      setLikes((prevLikes) => prevLikes + 1);
      setLiked((prevState) => !prevState);
    } else {
      setLikes((prevLikes) => prevLikes - 1);
      setLiked((prevState) => !prevState);
    }
  }
  return (
    <div className={styles.likeshare}>
      <div className={styles.heart} onClick={handleLike}>
        {liked ? (
          <FaHeart style={{ color: "red" }} className={styles.heartIcon} />
        ) : (
          <FaRegHeart />
        )}
        <div className={styles.likesNumber}>{likes}</div>
      </div>
      <div className={styles.share}>
        <FaShareAlt onClick={handleShare} className={styles.shareIcon} />
      </div>
    </div>
  );
}
