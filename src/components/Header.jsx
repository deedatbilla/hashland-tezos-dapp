import React from "react";
import Logo from "../assets/logo.png";
import { FiUser } from "react-icons/fi";
import { useAppContext } from "../context/context";

function Header() {
  const { connectWallet } = useAppContext();
  return (
    <div className="flex items-center justify-between my-3 px-12 py-3">
      <div>
        <img alt="d" src={Logo} width={150} />
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex space-x-2 items-center">
          <p className="font-bold">Become a seller</p>
          <FiUser />
        </div>
        <button
          onClick={connectWallet}
          className="rounded-md px-6 py-2 bg-green-400 text-green-800"
        >
          Connect wallet
        </button>
      </div>
    </div>
  );
}

export default Header;
