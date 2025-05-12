import { Navbar } from "@/widgets/Navbar/Navbar";
import { userRoutes } from "@/app/routes/user.routes";
import { Footer } from "@/widgets/Footer/Footer";

import { Box } from "@mui/material";
import { Route, Routes } from "react-router";

import { NotFoundPage } from "@/widgets/NotFoundPage/NoFoundPage";

export const UserLayout = () => {
  const routes = () => {
    return (
      <Routes>
        <Route key={"notFound"} path={"/*"} element={<NotFoundPage />} />
        {userRoutes.map((route, key) => (
          <Route key={key} path={route.path} element={route.element} />
        ))}
      </Routes>
    );
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          pl: 0,
        }}
      >
        {routes()}
      </Box>

      <Footer />
    </>
  );
};
