import React from "react";
import './card-dropdown,style.scss'
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

const CartDropdown = ({cartItem}) => (
   <div className="cart-dropdown">
      <div className="cart-items">
      {
         cartItem.map(cartItems => <CartItem key={cartItems.id} item={cartItems}/> )
      }
      </div>
      <CustomButton> GO TO CHECKOUT</CustomButton>
   </div>
)
const mapStateToProps = ({ cart: {cartItem}}) => ({
   cartItem
})

export default connect(mapStateToProps)(CartDropdown);