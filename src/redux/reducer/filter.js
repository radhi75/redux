import { FILTER } from "../../Constant";
import { SET_FILTER } from "../reducer/actionTypes";
const initialState = FILTER.ALL;
const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default filter;
