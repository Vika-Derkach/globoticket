const CartReducer = (state = { cart: [] }, action) => {
  let cart = state.cart;
  let response;

  switch (action.type) {
    case "refresh":
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return {
        ...state,
        cart: cart,
      };
  }
};

export default CartReducer;
