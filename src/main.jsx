import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import { createTheme, ThemeProvider } from "@mui/material";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import "@/styles/App.css";

import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/redux/initStore";

import "moment/dist/locale/ru";

import "@xyflow/react/dist/style.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xs425: 425,
      sm: 600,
      sm750: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
