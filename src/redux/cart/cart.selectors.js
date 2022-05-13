import { createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCart], 
     cartItems =>  cartItems.cartItem.reduce(
        (accumalatedQuantity, cartItem) =>  
        accumalatedQuantity + cartItem.quantity ,0)
)