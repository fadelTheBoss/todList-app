import { styles } from "./styles";
import { useTaskContext } from "../context/Context";
const ListStatus = ({ title, filtered }) => {
  const { state } = useTaskContext();
  const item = state.items;
  return (
    <div className="flex gap-4 flex-col items-center justify-center ">
      <h2 className="text-xl p-3 rounded-md border-b border-gray-500 mb-4 ">
        {title}
      </h2>
      {item.filter(filtered).map((list) => {
        return (
          <input
            type="text"
            readOnly
            key={list.id}
            value={list.name}
            className={`${styles.inputBox} text-xl`}
          />
        );
      })}
    </div>
  );
};

export const Content = ({ value }) => {
  const finishedTask = (task) => task.isFinish;
  const unfinishedTask = (task) => !task.isFinish;
  let content;
  if (value === "completeTask") {
    content = (
      <ListStatus
        filtered={finishedTask}
        title={"la liste des taches terminées"}
      />
    );
  }

  if (value === "incompleteTask") {
    content = (
      <ListStatus
        filtered={unfinishedTask}
        title={"la liste des taches non terminées"}
      />
    );
  }

  if (value === "default") {
    content = (
      <span className="text-x p-3 rounded-md mb-4 ">
        le status des taches s'affiche ici... 
      </span>
    );
  }

  return <div>{content}</div>;
};

export default ListStatus;
