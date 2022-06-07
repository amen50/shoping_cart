import React from "react";
import './collection.styeel.scss';
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

const collectionPage = ({collection}) => {
    const {title, item} = collection; 
    return(
    <div className="collection-page">
       <h2 className="title">{title}</h2>
       <div className="items">
           {
               item.map(item => (
                   <collectionItemComponent key={item.id} item={item}/>
               ))
           }
       </div>
    </div>
);}

const mapStatrToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStatrToProps)(collectionPage);