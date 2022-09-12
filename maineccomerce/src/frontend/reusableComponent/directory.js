import React from'react'
import '../styles/homepage.scss'
import MenuItems from '../reusableComponent/menu-items'

class Directory extends React.Component {
     constructor() {
          super () 
          this.state = {
               section: [
                    {
                         id: 1,
                         imageUrl : 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60 ',
                         title: "Foods",
                         linkUrl : "hats"
                    },
                    {
                         id: 2,
                         imageUrl : 'https://media.istockphoto.com/photos/drink-black-man-drinking-soft-drink-on-pink-background-portrait-picture-id1161598301?k=20&m=1161598301&s=612x612&w=0&h=8MTLyGzyXIhe_Hwmh8MltzLmVIu-x_qv87RToFDO_S8=',
                         title: "Drinks"
                    },
                    {
                         id: 3,
                         imageUrl : 'https://media.istockphoto.com/photos/sporty-woman-eating-energy-bar-picture-id1134003738?k=20&m=1134003738&s=612x612&w=0&h=oxCg4wjYKOrJHWR7Aq8qIbqpyqhFrojmwN65t-9CnFs=',
                         title: "Snacks"
                    },
                    {
                         id: 4,
                         size: 'large',
                         imageUrl : 'https://images.unsplash.com/photo-1627798133922-270bb80af5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZ2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                         title: "Veggies"
                    },
                    {
                         id: 5,
                         imageUrl : 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXNpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                         size: 'large',
                         title: "Cousines"
                    }
               ]
          }    
     }

     render() {
          return (
               <div className = 'directory-menu'>
                    {
                       this.state.section.map(({id, ...otherSectionProps}) => (
                         <MenuItems key = {id} {...otherSectionProps} />
                       ))
                    }
               </div>
          )
     }
}

export default Directory