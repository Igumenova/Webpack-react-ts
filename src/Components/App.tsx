import React, { useState } from "react";
import * as classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import pictureJpg from "@/assets/picture.jpg";
import picturePng from "@/assets/picture.png";
import PictureSvg from "@/assets/iconsec.svg";

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <div>
        <img width={100} height={100} src={pictureJpg} alt=""></img>
      </div>
      <div>
        <img width={100} height={100} src={picturePng} alt=""></img>
      </div>
      <div>
        <PictureSvg className={classes.icon} width={50} height={50} />
      </div>

      <Link to={"/about"}>about</Link>
      <Link to={"/shop"}>shop</Link>

      <h1>{count}</h1>
      <button className={classes.button} onClick={increment}>
        <span>inddc</span>
      </button>

      <Outlet />
    </div>
  );
};
