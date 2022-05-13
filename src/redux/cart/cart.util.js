export const addItemToCart = (cartItem, cartItemToAdd) => {
    const exisitingCartItem = cartItem.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    if (exisitingCartItem){
        return cartItem.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }
    return[...cartItem, {...cartItemToAdd, quantity:1}]
}