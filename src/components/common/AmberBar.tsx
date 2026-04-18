import styles from "./AmberBar.module.css";

export const AmberBar = ({ width = 64, mt = 20, mb = 20 }: any) => (
    <div 
        className={styles.bar} 
        style={{ width, marginTop: mt, marginBottom: mb }} 
    />
);
