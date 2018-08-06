import {ACTION_TEST}  from "../constants/action_types";

export const actionTest = (testVar) => ({
  type: ACTION_TEST, 
  payload: testVar
})