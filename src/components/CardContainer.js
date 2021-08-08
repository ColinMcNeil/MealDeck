import FlipMove from "react-flip-move";
import React from "react";
import { useState } from "react";
import Card from "./Card";
import "./CardContainer.css";

const shuffleArray = (input) => {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default ({ meals, onChange }) => {
  const [currentMeals, setCurrentMeals] = useState(meals);
  const [inputText, setInputText] = useState(null);
  const mealToAdd = {
    name: inputText,
    id:
      currentMeals.length > 0
        ? Math.max(...currentMeals.map((m) => m.id)) + 1
        : 0,
  };
  if (currentMeals.length > 0) {
    onChange(currentMeals);
  }
  return (
    <div className="cardContainer">
      <div className="adder">
        <input
          type="text"
          placeholder="Meal name"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={() => setCurrentMeals([...currentMeals, mealToAdd])}>
          +
        </button>
        <button
          className="action shuffle"
          onClick={() => setCurrentMeals(shuffleArray(currentMeals))}
        >
          Shuffle
        </button>
        <a href="/new">
          <button className="action new">New Deck</button>
        </a>
      </div>
      <FlipMove className="cards" staggerDurationBy="30" duration={200}>
        {currentMeals.map((meal, i) => (
          <Card
            meal={meal}
            key={meal.id}
            first={i === 0}
            remove={(i) =>
              setCurrentMeals(currentMeals.filter((m) => m.id !== i))
            }
          />
        ))}
      </FlipMove>
    </div>
  );
};
