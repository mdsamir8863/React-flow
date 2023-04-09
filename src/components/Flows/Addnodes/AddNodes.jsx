import { useCallback } from "react";
import ReactFlow, { ReactFlowProvider, useReactFlow } from "reactflow";
import "reactflow/dist/style.css";

import defaultNodes from "../Uncontrolled Flow/nodes";
import defaultEdges from "./edges.jsx";

import "./button.css";

const edgeOptions = {
  animated: true,
  style: {
    stroke: "white",
  },
};

const connectionLineStyle = { stroke: "white" };

let nodeId = 0;

function Flow() {
  const reactFlowInstance = useReactFlow();
  const onClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <div
      style={{ width: "70vw", height: "100vh", position: "absolute", right: 1 }}
    >
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        defaultEdgeOptions={edgeOptions}
        fitView
        style={{
          backgroundColor: "#D3D2E5",
        }}
        connectionLineStyle={connectionLineStyle}
      />
      <button onClick={onClick} className="btn-add">
        add node
      </button>
    </div>
  );
}

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
