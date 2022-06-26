import React from "react";
import LandCard from "../components/cards/LandCard";
import { useAppContext } from "../context/context";
import { Backdrop, CircularProgress } from '@mui/material';
function Home() {
  const { landsList,loading } = useAppContext();
  console.log(landsList)
  return (
    <div className="flex-col flex px-12">
      {/* <LandCard/> */}

      <div className="grid grid-cols-4 gap-3">
        {landsList.map((item) => (
          <LandCard data={{ ...item }} />
        ))}
      </div>
      <Backdrop
        sx={{
          mt: '0px !important',
          height: '100vh',
          width: '100vw',
          zIndex: 5000,
        }}
        open={loading}
      >
        <CircularProgress sx={{ color: '#fff' }} />
      </Backdrop>
    </div>
  );
}

export default Home;
