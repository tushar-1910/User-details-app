import React, { useContext, useEffect } from "react";
import { AppContext } from "../../contextApi/ContextProvider";
import style from "../../css/profile.module.css";
import ProfileDetails from "./ProfileDetails";

const TopNav = () => {
  const { profileData, setShowProfile, showProfile, getFilterData } =
    useContext(AppContext);

  useEffect(() => {
    const ID = sessionStorage.getItem("id") || 1;
    getFilterData(Number(ID));
  }, []);

  return (
    <div>
      <div
        onClick={() => setShowProfile(!showProfile)}
        className={style.profile}
      >
        <img src={profileData[0]?.profilepicture} alt="profile img" />
        <p>{profileData[0]?.name}</p>
      </div>
      <ProfileDetails />
    </div>
  );
};

export default TopNav;
