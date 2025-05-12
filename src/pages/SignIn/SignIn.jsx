import { authFetch } from "@/shared/api/authFetch/authFetch";
import { colors } from "@/shared/lib/utils/colors";
import { StyledButton } from "@/shared/ui/Button/StyledButton";
import { Stack, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const RedditTextField = styled((props) => (
  <TextField
    slotProps={{
      input: { disableUnderline: true },
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    border: "1px solid",
    backgroundColor: colors.whiteBg,
    borderColor: "#E0E3E7",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: colors.whiteBg,
    },
    "&.Mui-focused": {
      backgroundColor: colors.whiteBg,
      color: colors.blackText,

      borderColor: theme.palette.primary.main,
    },
  },
}));

export const SignIn = () => {
  const [key, setKey] = useState("");

  const nav = useNavigate();
  function createWallet() {
    authFetch("/createWallet", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        toast.info(data.message);

        sessionStorage.setItem("key", data.data.privateKey);
        nav("/");
      });
  }

  function signIn() {
    authFetch("/checkWallet", { method: "post", body: JSON.stringify({ key }) })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.access) {
          sessionStorage.setItem("key", data.privateKey);

          nav("/");
        }
        toast.info(data.message);
      });
  }

  return (
    <Stack sx={{ alignItems: "center" }} spacing={4}>
      <Typography variant="h1" sx={{ fontSize: 40, fontWeight: 600 }}>
        Войти по ключу
      </Typography>
      <RedditTextField
        label="Ключ"
        variant="filled"
        onChange={({ target }) => setKey(target.value)}
        value={key}
        sx={{ color: colors.whiteText }}
      />
      <Stack alignItems={"center"} spacing={1}>
        <StyledButton onClick={signIn}>Войти</StyledButton>

        <StyledButton onClick={createWallet}>Создать кошелек</StyledButton>
      </Stack>
    </Stack>
  );
};
