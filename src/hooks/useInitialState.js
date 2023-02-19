import { useState, useReducer } from "react";
import initialState from "../initialState";
import { shoppingReducer } from "./useReduceCartProducts";

const useInitialState = () => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  return {
    state,
    dispatch,
  }
}

export default useInitialState;