import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftNav from "./LeftNav";
import ProfileBottom from "../ProfileBottom";
import TopNav from "./TopNav";
import { AppContext } from "../../contextApi/ContextProvider";
import style from "../../css/profile.module.css";

const Profile = () => {
  const { profileData, getFilterData, setShowProfile, showProfile } =
    useContext(AppContext);
  const { id } = useParams();
  sessionStorage.setItem("id", id);

  useEffect(() => {
    let userId = sessionStorage.getItem("id") || 1;
    getFilterData(userId);
  }, [id]);

  return (
    <div>
      <div className={style.HomeMain}>
        <LeftNav id={id}/>
        {profileData &&
          profileData.map((el) => (
            <div
              style={{ width: "80%" }}
              className={style.profile_top}
              key={el.id}
            >
              <div className={style.profile}>
                <h2>Profile</h2>
                <TopNav />
              </div>

              <hr />
              <div onClick={() => setShowProfile(false)}>
                <ProfileBottom {...el} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
