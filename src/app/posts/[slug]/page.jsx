import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { Roboto } from "next/font/google";
import styles from "./singlePage.module.css";
import Editor from "../../../components/myEditor/Editor.jsx";
import ModifySinglePost from "../../../components/modify/ModifySinglePost.jsx";
import LikeShare from "../../../components/likeShare/LikeShare";
// import { useTheme } from "next-themes";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const baseUrl = "http://localhost:3000";

const getPost = async (slug) => {
  const postsUrl = `${baseUrl}/api/posts/${slug}`;
  // const postsUrl = `/api/posts/${id}`;

  const res = await fetch(postsUrl, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

async function urlRestorer(unfilteredSlug) {
  return unfilteredSlug.replace(/-/g, " ");
}

export default async function SinglePage({ params }) {
  const { slug } = params;
  const newSlug = await urlRestorer(slug);
  // console.log(`-------newSlug: ${newSlug}---------`);

  const data = await getPost(newSlug);
  const { date, author } = data;
  // function getId(id) {
  //   return id;
  // }
  return (
    <div className={`${styles.card} ${roboto.className}`}>
      <div className={styles.meta}>
        <h3 className={styles.publish}>Published:</h3>{" "}
        <div className={styles.date}>{data?.createdAt.slice(0, 10)}</div>
        <div className={styles.by}>By: </div>{" "}
        <i>
          <h5>{data?.author}</h5>
        </i>
      </div>
      {/* Here */}
      {/* <ModifySinglePost id={params.id} /> */}
      <div className={styles.asideContent}>
        <h2 className={styles.heading}>{data?.title}</h2>
        <Editor data={data?.text} />
      </div>

      <div className={styles.likeShare}>
        <LikeShare slug={slug} />
      </div>
    </div>
  );
}
