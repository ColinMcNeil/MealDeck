import React from "react";
import CardContainer from "../components/CardContainer";
import { encodeDeck } from "../lib/urlEncoding";

export default () => (
  <CardContainer
    meals={[]}
    onChange={(meals) =>
      window.history.replaceState(null, null, `/${encodeDeck(meals)}`)
    }
  />
);
