import React from "react";
import './cart-item.style.scss';

const CartItem = ({ item: {imageUrl, price, name, quantity }}) => (
    <div className="cart-item">
        <img src={imageUrl} alt='item'/>
        <div className="item-detalis">
            <span className="name">{name}</span>
            <span className="price">${price}* {quantity}</span>
        </div>
    </div>
)

export default CartItem