import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CardContainer from "../components/CardContainer";
import { decodeDeck } from "../lib/urlEncoding";
import { encodeDeck } from "../lib/urlEncoding";

export default () => {
  const { id } = useParams();
  return (
    <CardContainer
      meals={decodeDeck(id)}
      onChange={(meals) =>
        window.history.replaceState(null, null, `/${encodeDeck(meals)}`)
      }
    />
  );
};
