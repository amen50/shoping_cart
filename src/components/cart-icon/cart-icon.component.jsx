import React from "react";
import './cart-icon.style.scss';
import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShopingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)
const mapDispacthToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(
    null,
    mapDispacthToProps,
)(CartIcon);