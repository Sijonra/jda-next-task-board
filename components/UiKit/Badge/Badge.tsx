import { FC } from "react";
import style from "./Badge.module.scss";

interface BadgeProps {
  className?: string;
  type: string;
  theme: string;
  color: string;
  text: string;
}

const Badge: FC<BadgeProps> = ({ className, type, theme, color, text }) => {
  return (
    <div
      className={
        style["badge"] +
        " " +
        style[theme] +
        " " +
        style[theme + "__" + color] +
        " " +
        style["badge__" + type] +
        " " +
        className
      }
    >
      <span className={style["badge__text"]}>{text}</span>
    </div>
  );
};

export default Badge;
