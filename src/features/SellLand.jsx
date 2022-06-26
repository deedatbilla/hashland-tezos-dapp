import React, { useState } from "react";
import { useAppContext } from "../context/context";
import { Backdrop, CircularProgress } from "@mui/material";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
// QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf
function SellLand() {
  const [file, setFile] = useState();
  const [landImage, setLandImage] = useState();
  const { registerLand, loading, setLoading } = useAppContext();
  const history=useHistory()
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
      setLoading(true);
      const formData1 = new FormData();
      const formData2 = new FormData();
      formData1.append("document", file[0]);
      formData2.append("document", landImage[0]);
      console.log(file[0]);
      let response1 = await fetch(
        "https://hashland-tezos-ipfs-backend.herokuapp.com/get-file-hash",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          body: formData1, // body data type must match "Content-Type" header
        }
      );
      const hash1 = await response1.json();

      let response2 = await fetch(
        "https://hashland-tezos-ipfs-backend.herokuapp.com/get-file-hash",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          body: formData2, // body data type must match "Content-Type" header
        }
      );
      let hash2 = await response2.json();
   

      await registerLand({
        ...values,
        imageHash: hash2.hash[0].hash,
        documentHash: hash1.hash[0].hash,
      });
      setLoading(false);
      history.push("/")
      toast.success("You have successfully added a land to the blockchain")
    } catch (error) {
      setLoading(false);
    }
  };
  const uploadFiles = async () => {
    try {
      const formData = new FormData();
      formData.append("document", file[0]);
      console.log(file[0]);
      const response = await fetch(
        "https://hashland-tezos-ipfs-backend.herokuapp.com/get-file-hash",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          body: formData, // body data type must match "Content-Type" header
        }
      );
      const hash = await response.json();
      console.log(hash.hash[0].hash);
    } catch (error) {
      console.log(error.response);
    }
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
                required
              />
            </div>
            <div>
              <label htmlFor="">Region</label>
              <input
                onChange={onChange}
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                name="region"
                required
              />
            </div>
            <div>
              <label htmlFor="">District</label>
              <input
                onChange={onChange}
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                name="district"
                required
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
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="">Survey number</label>
              <input
                onChange={onChange}
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                name="surveyNumber"
                required
              />
            </div>
            <div>
              <label htmlFor="">Width</label>
              <input
                name="width"
                onChange={onChange}
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                required
              />
            </div>
            <div>
              <label htmlFor="">Length</label>
              <input
                onChange={onChange}
                name="length"
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                // placeholder="Name"
                required
              />
            </div>
            <div>
              <label htmlFor="">Land registration document</label>
              <input
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                onChange={(e) => setFile(e.target.files)}
                // required
                type="file"
              />
            </div>
            <div>
              <label htmlFor="">Land image</label>
              <input
                className=" border-2 w-full border-gray-200 rounded-md py-2 px-3"
                onChange={(e) => setLandImage(e.target.files)}
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
      <Backdrop
        sx={{
          mt: "0px !important",
          height: "100vh",
          width: "100vw",
          zIndex: 5000,
        }}
        open={loading}
      >
        <CircularProgress sx={{ color: "#fff" }} />
      </Backdrop>
    </div>
  );
}

export default SellLand;
