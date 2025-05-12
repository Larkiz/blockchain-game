import { colors } from "@/shared/lib/utils/colors";
import { Typography } from "@mui/material";

export const Title = ({
  sx,
  children,
  variant = "h2",
  colorCheme = "white",
}) => {
  return (
    <Typography
      variant={variant}
      sx={{
        color: colorCheme === "white" ? colors.whiteText : colors.blackText,

        fontWeight: 700,
        letterSpacing: 1,
        fontSize: { xs: 24, sm: 32, sm750: 30, lg: 40 },

        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};
