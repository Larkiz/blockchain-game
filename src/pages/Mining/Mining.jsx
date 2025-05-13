import { MineButton } from "@/pages/Mining/MineButton/MineButton";
import { onMine } from "@/redux/slices/walletSlice";
import { mine } from "@/shared/api/mine/mine";
import { socket } from "@/shared/api/socket";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const Mining = () => {
  const [clicks, setClicks] = useState(0);
  const wallet = useSelector((store) => store.walletStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (clicks > 0) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        mine(wallet.publicKey, clicks);
        setClicks(0);
      }, 500);
    }
  }, [clicks]);
  useEffect(() => {
    function onMineHandle(data) {
      dispatch(
        onMine({
          reward: data.amount,
          newTransaction: data,
        })
      );
      toast.success("Ваша награда: " + data.amount);
    }

    socket.on("mineResponse", onMineHandle);

    return () => {
      socket.off("mineResponse", onMineHandle);
    };
  }, []);
  const timeoutRef = useRef(null);

  function onClick() {
    setClicks((prev) => prev + 1);
  }
  return (
    <Stack spacing={2} alignItems={"center"}>
      <Box>
        <Typography
          sx={{ textAlign: "left", fontStyle: "italic" }}
          variant="caption"
        >
          1. Нажимайте на любую клавишу клавиатуры или монету в центре экрана
          для майнинга монеты
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ textAlign: "left", fontStyle: "italic" }}
          variant="caption"
        >
          2. На монете отображается количество итераций поиска подходяшего блока
        </Typography>
      </Box>
      <MineButton clicks={clicks} onClick={onClick} />
    </Stack>
  );
};
