import style from "./Paragraph.module.scss";
import { FC } from "react";

interface ParagraphProps {
    className?: string;
    type: string;
    children?: React.ReactNode;
}

const Paragraph:FC<ParagraphProps> = ({className, type, children}) =>{
    return(
        <div className={style["paragraph"] + " " + className}>
            <span className={style["paragraph__item"]  + " " + style["paragraph__item_" + type]}>
                {children}
            </span>
        </div>
    )
}

export default Paragraph;