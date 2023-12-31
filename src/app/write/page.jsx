"use client";

import { useState } from "react";
import styles from "./writePage.module.css";
import sanitizeHtml from "sanitize-html";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useRouter } from "next/navigation";
import { baseUrl } from "../page";
import { useTheme } from "next-themes";

const sanitize = (html) => sanitizeHtml(html);

export default function WritePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const { theme, setTheme } = useTheme();

  async function handleSubmit(e) {
    e.preventDefault();
    // Here API ENDPOINT
    // const writeUrl =
    //   process.env.NODE_ENV === "development"
    //     ? "http://localhost:3000/api/posts"
    //     : "/api/posts";
    // console.log(writeUrl);

    const writeUrl = "/api/posts";

    // const writeUrl = `${baseUrl}/api/posts`;

    fetch(writeUrl, {
      method: "POST",
      body: JSON.stringify({
        title,
        slug,
        author,
        text,
      }),

      headers: { "content-type": "application/json" },
    }).catch((err) => console.log(err));

    setTitle("");
    setSlug("");
    setText("");
    setAuthor("");

    router.push("/");
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
          theme={theme}
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
