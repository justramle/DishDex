import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

    const [saveDish,setSaveDish] = useState({});

    // check if user save the recipe
    const saveFood = (itemId) => {
        if (!saveDish[itemId]){
            setSaveDish((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setSaveDish((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    const removeSave = (itemId) => {
        setSaveDish((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(saveDish);
    },[saveDish])
    
    const contextValue = {
        food_list, 
        saveFood,
        setSaveDish,
        saveDish,
        removeSave
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;