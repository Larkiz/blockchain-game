import { socket } from "@/shared/api/socket";
import { StyledButton } from "@/shared/ui/Button/StyledButton";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export const TransactionModal = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ amount: 0, toAddress: "" });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function createTransaction() {
    socket.emit("transaction", {
      privateKey: sessionStorage.getItem("key"),
      address: data.toAddress,
      amount: data.amount,
    });

    handleClose();
  }

  return (
    <>
      <StyledButton variant="contained" onClick={handleClickOpen}>
        Перевести
      </StyledButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Перевод на другой кошелек
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              onChange={({ target }) =>
                setData({ ...data, toAddress: target.value })
              }
              placeholder="Адрес"
            />
            <TextField
              onChange={({ target }) =>
                setData({ ...data, amount: target.value })
              }
              placeholder="Сумма"
              type="number"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={handleClose}>Отменить</StyledButton>
          <StyledButton onClick={createTransaction} variant="contained">
            Отправить
          </StyledButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
