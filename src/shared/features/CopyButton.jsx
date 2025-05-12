import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { colors } from "@/shared/lib/utils/colors";
import { toast } from "react-toastify";

export const CopyButton = ({ copyText }) => {
  return (
    <IconButton
      onClick={() => {
        navigator.clipboard.writeText(copyText);
        toast.success("Скопировано");
      }}
    >
      <ContentCopyIcon sx={{ color: colors.whiteText }} />
    </IconButton>
  );
};
