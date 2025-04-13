import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Meal({

}) {
    const [meal, setMeal] = useState({})
    const { id } = useParams();
    const [ingrediensts, setIngredients] = useState([]);
    console.log(id)
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data) {
                    setMeal(data.meals[0])
                    ingredientsInfo(data.meals[0])

                }
            })

    }
        , [id])

    const ingredientsInfo = (meal) => {
        let ingInfo = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];

            if (ingredient && ingredient.trim() !== "") {
                ingInfo.push(` ${measure}  - ${ingredient} `);
            }
        }
        setIngredients(ingInfo);
        console.log("ingInfo", ingInfo)

    }


    return (
        <div>
            {!meal ?
                <p className='text-black'>'meal not found'</p>
                :
                <div className='bg-yellow-500 w-full min-h-screen text-black'>
                    <div >
                        <h2 className='text-xl md:text-2xl text-center pt-5 font-bold font-serif  '>Recipe Detail</h2>
                        <div className='mb-4 text-center mt-3'>
                            <button className='inline-block px-4 py-2 rounded-lg  bg-red-500 text-white font-bold font-serif  shadow-lg'>
                                {meal.strMeal}
                            </button>
                        </div>
                        <div className='md:flex gap-10 justify-left md:ml-5 pt-8j md:pt-12'>
                            <div className='mx-10 md:w-1/4 md:mx-0'>
                                <img className=' rounded-lg h-auto ' src={meal.strMealThumb} alt="" />
                            </div>

                            <div className='md:w-3/4  mt-6 md:mt-0'>

                                <h2 className='font-bold text-center  md:text-left text-xl md:text-2xl font-serif mb-3'>
                                    Ingredients:
                                </h2>
                                <ul className='w-full ml-4 md:ml-0 md:flex flex-wrap justify-between'>
                                    {ingrediensts ?
                                        ingrediensts.map((ing, index) => (
                                            <li className='md:w-2/4 text-lg md:text-xl font-semi-bold ' key={index}>
                                                {ing}
                                            </li>
                                        ))
                                        : ''}
                                </ul>
                            </div>
                        </div>
                        <div className='mt-12 mx-4 pb-5'>
                            <h2 className='text-xl md:text-2xl text-center md:text-left font-bold font-serif'>Instruction:</h2>
                            <h2 className='text-lg md:text-xl mt-2 font-semi-bold '>
                                {meal.strInstructions}
                            </h2>
                        </div>

                    </div>
                </div>
            }
        </div>

    )
}

export default Meal
