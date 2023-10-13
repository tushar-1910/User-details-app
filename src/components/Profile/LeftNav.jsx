import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import style from "../../css/profile.module.css";

const LeftNav = ({ id: loggedUser }) => {
  const [id, setId] = useState(sessionStorage.getItem("id") || loggedUser);

  useEffect(() => {
    setId(sessionStorage.getItem("id") || loggedUser);
  }, [loggedUser]);

  return (
    <div className={style.mainDiv}>
      <NavLink
        to={`/profilepage/${id}`}
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
      >
        <p>Profile</p>
      </NavLink>

      <hr />

      <NavLink
        to="/post"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
      >
        <p>Posts</p>
      </NavLink>

      <hr />

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
      >
        <p>Gallery</p>
      </NavLink>

      <hr />

      <NavLink
        to="/todo"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
      >
        <p>ToDo</p>
      </NavLink>
    </div>
  );
};

export default LeftNav;
