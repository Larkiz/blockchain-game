import { colors } from "@/shared/lib/utils/colors";
import { styled } from "@mui/material";

export const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: colors.blackText,
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: colors.blackText,
  }),
}));
