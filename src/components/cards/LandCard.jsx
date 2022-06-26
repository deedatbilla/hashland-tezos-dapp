import React from "react";
import { useHistory } from "react-router-dom";

function LandCard({ data }) {
  const {
    imageHash,
    name,
    region,
    district,
    surveyNumber,
    marketValue,
    width,
    length,
    id,
  } = data;
  const history = useHistory();
  console.log(imageHash);
  return (
    <div className="flex flex-col" onClick={() => history.push(`land/${id.toString()}`)}>
      <img
        src={`https://ipfs.io/ipfs/${imageHash}`}
        alt="img"
        className="rounded-xl h-full "
      />
      <div className="my-2 ml-1 space-y-1">
        <p className="font-bold">{name}</p>
        <p className="font-bold">{region}</p>
        <p className="text-xs">
          {width.toString()} by {length.toString()} sqft
        </p>
        <p className="text-xs">Posted on: 12/06/22</p>
        <p className="font-bold">{marketValue.toString()} mutez</p>
      </div>
    </div>
  );
}

export default LandCard;
