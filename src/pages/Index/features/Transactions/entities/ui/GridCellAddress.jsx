import { shortenMiddle } from "@/shared/lib/utils/functions/shortenMiddle";
import { useSelector } from "react-redux";

export const GridCellAddress = ({ to, from }) => {
  const publicKey = useSelector(({ walletStore }) => walletStore.publicKey);
  if (from === null) return "-";
  if (publicKey === from) return shortenMiddle(to, 20);

  if (publicKey === to) return shortenMiddle(from, 20);
};
