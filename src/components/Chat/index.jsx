import React, { useEffect, useState } from "react";
import style from "../../css/chat.module.css";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import { AppContext } from "../../contextApi/ContextProvider";

const Chat = () => {
  const { data, loading, error, getAllData } = useContext(AppContext);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    getAllData();
  }, []);

  if (loading) {
    return <h3 style={{ color: "teal" }}>Loading....</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>server error....</h3>;
  }
  return (
    <div
      className={style.mainDiv}
      style={{ marginTop: hide ? "-270px" : "20px" }}
    >
      <div onClick={() => setHide(!hide)} className={style.chat}>
        <div>
          <BsChatRight />
          <p>Chat</p>
        </div>
        {hide ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {hide ? (
        <div className={style.profiles}>
          {data &&
            data.map((el) => (
              <div key={el.id}>
                <div className={style.maping_div}>
                  <img src={el.profilepicture} alt="profile image" />
                  <p>{el.name}</p>
                </div>
                <hr />
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
