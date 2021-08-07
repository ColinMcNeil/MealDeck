import React from "react";
import { useState } from "react";
import "./Home.css";

export default () => {
  const [code, setCode] = useState(null);
  return (
    <div className="home">
      <h1>MealDeck</h1>
      <p>A helpful tool to plan meals</p>
      <p>
        Idea by Sarah Schmieder, developed by{" "}
        <a href="https://colinmcneil.me/" target="_blank">
          me
        </a>
      </p>
      <a className="enter" href="/new">
        Make a Meal
      </a>
      <p>OR</p>
      <div className="paste">
        <textarea
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste a code"
        ></textarea>
        {code && <button>Show me your deck</button>}
      </div>
    </div>
  );
};
