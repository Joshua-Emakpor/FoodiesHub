import React from 'react'
import ShopData from '../../_reusableComponent/shop.data';
import PreviewCollection from '../../_reusableComponent/preview.component';

class ShopPage extends React.Component {
     constructor(){
          super();
          this.state ={
               collection:ShopData
          }
     }

     render() {
          const {collection} = this.state
          return (
               <div>
                   { 
                   collection.map( ({id, ...otherProps}) => (
                    <PreviewCollection key = {id} {...otherProps} />
                   ))
                   }
               </div>
          )
     }
}

export default ShopPage