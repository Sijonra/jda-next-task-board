import style from "./Heading.module.scss";
import { FC } from "react";

interface HeadingProps {
  className?: string;
  type: string;
  children?: React.ReactNode;
}

const Heading: FC<HeadingProps> = ({ className, type, children }) => {
  return (
    <div className={style["heading"] + " " + className}>
      {type === "jumbo" && (
        <h1
          className={
            style["heading__item_" + type] + " " + style["heading__item"]
          }
        >
          {children}
        </h1>
      )}
      {type === "oversized" && (
        <h2
          className={
            style["heading__item_" + type] + " " + style["heading__item"]
          }
        >
          {children}
        </h2>
      )}
      {type === "introduction" && (
        <h3
          className={
            style["heading__item_" + type] + " " + style["heading__item"]
          }
        >
          {children}
        </h3>
      )}
      {type === "key" && (
        <h4
          className={
            style["heading__item_" + type] + " " + style["heading__item"]
          }
        >
          {children}
        </h4>
      )}
      {type === "sub" && (
        <h5
          className={
            style["heading__item_" + type] + " " + style["heading__item"]
          }
        >
          {children}
        </h5>
      )}
      {type === "deep" && (
        <h5
          className={
            style["heading__item_" + type] + " " + style["heading__item"]
          }
        >
          {children}
        </h5>
      )}
      {type === "list-item" && (
        <h5
          className={
            style["heading__item_" + type] + " " + style["heading__item"]
          }
        >
          {children}
        </h5>
      )}
      {type === "low" && (
        <h5
          className={
            style["heading__item_" + type] + " " + style["heading__item"]
          }
        >
          {children}
        </h5>
      )}
      {type === "lowest" && (
        <h5
          className={
            style["heading__item_" + type] + " " + style["heading__item"]
          }
        >
          {children}
        </h5>
      )}
    </div>
  );
};

export default Heading;
