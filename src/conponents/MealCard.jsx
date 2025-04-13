import React from 'react'
import { useNavigate } from 'react-router-dom'
function MealCard({
    meal
}) {
    const navigate = useNavigate()
    return (
        
            <div className=' rounded-xl mt-5 bg-white text-black transition duration-300  '>
                <div className='px-1 py-1  '>
                    <img className=' h-auto rounded-lg' src={meal.strMealThumb} alt="" />
                    <h2 className='text-2xl mt-2 font-bold text-center '>
                        {meal.strMeal}
                    </h2>
                    <p className='font-semibold font-sans text-xl text-center'>{meal.strArea} </p>
                    
                    <div className='text-center mt-3 mb-1'>
                    <button 
                    onClick={() => navigate(`/recipe/${meal.idMeal}`)  }
                    className='inline-block px-4 py-2 rounded-lg  duration-300 bg-red-500 text-white font-bold font-serif  cursor-pointer shadow'>
                        Recipe
                    </button>
                    </div>
                    
                </div>
            </div>
        
    )
}

export default MealCard
