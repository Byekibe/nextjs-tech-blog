"use client";

import { useState } from "react";
import styles from "./writePage.module.css";
import sanitizeHtml from "sanitize-html";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";

const sanitize = (html) => sanitizeHtml(html);

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // Here API ENDPOINT
    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        slug,
        text,
      }),

      headers: { "content-type": "application/json" },
    }).catch((err) => console.log(err));

    setTitle("");
    setSlug("");
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
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
        Publish
      </button>
    </form>
  );
}
