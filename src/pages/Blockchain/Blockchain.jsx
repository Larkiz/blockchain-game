import { Block } from "@/pages/Blockchain/ui/Block/Block";
import { authFetch } from "@/shared/api/authFetch/authFetch";
import { colors } from "@/shared/lib/utils/colors";
import { StyledButton } from "@/shared/ui/Button/StyledButton";
import { Title } from "@/shared/ui/Title/Title";
import { Box } from "@mui/material";
import { Background, Controls, MarkerType, ReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const nodeTypes = { block: Block };
export const Blockchain = () => {
  const [blockchainFlows, setBlockchain] = useState([]);
  const [edges, setEdges] = useState([]);
  useEffect(() => {
    authFetch("/blockchain")
      .then((res) => res.json())
      .then((data) => {
        let nodes = [];
        let edges = [];
        const blockchaingLength = data.length;
        for (let index = 0; index < blockchaingLength; index++) {
          const block = {
            id: data[index].hash,
            type: "block",

            targetPosition: "left",
            position: {
              x: (index % 20) * -350,
              y: Math.floor(index / 20) * -250,
            },
            data: {
              ...data[index],
              blockType:
                blockchaingLength - 1 === index
                  ? "Последний блок"
                  : index === 0
                  ? "Первый блок"
                  : false,
            },
          };
          nodes = [block, ...nodes];
          edges = [
            {
              id: block.data.hash,
              source: block.data.previousHash,
              target: block.data.hash,
              type: "smoothstep",
              targetHandle: "right",
              sourceHandle: "left",
              markerEnd: {
                type: MarkerType.Arrow,
                width: 60,
                height: 60,
                color: colors.blackText,
              },
            },
            ...edges,
          ];
        }

        setBlockchain(nodes);
        setEdges(edges);
      });
  }, []);

  function checkValid() {
    authFetch("/checkBlockchainValid")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          return toast.success("Блокчейн валиден");
        }

        return toast.error("Блокчейн не валиден");
      });
  }

  return (
    <Box>
      <Title sx={{ mb: 4, textAlign: "center" }}>Визуализация блокчейн</Title>
      <StyledButton sx={{ mb: 2 }} onClick={checkValid}>
        Проверить валидность блокчейна
      </StyledButton>
      <Box sx={{ width: "100%", height: "600px", bgcolor: "#fff" }}>
        <ReactFlow
          connectionMode="loose"
          nodeTypes={nodeTypes}
          nodes={blockchainFlows}
          edges={edges}
          fitView
        >
          <Controls />

          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </Box>
    </Box>
  );
};
