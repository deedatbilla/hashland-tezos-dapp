import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import LandCard from "./components/cards/LandCard";
import Header from "./components/Header";
import Home from "./features/Home";
import { Provider } from "./context/context";
// import LandDetails from "./features/LandDetails";
import Routes from "./Routes";
// KT1WhpBeAViNuJ3wpB85mjucoyySC4ko7dP9
function App() {
  return (
    <Provider>
       <Header />
      <div className=" max-w-screen mx-auto w-full">
        <Routes />
      </div>
     </Provider>
  );
}

export default App;
