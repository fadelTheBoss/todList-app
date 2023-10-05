import { useEffect, useState } from "react";
import { useTaskContext } from "../context/Context";
import { styles } from "./styles";
const TaskItems = () => {
  const { state, dispatch } = useTaskContext();
  const item = state.items;


  {
    return item.map((task) => {
      return (
        <div
          className="p-2 mt-6 flex justify-center items-center gap-4 "
          key={task.id}
        >
          <input type="checkbox" className="w-6 h-6 cursor-pointer "
          onClick={()=>dispatch({
            type: "finishTask",
            payload: {
              id: task.id,
              isFinish: task.isFinish
            }
          })}
           />
          <input
            type="text"
            className={`${styles.inputBox} ${task.isFinish?"line-through text-red-500":""} flex-1 text-xl`}
            defaultValue={task.name}
            readOnly={task.isReadOnly}
            onChange={(e) => dispatch({
              type:  "handleNewValue",
              payload: {
                value: e.target.value,
                id: task.id
              }
            })}
          />
          <div className="flex justify-end gap-1">
            <button
              className="hover:scale-90 text-lg"
              onClick={() =>
                dispatch({
                  type: "deleteTask",
                  payload: task,
                })
              }
            >
              del
            </button>
            <button
              className={
                `${!task.isReadOnly? "border border-red-500  animate-pulse":"border-none"} hover:scale-90 text-lg `
              }
              onClick={() =>
                dispatch({
                  type: "editTask",
                  payload: task.id,
                })
              }
            >
              edit
            </button>
            
          </div>
        </div>
      );
    });
  }
};

export default TaskItems;
