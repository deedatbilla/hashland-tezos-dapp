
import "./App.css";
import Header from "./components/Header";
import { Provider } from "./context/context";
// import LandDetails from "./features/LandDetails";
import Routes from "./Routes"; 
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
