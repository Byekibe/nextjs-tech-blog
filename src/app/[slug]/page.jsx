import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';
import { Roboto } from 'next/font/google';
import styles from './singlePage.module.css';

const roboto = Roboto({ subsets: ["latin"], weight: ['400'] });

export default function GET() {
    return (
        <div className={`${styles.card} ${roboto.className}`}>
            <div className={styles.date}>10 January, 2021</div>
            <div className={styles.asideContent}>
            <h2 className={styles.heading}>Cloud computing</h2>
            <p className={styles.slug}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Vel iusto eum fuga nam aut animi, id ut sit.
            </p>
            </div>
        </div>
    );
};