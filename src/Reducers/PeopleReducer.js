const initialState = {
  peoples: [],
};
const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PEOPLE":
      return {
        ...state,
        peoples: [...state.peoples, action.payload],
      };
    case "DELETE_PEOPLE":
      const newarr = state.peoples.filter((e) => e.id !== action.payload);
      return {
        ...state,
        peoples: newarr,
      };
    case "UPDATE_PEOPLE":
      const x = state.peoples.map((e) =>
        e.id === action.payload.idholder
          ? { ...e, name: action.payload.edit }
          : e
      );
      return {
        ...state,
        peoples: x,
      };
    default:
      return state;
  }
};
export default PeopleReducer;
