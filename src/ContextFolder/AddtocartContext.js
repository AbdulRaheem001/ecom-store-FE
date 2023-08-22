import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = { items: [], total: 0 };

const reducer = (state, action) => {
  
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
  
};

const AddtocartContext = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, AddtocartContext };
