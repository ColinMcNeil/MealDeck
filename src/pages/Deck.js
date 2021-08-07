import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default () => {
  const { id } = useParams();
  return <div>{id}</div>;
};
