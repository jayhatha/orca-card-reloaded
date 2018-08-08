import {UPDATE_USER}  from "../constants/action_types";
import {UPDATE_CARD}  from "../constants/action_types";

export const updateUser = (userData) => ({
  type: UPDATE_USER,
  userData
})

export const updateCard = (card) => ({
  type: UPDATE_CARD,
  card
})
