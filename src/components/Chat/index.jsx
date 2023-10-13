import React, { useEffect, useState } from "react";
import style from "../../css/chat.module.css";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import { AppContext } from "../../contextApi/ContextProvider";

const Chat = ({ loggedUser }) => {
  const { data, loading, error, getAllData } = useContext(AppContext);
  const [hide, setHide] = useState(false);
  const [userChat, setUserChat] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    getAllData();
  }, []);

  const handleUserChat = (user) => {
    setUserChat(true);
    setUser(user);
  };

  if (loading) {
    return <h3 style={{ color: "teal" }}>Loading....</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>server error....</h3>;
  }
  return (
    <>
      {userChat && (
        <div
          className={style.mainDiv}
          style={{ marginTop: hide ? "-270px" : "20px", marginLeft: "20px" }}
        >
          <div onClick={() => setUserChat(false)} className={style.chat}>
            <div>
              <div className={style.maping_div}>
                <div>
                  <img
                    src={user.profilepicture}
                    className={style.chatImg}
                    alt="profile image"
                  />
                  <p className={style.subchatName}>{user.name}</p>
                </div>
              </div>
            </div>
            {hide ? <FiChevronDown /> : <FiChevronUp />}
          </div>
          <div className={style.profiles}>
            <div className={style.chatMessage}>
              <p className={style.senderName}>You:</p>
              <p>Hello, how are you?</p>
            </div>
            <div className={style.chatMessage}>
              <p className={style.receiverName}>{user.name}:</p>
              <p>I'm doing great, thanks for asking!</p>
            </div>
            {/* Input Box and Send Button */}
            <div className={style.inputContainer}>
              <input
                type="text"
                placeholder="Type your message..."
                className={style.chatInput}
              />
              <button className={style.sendButton}>Send</button>
            </div>
          </div>
        </div>
      )}
      <div
        className={style.mainDiv}
        style={{ marginTop: hide ? "-270px" : "20px" }}
      >
        <div
          onClick={() => {
            setHide(!hide);
            setUserChat(false);
          }}
          className={style.chat}
        >
          <div>
            <BsChatRight />
            <p>Chat</p>
          </div>
          {hide ? <FiChevronDown /> : <FiChevronUp />}
        </div>
        {hide ? (
          <div className={style.profiles}>
            {data &&
              data.map((el) => {
                if (loggedUser == el.id) return null;
                return (
                  <div key={el.id} onClick={() => handleUserChat(el)}>
                    <div className={style.maping_div}>
                      <div>
                        <img
                          src={el.profilepicture}
                          className={style.chatImg}
                          alt="profile image"
                        />
                        <p className={style.chatName}>{el.name}</p>
                      </div>
                      <span className={style.onlineDot} />
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Chat;
