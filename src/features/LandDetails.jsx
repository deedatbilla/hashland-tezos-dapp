import React from "react";
import land1 from "../assets/land1.webp";
import land2 from "../assets/land2.webp";
import land3 from "../assets/land3.webp";
import land4 from "../assets/land4.webp";
import land5 from "../assets/land5.webp";
import woman from "../assets/woman.webp";
function LandDetails() {
  return (
    <div className="flex flex-col px-12 mt-5 h-screen">
      <p className="text-2xl font-bold my-3">Lighthouse Tajer Land</p>

      <div className="grid grid-cols-2 gap-x-3">
        <div>
          <img alt="" src={land1} className="rounded-md h-full" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img alt="" src={land2} className="rounded-md h-full" />
          <img alt="" src={land3} className="rounded-md h-full" />
          <img alt="" src={land4} className="rounded-md h-full" />
          <img alt="" src={land5} className="rounded-md h-full" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-6">
        <div className="flex items-center justify-between col-span-8">
          <div>
            <p className="text-2xl font-bold">Lighthouse sold by Marina</p>
            <p>500 by 700 sqft</p>
            <button className=" bg-green-700 px-10 py-2 my-3 text-white rounded-md">Buy Now</button>
          </div>
          <img alt="" src={woman} width={50} className="rounded-full" />
        </div>
        <div className="col-span-4">
          {/* <div className="p-4 shadow-lg rounded-md bg-slate-100">
            <p>1500 Tez</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LandDetails;
