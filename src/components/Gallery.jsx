import React, { useContext } from "react";
import LeftNav from "./Profile/LeftNav";
import TopNav from "./Profile/TopNav";
import { AppContext } from "../contextApi/ContextProvider";
import style from "../css/comingsoonpage.module.css"

const Gallery = () => {
  const { setShowProfile } = useContext(AppContext); 

  return (
    <div className={style.mainDiv}>
      <LeftNav />
      <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>Gallery</h2>
          <TopNav />
        </div>

        <hr style={{ color: "grey", width: "100%" }} />

        <div className={style.screen} onClick={() => setShowProfile(false)}>
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
