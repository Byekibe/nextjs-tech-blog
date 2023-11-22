import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { Roboto } from "next/font/google";
import styles from "./singlePage.module.css";
import Editor from "../../../components/myEditor/Editor.jsx";
import ModifySinglePost from "../../../components/modify/ModifySinglePost.jsx";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

const getPost = async (id) => {
  // const postsUrl =
  //   process.env.NODE_ENV === "development"
  //     ? `http://localhost:3000/api/posts/${id}`
  //     : `/api/posts/${id}`;
  const postsUrl = `http://localhost:3000/api/posts/${id}`;

  const res = await fetch(postsUrl, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export default async function SinglePage({ params }) {
  const { id } = params;
  const data = await getPost(id);
  const { date, author } = data;
  function getId(id) {
    return id;
  }
  return (
    <div className={`${styles.card} ${roboto.className}`}>
      Published:{" "}
      <div className={styles.date}>{data?.createdAt.slice(0, 10)}</div> by{" "}
      <i>
        <h5>{data?.author}</h5>
      </i>
      {/* Here */}
      {/* <ModifySinglePost id={params.id} /> */}
      <div className={styles.asideContent}>
        <h2 className={styles.heading}>{data?.title}</h2>
        <Editor data={data?.text} />
      </div>
    </div>
  );
}
