import React from "react";
import CollectionsOverviewComponet from "../../components/collections-overview/collections-overview.componet";
import { Route } from "react-router-dom";
import categoryPage from "../collection/collection.componemt";

const ShopPage = ({match}) =>(
             <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewComponet}/>
                <Route path={`${match.path}/:cataegoryID`} component={categoryPage}/>

               </div>);
            
           



export default ShopPage; 