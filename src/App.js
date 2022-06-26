
import "./App.css";
import Header from "./components/Header";
import { Provider } from "./context/context";
import { Toaster } from "react-hot-toast";
// import LandDetails from "./features/LandDetails";
import Routes from "./Routes"; 
function App() {
  return (
    <Provider>
          <Toaster position="top-right" />
      <div className=" max-w-screen mx-auto w-full">
        <Routes />
      </div>
     </Provider>
  );
}

export default App;
