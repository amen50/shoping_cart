import React from "react";
import './card-dropdown,style.scss'
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";


const CartDropdown = ({cartItem, history, dispatch}) => (
   <div className="cart-dropdown">
      <div className="cart-items">
      {
         cartItem.length?(
         cartItem.map(cartItems => <CartItem key={cartItems.id} item={cartItems}/> )) :
         (<span className="empty-message">Your cart is empty</span>)
      }
      </div>
      <CustomButton onClick= {() => {
         history.push('/checkout')
         dispatch(toggleCartHidden())
         }}> 
         GO TO CHECKOUT</CustomButton>
   </div>
)
const mapStateToProps = ({ cart: {cartItem}}) => ({
   cartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdown));