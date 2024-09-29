import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { addTodo } from "../features/todoSlice";

function TodoForm() {
  const [userTodo, setUserTodo] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch()

  function UserInput(event) {
    const targetedValue = event.target;
    const { name, value } = targetedValue;
    setUserTodo((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  }

  function handelSubmit(event) {
    event.preventDefault();
    dispatch(addTodo(userTodo))
    setUserTodo({
      title: "",
      content: "",
    });
  }
  return (
    <>
      <div className="w-[30rem] p-4 rounded-xl mx-auto my-2 bg-slate-400">
        <form action="" onSubmit={handelSubmit}>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={userTodo.title}
              onChange={UserInput}
              name="title"
              className="w-full px-3 py-2 my-2 rounded-xl"
            />
          </div>
          <div>
            <textarea
              name="content"
              id=""
              placeholder="Write something"
              value={userTodo.content}
              onChange={UserInput}
              className="w-full px-3 py-2 my-2 rounded-xl"
            ></textarea>
          </div>
          <div className="text-end">
            <button
              type="submit"
              className="px-4 py-2 rounded-xl cursor-pointer bg-black text-white capitalize"
            >
              add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
