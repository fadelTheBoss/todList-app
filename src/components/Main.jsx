import { useState } from "react";
import { useTaskContext } from "../context/Context";
import TaskStatus from "./TaskStatus";
import TaskItems from "./TaskItems";
import { generateId } from "./idGenerator";
import { styles } from "./styles";
const Main = () => {
  const [taskName, setToTaskName] = useState("");
  const { dispatch } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName !== "") {
      const id = `${generateId(12)}_${taskName}`;
      dispatch({
        type: "addTask",
        payload: {
          id,
          name: taskName,
          editedName: "",
          isReadOnly: true,
          isFinish: false, 
        },
      });
    }
    setToTaskName("");
    e.target.reset();
  };
  return (
    <div className="p-4 mt-4">
      <div className="">
        <form
          className="p-2 flex gap-2 "
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text" 
            placeholder="ajouer une tache"
            className={`${styles.inputBox} flex-1 text-xl`}
            onChange={(e) => setToTaskName(e.target.value)}
          />
          <button type="submit" className="hover:scale-90 text-xl">
            Ajouter
          </button>
        </form>
      </div>

      <TaskItems />
      <TaskStatus />
    </div>
  );
};

export default Main;
