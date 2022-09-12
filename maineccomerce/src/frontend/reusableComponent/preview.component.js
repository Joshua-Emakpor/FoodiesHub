import React from 'react'
import '../styles/collectionpreview.scss'
import CollectionItem from './collection-item'

const PreviewCollection = ({title, items}) => {
     return(
          <div className= 'collection-preview'>
               <h1>{title.toUpperCase()}</h1>
               <div className = 'preview'>
                    {
                         items.map(({id, ...itemsProps}) => (
                              <CollectionItem key = {id} {...itemsProps} />
                         ))
                    }
               </div>
          </div>
     )
}

export default PreviewCollection