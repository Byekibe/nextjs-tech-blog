"use client";

import { useState, useEffect } from "react";
import styles from "./update.module.css";
import sanitizeHtml from "sanitize-html";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useRouter } from "next/navigation";

const sanitize = (html) => sanitizeHtml(html);

export default function UpdateForm({ data, id }) {
  const router = useRouter();
  const [title, setTitle] = useState(data.title);
  const [slug, setSlug] = useState(data.slug);
  const [text, setText] = useState(data.text);
  const [author, setAuthor] = useState(data.author);

  function handlePostUpdate(e) {
    e.preventDefault();
    // const putUrl = `http://localhost:3000/api/posts/${id}`;
    const putUrl = `/api/posts/${id}`;
    console.log(putUrl);
    fetch(putUrl, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        slug: slug,
        text: text,
        author: author,
      }),
      headers: { "content-type": "application/json" },
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
        Update
      </button>
    </form>
  );
}
