import { createSelector } from "reselect";
 

const selectShop = state => state.shop;

export const selectShopItem =  createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam =>
           createSelector(
               [selectShopItem],
               collections => collections[collectionUrlParam] 
                     
           )