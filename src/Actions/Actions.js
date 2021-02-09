export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const addpeople = (data) => {
  return {
    type: "ADD_PEOPLE",
    payload: data,
  };
};
export const deletepeople = (id) => {
  return {
    type: "DELETE_PEOPLE",
    payload: id,
  };
};
export const updatepeople = ({ idholder, edit }) => {
  return {
    type: "UPDATE_PEOPLE",
    payload: { idholder, edit },
  };
};
