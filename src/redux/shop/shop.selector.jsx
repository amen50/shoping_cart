import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    hat:1,
    sneakers:2,
    jackets:3,
    womens:4, 
    mens:5
}

const selectShop = state => state.shop;

export const selectShopItem =  createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam =>
           createSelector(
               [selectShopItem],
               collections =>
                     collections.find(
                        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam] 
                     )
           )