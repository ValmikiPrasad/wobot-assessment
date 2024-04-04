import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Recipes = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=e7158a8455fa4b82a56d96e19a61b540&number=7`);
        console.log(response.data);
        setList(response.data.recipes);
      } catch (error) {
        console.error("Error occurred while fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(list); // Move the console.log here

  return (
    <>
    <p className='text-xl font-semibold text-center text-[#530202]'>Recipes List</p>
    <div className='w-[1300px] mt-4 m-auto flex items-center justify-center mb-10 '>
     
      <div className="grid grid-cols-4 gap-7">
        {list.map((recipe) => <Card
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          summary={recipe.summary}
          />)}
      </div>

    </div>
          </>
  );
};

export default Recipes;
