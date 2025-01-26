import Post from "./Post";
import Modal from "./Modal";
import NewPost from "./NewPost";

import { useState } from "react";

function PostList() {
  const [enteredSomething, setEnteredSomething] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function somethingChangeHandler(event) {
    setEnteredSomething(event.target.value);
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onSomethingChange={somethingChangeHandler}
          onNameChange={nameChangeHandler}
        />
      </Modal>

      <hr />

      <div className="grid grid-cols-4 gap-4 mt-5">
        <Post name={enteredName} something={enteredSomething} />
        <Post name="Hendra" something="React.js is awesome!" />
        <Post name="Jason" something="Suka main game" />
        <Post name="Justin" something="Suka banget nangis" />
        <Post name="Tikus" something="suka gigit kabel" />
        <Post name="Anjing" something="Suka rusuh di rumah" />
        <Post name="Papi" something="Suka banget touring dan jalan jalan" />
      </div>
    </>
  );
}

export default PostList;
