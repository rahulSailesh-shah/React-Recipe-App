import React from 'react'
import { Link } from 'react-router-dom';

const FoodList = ({data}) => {
    console.log(data);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-7xl">
           
           {
               data.map((meal) => {
                   return(
                    <Link to={`/${meal.idMeal}`} className="overflow-hidden bg-white rounded shadow-md cursor-pointer">
                        <img
                        src={`${meal.strMealThumb}`}
                        className="object-cover w-full h-48"
                        alt=""
                        />
                        <div className="p-5">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <span className="inline-flex bg-gray-700 text-white rounded-full h-6 px-3 justify-center items-center">
                                    {meal.strCategory}
                            </span>
                            <span className="text-gray-600 ml-4">- {meal.strArea}</span>
                            </p>
                            <p
                                href="/"
                                aria-label="Category"
                                title="Film It!"
                                className="inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700 "
                            >
                               {meal.strMeal}
                            </p>
                        </div>
                    </Link>
                   )
               })
           }         
        </div>
        </div>
      );
}

export default FoodList
