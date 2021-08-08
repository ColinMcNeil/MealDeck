import React, { useState, useEffect } from "react";
import { decodeDeck } from "../lib/urlEncoding";
import "./Home.css";

export default () => {
  const [code, setCode] = useState(null);
  const [valid, setValid] = useState(false);
  useEffect(() => {
    try {
      decodeDeck(code);
      setValid(true);
    } catch (e) {
      setValid(false);
    }
  }, [code]);
  return (
    <div className="home">
      <h1>MealDeck</h1>
      <hr />
      <p>A helpful tool to plan meals</p>
      <p>
        Idea by Sarah Schmieder, developed by{" "}
        <a
          href="https://colinmcneil.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          me
        </a>
      </p>
      <hr />
      <a className="enter" href="/new">
        Make a Meal
      </a>
      <p>OR</p>
      <div className="paste">
        <textarea
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste a code"
        ></textarea>
        {code && valid && (
          <a href={`/${code}`}>
            <button>Show me your deck</button>
          </a>
        )}
      </div>
    </div>
  );
};
