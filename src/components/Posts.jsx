import React, { useContext } from "react";
import LeftNav from "./Profile/LeftNav";
import TopNav from "./Profile/TopNav";
import { AppContext } from "../contextApi/ContextProvider";
import style from "../css/comingsoonpage.module.css"

const Posts = () => {
  const { setShowProfile } = useContext(AppContext); // getting data from contest api
  return (
    <div className={style.mainDiv}>
      {/* --------- Left Navbar -------- */}
      <LeftNav />

      {/* ---------- Profile --------- */}
      <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>Posts</h2>
          <TopNav />
        </div>

        <hr style ={{ color: "grey", width: "100%" }} />

        {/* ---------- Screen ------- */}
        <div className={style.screen} onClick={() => setShowProfile(false)}>
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Posts;
