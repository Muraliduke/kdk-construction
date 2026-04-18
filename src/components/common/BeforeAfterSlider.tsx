import { useRef, useState, useEffect } from "react";
import styles from "./BeforeAfterSlider.module.css";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    title?: string;
}

export const BeforeAfterSlider = ({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    title
}: BeforeAfterSliderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const newPosition = ((clientX - rect.left) / rect.width) * 100;

        if (newPosition >= 0 && newPosition <= 100) {
            setSliderPosition(newPosition);
        }
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            handleMove(e.clientX);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return;
            handleMove(e.touches[0].clientX);
        };

        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            document.addEventListener("touchmove", handleTouchMove);

            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
                document.removeEventListener("touchmove", handleTouchMove);
            };
        }
    }, [isDragging]);

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        handleMove(e.clientX);
    };

    return (
        <div className={styles.sliderWrapper}>
            {title && <h3 className={styles.title}>{title}</h3>}
            <div
                ref={containerRef}
                className={styles.container}
                onClick={handleContainerClick}
            >
                {/* Before Image (Left) */}
                <div className={styles.imageWrapper}>
                    <img
                        src={beforeImage}
                        alt={beforeLabel}
                        className={styles.image}
                    />
                    <div className={styles.label}>{beforeLabel}</div>
                </div>

                {/* After Image (Right, clipped by slider position) */}
                <div
                    className={styles.imageWrapperAfter}
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                >
                    <img
                        src={afterImage}
                        alt={afterLabel}
                        className={styles.image}
                    />
                    <div className={styles.label}>{afterLabel}</div>
                </div>

                {/* Slider Handle */}
                <div
                    className={`${styles.handle} ${isDragging ? styles.dragging : ""}`}
                    style={{ left: `${sliderPosition}%` }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    <div className={styles.handleIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};
