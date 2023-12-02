import React from 'react'
import {FaQuoteRight} from "react-icons/fa"
import {BsStarHalf} from "react-icons/bs"
import {BsStarFill} from "react-icons/bs"

const TestimonialCard = (props) => {
  return (
    <div className=" flex flex-col w-full lg:w-2/6 bg-background p-3 rounded-lg gap-5 py-16">
      <div className=" flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img className="h-20 w-20 rounded-full" src={props.img} alt="img" />
        </div>
        <div className=" mx-3">
          <h2 className=" font-semibold text-lg text-displayText">{props.title}</h2>
          <div className=" flex">
            <BsStarFill className=" text-displayText" />
            <BsStarFill className=" text-displayText" />
            <BsStarFill className=" text-displayText" />
            <BsStarFill className=" text-displayText" />
            <BsStarHalf className=" text-displayText" />
          </div>
        </div>
        <span className=" ml-16 text-displayText">
          <FaQuoteRight className=" text-backgroundColor" size={42} />
        </span>
      </div>
      <p className='text-displayText'>{props.comment}</p>
    </div>
  );
};

export default TestimonialCard

