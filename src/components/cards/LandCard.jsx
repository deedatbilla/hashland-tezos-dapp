import React from "react";
import { useHistory } from "react-router-dom";

function LandCard({ data }) {
  const {
    image,
    name,
    region,
    district,
    surveyNumber,
    marketValue,
    width,
    length,
  } = data;
  const history = useHistory();
  return (
    <div className="flex flex-col" onClick={() => history.push("/land")}>
      <img src={image} alt="img" className="rounded-xl h-full " />
      <div className="my-2 ml-1 space-y-1">
        <p className="font-bold">{name}</p>
        <p className="font-bold">{region}</p>
        <p className="text-xs">{width.toString()} by {length.toString()} sqft</p>
        <p className="text-xs">Posted on: 12/06/22</p>
        <p className="font-bold">{marketValue.toString()} tez</p>
      </div>
    </div>
  );
}

export default LandCard;
