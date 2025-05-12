import { gridRef } from "@/pages/Index/features/Transactions/entities/gridRefs.jsx";
import { Title } from "@/shared/ui/Title/Title";
import { Box, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const Transactions = ({ transactions }) => {
  return (
    <Stack>
      <Title sx={{ mb: 2 }}>Транзакции</Title>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={transactions}
          columns={gridRef}
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
