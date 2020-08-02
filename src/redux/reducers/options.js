import { EDIT_OPTION_ONE, EDIT_OPTION_TWO } from "../actionTypes";

const initialState ={
    option_one: null,
    option_two: null,
};
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case EDIT_OPTION_ONE:
            return {
                ...state,
                option_one: action.option_one
            }
        case EDIT_OPTION_TWO:
            return {
                ...state,
                option_two: action.option_two
            }
        default:
            return state
    }
  }
  