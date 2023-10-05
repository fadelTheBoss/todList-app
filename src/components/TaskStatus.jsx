import { useTaskContext } from "../context/Context";
import { styles } from "./styles";
const TaskStatus = () => {
  const { state, dispatch } = useTaskContext();
  const item = state.taskStatus;
  
  return (
    <div className="">
      <form className="mt-4 flex gap-4 justify-center">
        <input
          type="radio"
          name="getStatus"
          value="completeTask"
          className="w-6 cursor-pointer setStatus"
          onChange={(e) => dispatch({
            type: "handleRadio",
            payload: e.target.value
          })}
        />
        <label htmlFor="completeTask" className="text-xl">
          completeTask
        </label>

        <input
          type="radio"
          name="getStatus"
          value="allTask"
          className="w-6 cursor-pointer "
          onChange={(e) => dispatch({
            type: "handleRadio",
            payload: e.target.value
          })}
        />
        <label htmlFor="allTask" className="text-xl">
          allTask
        </label>


        <input
          type="radio"
          name="getStatus"
          value="incompleteTask"
          className="w-6 cursor-pointer "
          onChange={(e) => dispatch({
            type: "handleRadio",
            payload: e.target.value
          })}
        />
        <label htmlFor="incompleteTask" className="text-xl">
          incompleteTask
        </label>
       
      </form>

      <div className="p-2 mt-6 flex flex-col gap-4">
       {
         item.map((list) => {
          return <input type="text" readOnly key={list.id}
          value={list.name}
          className={`${styles.inputBox} text-xl`} />;
        })
        }
      </div>
    </div>
  );
};

export default TaskStatus;
