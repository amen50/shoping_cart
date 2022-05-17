import { createSelector} from "reselect";


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
  );


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemCount = createSelector(
    [selectCart], 
     cartItems =>  cartItems.cartItem.reduce(
        (accumalatedQuantity, cartItem) =>  
        accumalatedQuantity + cartItem.quantity ,0)
)

export const selectCartTotal = createSelector(
    [selectCart], 
    cartItems =>  cartItems.cartItem.reduce(
       (accumalatedQuantity, cartItem) =>  
       accumalatedQuantity + cartItem.quantity * cartItem.price ,0)

)