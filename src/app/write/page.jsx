"use client";

import { useState } from "react";
import styles from './writePage.module.css';

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [body, setBody] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
// Here API ENDPOINT
    fetch("/nexty/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title, slug, body
        }),

        headers: { "content-type": "application/json" }
    }).catch(err => console.log(err));

    setTitle("");
    setSlug("");
    setBody("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.title}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <br />
      <div className={styles.slug}>
        <label htmlFor="slug">Slug</label>
        <input
          type="text"
          name="slug"
          value={slug}
          onChange={e => setSlug(e.target.value)} 
        />
      </div>
      <br />

      <div className={styles.myBody}>
        <label htmlFor="body">Body</label>
        <textarea 
          name="body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </div>
      <br />
      <button className={styles.button} type="submit">Publish</button>
    </form>
  )
}