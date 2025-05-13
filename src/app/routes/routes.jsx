import { Blockchain } from "@/pages/Blockchain/Blockchain";
import { Index } from "@/pages/Index/Index";
import { Mining } from "@/pages/Mining/Mining";

export const authRoutes = [
  {
    path: "/",
    name: "Кошелек",
    element: <Index />,
  },
  {
    path: "/mine",
    name: "Майнинг",
    element: <Mining />,
  },
  {
    path: "/blockchain",
    name: "Блокчейн",
    element: <Blockchain />,
  },
];
