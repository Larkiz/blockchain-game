import { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { colors } from "@/shared/lib/utils/colors";

const sizeSx = { width: { xs: 300, sm: 400 }, height: { xs: 300, sm: 400 } };

export const MineButton = ({ onClick, clicks }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const circleRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMouseMove = (e) => {
    if (circleRef.current) {
      const rect = document.getElementById("root").getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const distance = 15;

      setPosition({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    }
  };

  function keyupHandle({ code }) {
    if (code === "KeyS" || code === "KeyD") onClick();
  }

  useEffect(() => {
    document.addEventListener("keyup", keyupHandle);
    if (!isMobile) {
      document.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("keyup", keyupHandle);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          ...sizeSx,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          margin: "50px auto",
        }}
      >
        <Button
          ref={circleRef}
          sx={{
            ...sizeSx,
            borderRadius: 50,

            backgroundColor: colors.whiteText,
            cursor: "pointer",
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
          onPointerUp={onClick}
        >
          <Stack>
            <Typography
              sx={{ color: colors.blackText, fontSize: 32, fontWeight: 700 }}
            >
              OC
            </Typography>
            <Typography
              sx={{ color: colors.blackText, fontSize: 32, fontWeight: 700 }}
            >
              {clicks * 5}
            </Typography>
          </Stack>
        </Button>
      </Box>
    </>
  );
};
