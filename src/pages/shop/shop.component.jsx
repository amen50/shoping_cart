import React from "react";
import CollectionsOverviewComponet from "../../components/collections-overview/collections-overview.componet";
import { Route } from "react-router-dom";
import collectionPage from "../collection/collection.componemt";

const ShopPage = ({match}) =>{
        console.log(match.path)      
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewComponet}/>
                <Route path={`${match.path}/:categoryID`} component={collectionPage}/>

               </div>);

               }



export default ShopPage; 