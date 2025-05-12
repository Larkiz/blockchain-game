import { colors } from "@/shared/lib/utils/colors";
import { Button } from "@mui/material";

export const StyledButton = ({
  children,
  sx,
  variant = "standart",
  ...props
}) => {
  return (
    <Button
      sx={{
        borderRadius: 2,
        fontWeight: 700,
        fontSize: { xs: 14, sm: 14 },
        padding: { xs: "5px 15px", sm: "10px 25px" },
        backgroundColor:
          variant === "standart" ? colors.whiteBg : colors.blackBg,
        color: variant === "standart" ? colors.blackText : colors.whiteText,
        width: "fit-content",
        alignItems: "center",

        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
