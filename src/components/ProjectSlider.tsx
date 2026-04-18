import { BeforeAfterSlider } from "./common/BeforeAfterSlider";
import styles from "./ProjectSlider.module.css";
import { Reveal } from "./common/Reveal";

interface ProjectSliderProps {
    beforeImage: string;
    afterImage: string;
    projectName: string;
}

export const ProjectSlider = ({ beforeImage, afterImage, projectName }: ProjectSliderProps) => {
    return (
        <div className={styles.container}>
            <Reveal>
                <div className={styles.header}>
                    <h2 className={styles.title}>{projectName}</h2>
                    <p className={styles.subtitle}>Project Transformation</p>
                </div>
            </Reveal>
            <Reveal delay={100}>
                <BeforeAfterSlider
                    beforeImage={beforeImage}
                    afterImage={afterImage}
                    beforeLabel="Under Construction"
                    afterLabel="Completed"
                />
            </Reveal>
        </div>
    );
};
