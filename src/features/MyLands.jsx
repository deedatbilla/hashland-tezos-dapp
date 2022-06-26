import React from "react";
import LandCard from "../components/cards/LandCard";
import { useAppContext } from "../context/context";
import { Backdrop, CircularProgress } from "@mui/material";
function Home() {
  const { landsList, tezConfig, loading } = useAppContext();

  return (
    <div className="flex-col flex px-12">
      <div className="grid grid-cols-4 gap-3">
        {landsList .filter((item) => item.currentOwner === tezConfig.userAddress).length > 0 ? (
          landsList
            .filter((item) => item.currentOwner === tezConfig.userAddress)
            .map((item) => <LandCard data={{ ...item }} />)
        ) : (
          <p>You have no lands</p>
        )}
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

export default Home;
