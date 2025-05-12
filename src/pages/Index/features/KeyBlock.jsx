import { CopyButton } from "@/shared/features/CopyButton";
import { shortenMiddle } from "@/shared/lib/utils/functions/shortenMiddle";
import { Stack, Typography } from "@mui/material";

export const KeyBlock = ({ title, content }) => {
  return (
    <Stack alignItems={"center"} spacing={1} direction={"row"}>
      <Typography>{title}:</Typography>
      <Typography sx={{ fontWeight: 600 }}>{shortenMiddle(content)}</Typography>
      <CopyButton copyText={content} />
    </Stack>
  );
};
