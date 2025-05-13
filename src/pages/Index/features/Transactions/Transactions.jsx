import { gridRef } from "@/pages/Index/features/Transactions/entities/gridRefs.jsx";
import { Title } from "@/shared/ui/Title/Title";
import { Box, keyframes, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
const fadeIn = keyframes`
  from {  transform: translateX(20px); }
  to {  transform: translateX(0); }
`;
export const Transactions = ({ transactions }) => {
  return (
    <Stack>
      <Title sx={{ mb: 2 }}>Транзакции</Title>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={transactions}
          columns={gridRef}
          sx={{
            "& .MuiDataGrid-row": {
              animation: `${fadeIn} 1s ease `,
            },
          }}
          getRowId={(row) => row.timestamp}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          rowHeight={50}
          disableRowSelectionOnClick
        />
      </Box>
    </Stack>
  );
};
