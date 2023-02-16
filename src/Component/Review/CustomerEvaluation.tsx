import React, { useState } from "react";
import people from "./data";
import './Review.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, image, text } = people[index];
  const checkNumber = (number:any) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  setTimeout(function(){
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
}, 6000);

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex=0;
  const maxIndex=people.length-1;

  
  const getRandomPerson=()=>{
    const getRandomIntInclusive=(min:any, max:any) =>{
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let randomIndex=getRandomIntInclusive(minIndex, maxIndex);
    if (randomIndex===index){
      randomIndex=index+1
    }
    setIndex(checkNumber(randomIndex));

  }
  

  return (
    
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />

      </div>
      <h4 className="author">{name}</h4>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
      </div>
      
    </article>
  );
};

export default Review;
