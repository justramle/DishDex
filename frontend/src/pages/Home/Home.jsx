// import React, { useState } from 'react'
import React from 'react'

import Header from '../../components/Header/Header'
// import CategoryMenu from '../../components/CategoryMenu/CategoryMenu'
// import RecipeDisplay from '../../components/RecipeDisplay/RecipeDisplay'
import TrendingSection from '../../components/TrendingSection/TrendingSection'


const Home = () => {

    // state varibable
    // const [category,setCategory] = useState("All");
  return (
    <div>
      <Header />
      {/* pass the category into component as a property */}
      {/* <CategoryMenu category={category} setCategory={setCategory}/> */}

      {/* <RecipeDisplay category={category}/> */}
      <TrendingSection />

    </div>
  )
}

export default Home
