import React from "react";
import ReactFlow, { Controls, Background } from "react-flow-renderer";
const generateNodesAndEdges = (data) => {
  const nodes = [];
  const edges = [];

  const traverse = (obj, parentId = null, level = 0) => {
    const nodeId = `node-${nodes.length}`;
    nodes.push({
      id: nodeId,
      data: { label: JSON.stringify(obj, null, 2) },
      position: { x: level * 200, y: nodes.length * 100 },
    });

    if (parentId) {
      edges.push({
        id: `edge-${edges.length}`,
        source: parentId,
        target: nodeId,
      });
    }

    if (typeof obj === "object" && obj !== null) {
      Object.entries(obj).forEach(([key, value]) => {
        traverse(value, nodeId, level + 1);
      });
    }
  };

  traverse(data);
  return { nodes, edges };
};

const JSONTree = ({ data }) => {
  const { nodes, edges } = generateNodesAndEdges(data);

  return (
    <div style={{ height: "500px" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default JSONTree;
