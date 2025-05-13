import { Stack, Typography } from "@mui/material";

export const DataEl = ({ title, children }) => {
  return (
    <Stack spacing={1} direction={"row"}>
      <Typography>{title}:</Typography>
      <Typography>{children}</Typography>
    </Stack>
  );
};
