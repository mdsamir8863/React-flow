import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

import defaultNodes from "./nodes.jsx";
import defaultEdges from "./edges.jsx";

const edgeOptions = {
  animated: true,
  style: {
    stroke: "white",
  },
};

const connectionLineStyle = { stroke: "white" };

export default function Flow() {
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
    </div>
  );
}
