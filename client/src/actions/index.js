import {UPDATE_USER}  from "../constants/action_types";

export const updateUser = (userData) => ({
  type: UPDATE_USER,
  userData
})
