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

  return state;
};
