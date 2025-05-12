import { authRoutes } from "@/app/routes/routes";
import { initStore, onTransaction } from "@/redux/slices/walletSlice";
import { authFetch } from "@/shared/api/authFetch/authFetch";
import { socket } from "@/shared/api/socket";
import { CheckAuth } from "@/shared/lib/utils/middlewares/CheckAuth";

import { Header } from "@/shared/widgets/Header/Header";

import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router";
export const AuthLayout = () => {
  const routes = () => {
    return (
      <Routes>
        {authRoutes.map((route, key) => {
          return <Route key={key} path={route.path} element={route.element} />;
        })}
        {/* <Route path="*" element={<Navigate to="/admin/index" replace />} /> */}
      </Routes>
    );
  };
  const location = useLocation();
  useEffect(() => {
    const authToken = sessionStorage.getItem("key");
    socket.auth = { token: authToken };
    socket.connect();
  }, [location]);

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

        socket.emit("mine", { publicKey: data.publicKey, clicks: 1000 });
      });
  }, []);
  useEffect(() => {
    function onMine() {}
    function onTx(data) {
      dispatch(
        onTransaction({
          balance: data.newBalance,
          newTransaction: data.transaction,
        })
      );
    }
    socket.on("transactionResponse", onTx);
    socket.on("mineResponse", onMine);

    return () => {
      socket.off("transactionResponse", onTx);
      socket.off("mineResponse", onMine);
    };
  }, []);
  return (
    <>
      <Box>
        <CheckAuth>
          <Header />
          {routes()}
        </CheckAuth>
      </Box>
    </>
  );
};
