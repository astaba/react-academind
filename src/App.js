import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import ErrorModal from "./components/ErrorModal";

const DEFAULT_MODAL = {
  display: false,
  title: "Modal",
  message: "No message yet.",
};

export default function App() {
  const [usersList, setUsersList] = useState([]);
  const [modal, setModal] = useState(DEFAULT_MODAL);

  const addNewUser = (newUser) => {
    setUsersList((prevList) => {
      const newList = prevList.concat({
        ...newUser,
        id: Math.random(),
      });
      return newList;
    });
  };

  const hideModal = () => {
    setModal(DEFAULT_MODAL);
  };

  const displayModal = (title, message) => {
    setModal({
      display: true,
      title: title,
      message: message,
    });
  };

  return (
    <div>
      <AddUser displayModal={displayModal} addNewUser={addNewUser} />
      {usersList.length && <UsersList list={usersList} />}
      {modal.display && (
        <ErrorModal
          title={modal.title}
          message={modal.message}
          hideModal={hideModal}
        />
      )}
    </div>
  );
}
