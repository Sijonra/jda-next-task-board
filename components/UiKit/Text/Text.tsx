import style from "./Text.module.scss";
import { FC } from "react";

interface TextProps {
    className?: string;
    type: string;
    weight: string;
    children?: React.ReactNode;
}

const Text:FC<TextProps> = ({className, type, weight, children}) =>{
    return(
        <div className={style["text"] + " " + className}>
            <span className={style["text__item"]  + " " + style["text__item_" + type]  + " " + style["text__item_" + weight]}>
                {children}
            </span>
        </div>
    )
}

export default Text;