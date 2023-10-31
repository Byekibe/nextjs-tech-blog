"use client";

import { RiArrowUpLine } from 'react-icons/ri';
import styles from './scrollup.module.css';

export default function ScrollUp() {
    return (
        <div style={styles.container}>
            <RiArrowUpLine className={styles.arrowUp} />
        </div>
    )
}