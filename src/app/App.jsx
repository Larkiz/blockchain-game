import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Container } from "@mui/material";

import { CheckAuth } from "@/shared/lib/utils/middlewares/CheckAuth";
// import { SignIn } from "@/pages/SignIn/SignIn";

import { useEffect } from "react";
import { AuthLayout } from "@/app/layouts/Authorized";
import { SignIn } from "@/pages/SignIn/SignIn";
import { ToastContainer } from "react-toastify";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = () => {
  return (
    <Container maxWidth={"lg"}>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route
            path="/*"
            element={
              <CheckAuth>
                <AuthLayout />
              </CheckAuth>
            }
          />
          <Route path="signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position={"top-right"}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme={"colored"}
      />
    </Container>
  );
};
