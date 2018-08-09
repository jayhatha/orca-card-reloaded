import {UPDATE_USER, UPDATE_CARD, RESET_USER, UPDATE_BALANCE}  from "../constants/action_types";

export const updateUser = (userData) => ({
  type: UPDATE_USER,
  userData
})

export const updateCard = (card) => ({
  type: UPDATE_CARD,
  card
})

export const resetUser = () => ({
  type: RESET_USER
})

export const updateBalance = (balance) => ({
  type: UPDATE_BALANCE,
  balance
})

