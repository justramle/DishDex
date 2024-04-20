import React from 'react'
import './CategoryMenu.css'
import { menu_list } from '../../assets/assets'
const CategoryMenu = ({category,setCategory,Title="Category", titleStyle={} }) => {
  return (
    <div className='category' id='category'>
      {/* Pass heading as Prop */}
        <h1 style={titleStyle}> {Title} </h1>
        {/* <p className='category-name'>Exploring our dishes Lorem ipsum dolor, m quos dolorem maxime. Quas, quaerat nisi. .</p> */}
        <div className="category-list">
            {menu_list.map((item,index) => {
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='category-list-item'>
                        {/* item object has property menu_image in assets*/}
                        <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                    )
                })}

        </div>
        <hr />
    </div>
  )
}

export default CategoryMenu
