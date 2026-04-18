import styles from "./CheckItem.module.css";

export const CheckItem = ({ text }: { text: string }) => (
    <div className={styles.wrapper}>
        <span className={styles.icon}>✓</span>
        <span className={styles.text}>{text}</span>
    </div>
);
