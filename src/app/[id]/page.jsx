import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { Roboto } from "next/font/google";
import styles from "./singlePage.module.css";
import Editor from "../../components/myEditor/Editor.jsx";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

const getPost = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
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
  return (
    <div className={`${styles.card} ${roboto.className}`}>
      <div className={styles.date}>10 January, 2021</div>
      <div className={styles.asideContent}>
        <h2 className={styles.heading}>{data?.title}</h2>
        <Editor data={data?.text} />
      </div>
    </div>
  );
}
