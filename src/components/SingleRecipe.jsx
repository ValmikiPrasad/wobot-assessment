import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
const SingleReciepe = () => {
  let { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=e7158a8455fa4b82a56d96e19a61b540`);
        // console.log(response.data);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error occurred while fetching the data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(recipe)
  return (
    <div className=' flex-col items-center justify-center h-[500px] mt-10'>

    
    <div className="w-3/4 m-auto ">
      <div class="bg-white border rounded-xl shadow-sm sm:flex">
        <div class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
          <img class="size-full absolute top-0 start-0 object-cover" src={recipe.image} alt="Image Description" />
        </div>
        <div class="flex flex-wrap">
          <div class="p-4 flex flex-col h-full sm:p-7">
            <h3 class="text-lg font-bold text-gray-800">
              {recipe.title}
            </h3>
            <p class="mt-1 text-gray-500">
              {recipe.summary}
            </p>
            {/* <div class="mt-5 sm:mt-auto">
              <p class="text-xs text-gray-500">
                Last updated 5 mins ago
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <div className=' flex items-center justify-center mt-4'>
            <Link to="/">
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button>
            </Link>
    </div>

    </div>
  )
}

export default SingleReciepe