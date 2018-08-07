import {UPDATE_USER}  from "../constants/action_types";

export const updateUser = (token, user) => ({
  type: UPDATE_USER,
  token,
  user
})
