import { authRoutes } from "@/app/routes/routes";
import { initStore, onTransaction } from "@/redux/slices/walletSlice";
import { authFetch } from "@/shared/api/authFetch/authFetch";
import { socket } from "@/shared/api/socket";

import { Header } from "@/shared/widgets/Header/Header";

import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router";
import { toast } from "react-toastify";
export const AuthLayout = () => {
  const routes = () => {
    return (
      <Routes>
        {authRoutes.map((route, key) => {
          return <Route key={key} path={route.path} element={route.element} />;
        })}
      </Routes>
    );
  };

  useEffect(() => {
    const authToken = sessionStorage.getItem("key");
    socket.auth = { token: authToken };
    socket.connect();
  }, []);

  const dispatch = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    authFetch("/getWallet")
      .then((res) => {
        if (res.status === 403) {
          return nav("/signIn");
        }
        return res.json();
      })
      .then((data) => {
        dispatch(initStore(data));
      });
  }, []);
  useEffect(() => {
    function onTx(data) {
      if (data.message) {
        return toast.error(data.message);
      }

      dispatch(
        onTransaction({
          balance: data.newBalance,
          newTransaction: data.transaction,
        })
      );
    }
    socket.on("transactionResponse", onTx);

    return () => {
      socket.off("transactionResponse", onTx);
    };
  }, []);
  return (
    <>
      <Box>
        <Header routes={authRoutes} />
        {routes()}
      </Box>
    </>
  );
};
