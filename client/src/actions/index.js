import {UPDATE_USER, UPDATE_CARD, RESET_USER, UPDATE_BALANCE, UPDATE_AUTO_RELOAD}  from "../constants/action_types";

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

export const updateAutoReload = (reload) => ({
  type: UPDATE_AUTO_RELOAD,
  reload
})



