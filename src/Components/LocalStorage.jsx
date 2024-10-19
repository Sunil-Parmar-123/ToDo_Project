const todoKey = "TodoApp";

export const getDataFromLocalStorage = () => {
    const getTodo = localStorage.getItem(todoKey);

    if (!getTodo) return [];

    return JSON.parse(getTodo);
  }


  export const setDataInLocalStorage = (task) => {
    localStorage.setItem(todoKey, JSON.stringify(task));
  }