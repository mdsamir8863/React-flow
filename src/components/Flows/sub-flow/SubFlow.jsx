import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import initialNodes from "./nodes.jsx";
import initialEdges from "./edges.jsx";

const rfStyle = {
  backgroundColor: "#D0C0F7",
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div
      style={{ width: "70vw", height: "100vh", position: "absolute", right: 1 }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={rfStyle}
        attributionPosition="top-right"
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;
