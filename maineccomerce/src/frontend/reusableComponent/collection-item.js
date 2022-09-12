import React from 'react'
import '../styles/collectionitem.scss'

const CollectionItem = ({id, name, price, imageUrl}) => {
     return (
          <div className= 'collection-item'>
               <div 
               className = 'image'
                    style = {{
                         backgroundImage:`url(${imageUrl})`,
                         backgroundPosition : 'center',
                         height: '300px'
                    }}
              />
                    <div className = 'collection-footer'>
                         <span className = 'name'>{ name }</span>
                         <span className = 'price'>{ price }</span>
                    </div>
                    {/* </div> */}
          </div>
     )
}

export default CollectionItem