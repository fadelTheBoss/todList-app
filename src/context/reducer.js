export const taskReducer = (state, action) => {
  if (action.type === "addTask") {
    return { ...state, items: [...state.items, action.payload] };
  }

  if (action.type === "deleteTask") {
    return {
      ...state,
      items: state.items.filter((task) => task.id !== action.payload.id),
    };
  }

  if (action.type === "editTask") {
    return {
      ...state,
      items: state.items.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isReadOnly: !task.isReadOnly };
        }
        return task;
      }),
    };
  }

  if (action.type === "handleNewValue") {
    return {
      ...state,
      items: state.items.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, name: action.payload.value };
        }
        return task;
      }),
    };
  }

  if (action.type === "finishTask") {
    return {
      ...state,
      items: state.items.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, isFinish: !task.isFinish };
        }
        return task;
      }),
    };
  }

  if (action.type === "handleRadio") {
    return {
      ...state,
      taskStatus: [...state.items].filter((task) => {
        if (action.payload === "completeTask") {
          return task.isFinish === true;
        }

        if (action.payload === "incompleteTask") {
          return task.isFinish !== true;
        }

        if (action.payload === "allTask") {
          return task;
        }
      }),
    };
  }

  return state;
};
