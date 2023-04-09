import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Sidbar = () => {
  return (
    <>
      <h1 className="Logo">
        <Link to={"/"}>
          <img src="https://reactflow.dev/img/logo.svg" alt="" /> React{" "}
          <span> Flow</span>
        </Link>
      </h1>
      <nav
        className="navbar"
        style={{ width: "30vw", height: "80vh", position: "absolute", left: 2 }}
      >
        <ul>
          <h3>
            <Link to={"/flow"}> React Flow</Link>
          </h3>
          <h3>
            <Link to={"/flow/customnodes"}> Custom Nodes</Link>
          </h3>
          <h3>
            <Link to={"/flow/subflow"}> Sub FLow</Link>
          </h3>
          <h3>
            <Link to={"/flow/uncontrollflow"}> Uncontroll FLow</Link>
          </h3>
          <h3>
            <Link to={"/flow/addnodes"}> Add Nodes</Link>
          </h3>
        </ul>
      </nav>
    </>
  );
};

export default Sidbar;
