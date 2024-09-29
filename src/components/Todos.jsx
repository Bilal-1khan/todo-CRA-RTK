import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todos) => (
        <div key={todos.id} className="w-[20rem] p-4 bg-white rounded-xl m-2">
          <div>
            <h1 className="font-bold text-3xl text-slate-800 cursor-default uppercase">
              {todos.title}
            </h1>
          </div>
          <div>
            <p className="text-justify font-semibold my-3 text-slate-700 capitalize">
              {todos.content}
            </p>
          </div>
          <div className="text-end">
            <button 
            onClick={()=>dispatch(removeTodo(todos.id))}
            className="bg-red-700 text-white capitalize cursor-pointer px-4 py-2 rounded-xl">
              delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todos;
