import { useState } from "react";
import { Content } from "./ListStatus";

const TaskStatus = () => {
  const [valueOfStatus, setValueOfStatus] = useState("default");

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

      <div className="p-2 mt-6 flex flex-col gap-4">
        <Content value={valueOfStatus} />
      </div>
    </div>
  );
};

export default TaskStatus;
