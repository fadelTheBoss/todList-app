import { useState } from "react";
import { useTaskContext } from "../context/Context";
import ListStatus from "./ListStatus";

const TaskStatus = () => {
  const [valueOfStatus, setValueOfStatus] = useState("");
  const { state, dispatch } = useTaskContext();
  const item = state.items;
  const finishedTask = (task) => task.isFinish;
  const unfinishedTask = (task) => !task.isFinish;

  let content;
  if (valueOfStatus === "completeTask") {
    content = (
      <ListStatus
        status={item}
        filtered={finishedTask}
        title={"la liste des taches terminées"}
      />
    );
  }

  if (valueOfStatus === "incompleteTask") {
    content = (
      <ListStatus
        status={item}
        filtered={unfinishedTask}
        title={"la liste des taches non terminées"}
      />
    );
  }

  if (valueOfStatus === "default") {
    content = (
      <span className="text-xl p-3 rounded-md mb-4 ">afficher le status des taches</span>
    );
  }

  return (
    <div className="">
      <form className="mt-4 flex gap-4 justify-center">
        <input
          type="radio"
          name="getStatus"
          value="default"
          className="w-6 cursor-pointer "
          onChange={(e) => setValueOfStatus(e.target.value) }
        />
        <label htmlFor="default" className="text-xl">
          default
        </label>

        <input
          type="radio"
          name="getStatus"
          value="completeTask"
          className="w-6 cursor-pointer setStatus"
          onChange={(e) => setValueOfStatus(e.target.value)}
        />
        <label htmlFor="completeTask" className="text-xl">
          completeTask
        </label>

        <input
          type="radio"
          name="getStatus"
          value="incompleteTask"
          className="w-6 cursor-pointer "
          onChange={(e) => setValueOfStatus(e.target.value)}
        />
        <label htmlFor="incompleteTask" className="text-xl">
          incompleteTask
        </label>
      </form>

      <div className="p-2 mt-6 flex flex-col gap-4">{content}</div>
    </div>
  );
};

export default TaskStatus;
