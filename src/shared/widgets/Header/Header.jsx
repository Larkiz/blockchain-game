import {
  Box,
  IconButton,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerMenu } from "@/shared/widgets/Header/widgets/DrawerMenu";
import { colors } from "@/shared/lib/utils/colors";
import { Puller } from "@/shared/widgets/Header/ui/Puller";
import { useSelector } from "react-redux";

export const Header = ({ routes }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const balance = useSelector(({ walletStore }) => walletStore.balance);
  return (
    <Stack alignItems={"center"} direction={"row"}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginTop={3}
        sx={{ width: "100%" }}
        marginBottom={3}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon sx={{ fontSize: 30, color: colors.whiteText }} />
        </IconButton>
        <DrawerMenu
          routes={routes}
          handleDrawerClose={handleDrawerClose}
          mobileHidden
        />
      </Stack>
      <Box component="nav" aria-label="links">
        <SwipeableDrawer
          anchor="bottom"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
          swipeAreaWidth={56}
          disableSwipeToOpen={true}
          keepMounted
        >
          <Puller />
          <DrawerMenu routes={routes} handleDrawerClose={handleDrawerToggle} />
        </SwipeableDrawer>
      </Box>
      <Typography sx={{ fontWeight: 600, fontSize: 18, textWrap: "nowrap" }}>
        {balance} OC
      </Typography>
    </Stack>
  );
};
