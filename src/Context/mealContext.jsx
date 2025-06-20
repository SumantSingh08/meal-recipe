import React, {useState} from 'react'
import { createContext } from 'react'

export const mealContext = createContext();
function MealContext({children}) {
    const [items, setItems] = useState([]);
    const meal = {
        items,
        setItems,
    };
    return (
        <mealContext.Provider value={meal}>
        {children}
        </mealContext.Provider>
    )
}

export default MealContext

