import styles from './card.module.css';
import Link from 'next/link';
import { Inter, Roboto } from 'next/font/google';
import { RiArrowRightLine } from 'react-icons/ri';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ['400'] });

export default function Card() {
    return (
        <div className={`${styles.card} ${roboto.className}`}>
            <div className={styles.date}>10 January, 2021</div>
            <div className={styles.asideContent}>
            <h2 className={styles.heading}>Cloud computing</h2>
            <p className={styles.slug}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Vel iusto eum fuga nam aut animi, id ut sit.
            </p>
            <div className={styles.more}>
                <Link className={styles.moreLink} href="/shjshjsj">Read more</Link>
                <RiArrowRightLine className={styles.moreLinkIcon} />
            </div>
            </div>
        </div>
    );
};