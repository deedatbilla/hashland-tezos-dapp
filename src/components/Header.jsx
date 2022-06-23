import React from "react";
import Logo from "../assets/logo.png";
import { FiUser } from "react-icons/fi";
import { useAppContext } from "../context/context";
import { useHistory } from "react-router-dom";

function numberWithCommas(x) {
  x = parseFloat(x);
  x = x?.toFixed(2);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function Header() {
  const { connectWallet, tezConfig } = useAppContext();
  const history = useHistory();
  return (
    <div className="flex items-center justify-between my-3 px-12 py-3">
      <div>
        <img alt="d" src={Logo} width={150} />
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => history.push("/register")}
          className="flex space-x-2 items-center"
        >
          <p className="font-bold">Become a seller</p>
          <FiUser />
        </button>
        {!tezConfig.beaconConnection ? (
          <button
            onClick={connectWallet}
            className="rounded-md px-6 py-2 bg-blue-400 text-blue-800"
          >
            Connect wallet
          </button>
        ) : (
          <div className="rounded-md px-6 py-2 bg-green-400 text-green-800">
            <p>Wallet connected</p>
          </div>
        )}
        <div className=" bg-green-300 rounded-full px-6 py-2">
          <p>Balance :{numberWithCommas(Number(tezConfig.userBalance/1000000))} TEZ</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
