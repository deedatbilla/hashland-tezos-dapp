import React from "react";
import { useHistory } from "react-router-dom";
import land from "../../assets/land1.webp";

function LandCard({ data }) {
  const { image, name, surveyNumber } = data;
  const history = useHistory();
  return (
    <div className="flex flex-col" onClick={() => history.push("/land")}>
      <img src={image} alt="img" className="rounded-xl h-full " />
      <div className="my-2 ml-1 space-y-1">
        <p className="font-bold">Bojo Beach Resort</p>
        <p className="text-xs">500 by 700 sqft</p>
        <p className="text-xs">Posted on: 12/06/22</p>
        <p className="font-bold">12/06/22 tez</p>
      </div>
    </div>
  );
}

export default LandCard;
