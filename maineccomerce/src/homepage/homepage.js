import React from 'react'
import '../styles/homepage.scss'

const Homepage = () => {
     return(
          <div className = 'homepage'>
               <div className = 'directory-menu'>
                    <div className = 'menu-item'>
                         <div className = 'content'>
                              <div className = 'title'>Food</div>
                              <div className = 'subtitle'>Shop Now</div>
                         </div>
                    </div>
                    <div className = 'menu-item'>
                         <div className = 'content'>
                              <div className = 'title'>Drinks</div>
                              <div className = 'subtitle'>Shop Now</div>
                         </div>
                    </div>
                    <div className = 'menu-item'>
                         <div className = 'content'>
                              <div className = 'title'>Snacks</div>
                              <div className = 'subtitle'>Shop Now</div>
                         </div>
                    </div>
                    <div className = 'menu-item'>
                         <div className = 'content'>
                              <div className = 'title'>Cousine</div>
                              <div className = 'subtitle'>Shop Now</div>
                         </div>
                    </div>
                    <div className = 'menu-item'>
                         <div className = 'content'>
                              <div className = 'title'>Offers</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Homepage