import styles from "./card.module.css";
import Link from "next/link";
import { Inter, Roboto } from "next/font/google";
import { RiArrowRightLine } from "react-icons/ri";
import Loader from "../loader/Loader";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function Card({ posts, loading }) {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <div key={post._id} className={`${styles.card} ${roboto.className}`}>
            <div className={styles.date}>{post?.createdAt.slice(0, 10)}</div>
            <div className={styles.asideContent}>
              <h2 className={styles.heading}>{post.title}</h2>
              <p className={styles.slug}>{post.slug}</p>
              <div>
                <div className={styles.more}>
                  <Link className={styles.moreLink} href={`/posts/${post._id}`}>
                    Read more
                  </Link>
                  <RiArrowRightLine className={styles.moreLinkIcon} />
                </div>
                <div>
                  <div>
                    <Link
                      className={styles.link}
                      href={`/deletePost/${post._id}`}
                    >
                      Delete
                    </Link>
                    <Link
                      className={styles.link}
                      href={`/updatePost/${post._id}`}
                    >
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
