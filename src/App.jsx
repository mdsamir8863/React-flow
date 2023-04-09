import React from "react";
import ReactFlow, { MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import Sidbar from "./components/SideBar/Sidbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Flow from "./components/Flows/Flow";
import Customnodes from "./components/Flows/CustomNodes/CustomNodes";
import SubFlow from './components/Flows/sub-flow/SubFlow'
import UncontrollFlow from './components/Flows/Uncontrolled Flow/UncontrollFlow'
import AddNodes from './components/Flows/Addnodes/AddNodes'
const App = () => {
  return (
    <>
      <div className="blur"></div>
      <div className="blur2"></div>
      <Sidbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/flow"} />} />
        <Route path={"/flow"} element={<Flow />} />
        <Route path={"/flow/customnodes"} element={<Customnodes />} />
        <Route path={"/flow/subflow"} element={<SubFlow />} />
        <Route path={"/flow/uncontrollflow"} element={<UncontrollFlow />} />
        <Route path={"/flow/addnodes"} element={<AddNodes />} />
      </Routes>
    </>
  );
};

export default App;
