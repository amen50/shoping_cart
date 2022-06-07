import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection-overview.style.scss'
import CollectionPreview from '../preview-collection/collection-preview.component';
import { selectShopItem } from "../../redux/shop/shop.selector";
 
const collectionOverview = ({collections}) => (
   <div className='collection-overview'>
      {
                       collections.map(({ id, ...otherSectionProps}) => (
                           <CollectionPreview key={id} {...otherSectionProps} />
                       ))
                   }
   </div>)

const mapToProps  = createStructuredSelector({
    collections: selectShopItem,
})   


export default connect(mapToProps)(collectionOverview)

