import React from "react";
import LandCard from "../components/cards/LandCard";
import land1 from "../assets/land1.webp";
import land2 from "../assets/land2.webp";
import land3 from "../assets/land3.webp";
import land4 from "../assets/land4.webp";
import land5 from "../assets/land5.webp";
import land6 from "../assets/land6.webp";
import land7 from "../assets/land7.webp";
import land8 from "../assets/land8.webp";
import { useAppContext } from "../context/context";
const lands = [
  {
    name: "Bojo Beach Resort",
    dimens: "500 by 700 sqft",
    date: "12/06/22",
    price: "12/06/22",
    image: land1,
  },
  {
    name: "Winneba Road Land",
    dimens: "500 by 700 sqft",
    date: "12/06/22",
    price: "12/06/22",
    image: land2,
  },
  {
    name: "Kasoa cp",
    dimens: "500 by 700 sqft",
    date: "12/06/22",
    price: "12/06/22",
    image: land3,
  },
  {
    name: "Bojo Beach Resort",
    dimens: "500 by 700 sqft",
    date: "12/06/22",
    price: "12/06/22",
    image: land4,
  },
  {
    name: "Bojo Beach Resort",
    dimens: "500 by 700 sqft",
    date: "12/06/22",
    price: "12/06/22",
    image: land5,
  },
  {
    name: "Bojo Beach Resort",
    dimens: "500 by 700 sqft",
    date: "12/06/22",
    price: "12/06/22",
    image: land6,
  },
  {
    name: "Bojo Beach Resort",
    dimens: "500 by 700 sqft",
    date: "12/06/22",
    price: "12/06/22",
    image: land7,
  },
  {
    name: "Bojo Beach Resort",
    dimens: "500 by 700 sqft",
    date: "12/06/22",
    price: "12/06/22",
    image: land8,
  },
];

function Home() {
  const { landsList } = useAppContext();
  return (
    <div className="flex-col flex px-12">
      {/* <LandCard/> */}

      <div className="grid grid-cols-4 gap-3">
        {landsList.map((item) => (
          <LandCard data={{ ...item, image: land8 }} />
        ))}
      </div>
    </div>
  );
}

export default Home;
