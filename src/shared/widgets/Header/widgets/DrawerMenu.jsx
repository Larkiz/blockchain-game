import { authRoutes } from "@/app/routes/routes";

import { colors } from "@/shared/lib/utils/colors";

import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router";
const sxBtn = {
  color: { xs: colors.blackText, sm: colors.whiteText },
  fontSize: 18,
  fontWeight: "bold",
  width: "fit-content",
};

export const DrawerMenu = ({ mobileHidden = false, handleDrawerClose }) => {
  const { pathname } = useLocation();
  const balance = useSelector(({ walletStore }) => walletStore.balance);

  return (
    <Stack
      sx={{
        display: {
          xs: mobileHidden ? "none" : "flex",
          sm: mobileHidden ? "flex" : "none",
        },
        pt: { xs: 3, sm: 0 },
        pb: 1,
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
        useFlexGap
        spacing={{ xs: 1, sm750: 3 }}
        flexGrow={1}
      >
        {authRoutes.map((route) => {
          return (
            !route.notInHeader && (
              <Button
                key={route.name}
                LinkComponent={NavLink}
                to={route.path}
                sx={{
                  ...sxBtn,

                  backgroundColor: {
                    xs: pathname === route.path && colors.blackBg,
                    sm: pathname === route.path && colors.whiteBg,
                  },
                  color: {
                    xs:
                      pathname === route.path
                        ? colors.whiteText
                        : colors.blackText,
                    sm:
                      pathname === route.path
                        ? colors.blackText
                        : colors.whiteText,
                  },
                }}
                onClick={handleDrawerClose}
              >
                {route.name}
              </Button>
            )
          );
        })}
      </Stack>
      <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
        {balance} OC
      </Typography>
    </Stack>
  );
};
