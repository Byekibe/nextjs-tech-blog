"use client";

import { useState, useEffect } from "react";
import styles from "./updatePage.module.css";
import sanitizeHtml from "sanitize-html";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useRouter } from "next/navigation";
import { baseUrl } from "../page";

const sanitize = (html) => sanitizeHtml(html);

export default function UpdatePage({ postId }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [data, setData] = useState([]);

  console.log(data);

  function handlePostUpdate() {
    fetch(`${baseUrl}/api/posts/${postId}`, {
      method: "PUT",
    }).catch((err) => console.log(err));

    router.push("/");
  }

  return (
    <form onSubmit={handlePostUpdate}>
      <div className={styles.title}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />
      <div className={styles.slug}>
        <label htmlFor="slug">Slug</label>
        <input
          type="text"
          name="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
      </div>
      <br />
      <div className={styles.author}>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <br />
      <div className={styles.myBody}>
        <label htmlFor="body">Body</label>
        {/* <textarea 
          name="body"
          value={body}
          onChange={e => setBody(e.target.value)}
        /> */}
        <MdEditor
          theme="dark"
          modelValue={text}
          onChange={setText}
          sanitize={sanitize}
          language="en-US"
        />
      </div>
      <br />
      <button className={styles.button} type="submit">
        Edit
      </button>
    </form>
  );
}
