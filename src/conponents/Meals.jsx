import React , {useState}from 'react'
import MealCard from './MealCard';
function Meals() {

    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    const [msg, setMsg] = useState('')
    const [msg2, setMsg2] = useState('')
    const submit = async (input) => {
        try {
            if (input === '') {
                setMsg('Please Enter a Meal Name')
                console.log('Please Enter  Meal Name', msg)
            }
            else {
                
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
                setMsg2('Recipe Fetching...' )
                setMsg('')
                if (response) {
                    const data = await response.json()
                    console.log(data)
                    setMsg2('')
                    setItems(data.meals)
                    setInput('')
                    setMsg('')

                } else {
                    
                    console.error('Error fetching data:', response.statusText);
                }
            }
        } catch (error) {
            throw error
        }
    }

    return (
        <main>
        <div className=' min-h-screen bg-gray-400 '>
            <div className='mx-auto text-center pt-18 max-w-md  px-10 py-3 '>
                <div className=' mb-4'>
                    <h3 className='text-3xl font-bold font-serif'>Recipe</h3>
                </div>
                <div className='md:flex gap-2 mb-4'>
                    <input
                        className='mb-3 md:mb-0 w-full px-4 py-2 rounded-lg duration-200  bg-white text-black border-black shadow font-serif  placeholder:font-mono text-xl  ' type="text" placeholder='Enter Meal Name...'
                        value={input}
                        onChange={(e) => (setInput(e.target.value))}
                    />
                    <button
                        type='submit'
                        className='inline-block px-4 py-2 rounded-lg transition ease-in-out duration-300 hover:scale-105 text-white bg-red-500 font-bold font-serif  cursor-pointer shadow'
                        onClick={() => submit(input)}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap justify-center max-w-7xl mt-7 pb-12 mx-10 md:mx-auto gap-6   '>
                {items ? items.map((meal) => (
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4' key={meal.idMeal}>
                        <MealCard meal={meal} />
                    </div>
                )) : <p className='text-2xl font-bold mt-4 text-center '>Recipe Not Found!</p>}
            </div>

            {msg && (

                <h2 className='text-2xl font-bold text-center   font-serif'>
                    {msg}
                </h2>

            )}

            {msg2 && (

                <h2 className='text-2xl font-bold text-center  font-serif'>
                    {msg2}
                </h2>

            )}
        </div>
    </main>
    )
}

export default Meals
