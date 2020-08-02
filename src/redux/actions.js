import { EDIT_OPTION_ONE, EDIT_OPTION_TWO } from "./actionTypes";

export var editOptionOne = (option) => {
    return {
        type: EDIT_OPTION_ONE,
        option_one: option
    }
}

export var editOptionTwo = (option) => {
    return {
        type: EDIT_OPTION_TWO,
        option_two: option
    }
}