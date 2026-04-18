import { useInView } from "../../hooks/useInView";
import styles from "./Reveal.module.css";

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    style?: React.CSSProperties;
}

export const Reveal = ({ children, delay = 0, style = {} }: RevealProps) => {
    const [ref, inView] = useInView();
    
    return (
        <div 
            ref={ref as any} 
            className={`${styles.reveal} ${inView ? styles.inView : ""}`}
            style={{ 
                ...style,
                "--reveal-delay": `${delay}ms` 
            } as any}
        >
            {children}
        </div>
    );
};
