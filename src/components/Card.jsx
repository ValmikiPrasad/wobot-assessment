import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  console.log(props.id)
  return (
    <>
      <Link to={`recipe/${props.id}`} class="w-72 h-96 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition" href="#">
        <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
          <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={props.image} alt="Image Description" />
        </div>
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800">
            {props.title}
          </h3>
          <p class="mt-1 text-gray-500">
            {props.summary}
          </p>
        </div>
      </Link>
    </>
  )
}

export default Card