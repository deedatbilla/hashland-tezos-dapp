import React, { useState } from "react";
import { useAppContext } from "../context/context";

// QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf
function SellLand() {
  const [file, setFile] = useState();
  const { registerLand } = useAppContext();
  const [values, setValues] = useState({
    name: "",
    region: "",
    district: "",
    surveyNumber: "",
    marketValue: 0,
    // requester    : address,
    width: 0,
    length: 0,
    // currentOwner: address,
  });
  console.log(file);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(values)
      registerLand(values);
    } catch (error) {}
  };
  return (
    <div className="flex-col flex px-12">
      <div className="w-full max-w-lg mx-auto mt-3 bg-white shadow-2xl rounded-lg px-4 py-5">
        <h2 className=" font-bold text-3xl my-3">Register a Land</h2>
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="">Land Name</label>
              <input
                onChange={onChange}
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                placeholder="Name"
                name="name"
                // required
              />
            </div>
            <div>
              <label htmlFor="">Region</label>
              <input
                onChange={onChange}
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                name="region"
                // required
              />
            </div>
            <div>
              <label htmlFor="">District</label>
              <input
                onChange={onChange}
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                name="district"
                // required
              />
            </div>
            <div>
              <label htmlFor="">Price</label>
              <input
                onChange={onChange}
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                type="number"
                name="marketValue"
                // required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="">Survey number</label>
              <input
                onChange={onChange}
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                name="surveyNumber"
                // required
              />
            </div>
            <div>
              <label htmlFor="">Width</label>
              <input
                name="width"
                onChange={onChange}
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                // required
              />
            </div>
            <div>
              <label htmlFor="">Length</label>
              <input
                onChange={onChange}
                name="length"
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                // required
              />
            </div>
            <div>
              <label htmlFor="">Land registration document</label>
              <input
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                onChange={(e) => e.target.value}
                // required
                type="file"
              />
            </div>
          </div>
          <button
            //   onClick={connectWallet}
            type="submit"
            className="rounded-md px-6 py-3 bg-green-400 text-green-800 mt-4 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SellLand;
