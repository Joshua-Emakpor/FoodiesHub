import React from 'react'
import '../styles/homepage.scss'

const MenuItems = ({ title, imageUrl,  size, linkUrl,match, history }) => {
     return (
          <div
           className= {`${size} menu-item`}
          //  onClick = {() = }
           >
               <div className='background-image' 
                style={{ backgroundImage : `url(${imageUrl})`}}/>
                    <div className = 'content'>
                         <h1 className = 'title'>{title.toUpperCase()}</h1>
                         <span className = 'subtitle'>Shop Now</span>
                    </div>
          </div>
     )
}

export default MenuItems