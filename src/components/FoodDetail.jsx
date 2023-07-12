import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FoodDetail = (props) => {
    const [meal, setMeal] = useState(null)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                handleIngredients(data.meals[0])
            })
            .catch(err => console.log(err))
    }, [props.match.params.id])

    const handleIngredients = (dish) => {
        let ingridents = []
        let quantity = []
        const allIngridients  = Object.entries(dish)
        
        allIngridients.forEach(([key, value]) => {
            if(key.includes('strIngredient') && value !== null && value !== ''){
                ingridents.push(value)
            }
            if(key.includes('strMeasure') && value !== null && value !== ' '){
                quantity.push(value)
            }
        })

        setMeal({
            ...dish,
            "ingridents": ingridents,
            "quantity": quantity
        })
    }


    return (
        
      <div className="mx-auto sm:text-center lg:max-w-2xl">
          {
              meal ? (
                  <>
                  <div className='flex justify-between items-center'>
                  <Link to='/' className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Back
                    </Link>
                    <div className="py-8 mx-auto font-sans text-3xl font-bold leading-none tracking-tight text-gray-700">
                    {meal.strMeal}
                    </div>
                  </div>
                    
       
                    <div className=" transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="mb-8 object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src={`${meal.strMealThumb}`}
                        alt=""
                    />
                    </div>

                    <div>
                        <h1 className='text-2xl mb-3 text-gray-800 font-semibold'>Ingredients</h1>
                        <div className="flex flex-col mb-8">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                        Qunatity
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {meal.ingridents.map((value, index) => (
                                    <tr key={value}>
                                        <td className="px-6 py-4 ">
                                            <div className="text-sm text-center font-medium text-gray-900">{value}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">{meal.quantity[index]}</div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-2xl mb-3 text-gray-800 font-semibold'>Instructions</h1>
                        <p dangerouslySetInnerHTML={{__html: meal.strInstructions}} className="max-w-xl mb-10 text-base text-gray-700 sm:mx-auto">
                       
                        </p> 
                    </div>
                  </>
              ) : (
                  <h1 className='text-gray-700 text-center mt-40 text-4xl font-semibold'>Loading...</h1>
              )
          }
          
        
      

      </div>
    )
}

export default FoodDetail
