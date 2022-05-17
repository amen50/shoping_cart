import React from "react";
import './checkout.styel.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from "../../components/checkout-item/checkout-item";

const CheckoutPage =({ CartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            </div>
            {
                CartItems.map( CartItem =>
                    (
                        <CheckoutItem key={CartItem.id} cartItem={CartItem}/>
                    )
                    
                )
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        
    </div>
)
const mapStateToProps = createStructuredSelector({
    CartItems: selectCartItems,
    total: selectCartTotal,
})
export default connect(mapStateToProps)(CheckoutPage)