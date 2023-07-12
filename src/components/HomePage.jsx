import React, { useEffect, useState } from 'react';
import FoodList from './FoodList';
import Search from './Search';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [food, setFood] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    setIsLoading(true);
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setData(data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [food]);

  const renderComponents = () => {
    if (isLoading) {
      return (
          <h1 className='text-gray-700 text-center mt-40 text-4xl font-semibold'>
            Loading...
          </h1>
      );
    }

    if (data === null) {
      return (
          <h1 className='text-gray-700 text-center mt-40 text-4xl font-semibold'>
            Sorry! No items found.
          </h1>
      );
    }

    return <FoodList data={data} />

  };

  return (
      <>
        <Search setFood={setFood}/>
        {renderComponents()}
      </>
  );
};

export default HomePage;
