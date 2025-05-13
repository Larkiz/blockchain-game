import { colors } from "@/shared/lib/utils/colors";
import { shortenMiddle } from "@/shared/lib/utils/functions/shortenMiddle";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { formatTimestamp } from "@/shared/lib/utils/functions/formatTimestamp";
import { DataEl } from "@/pages/Blockchain/ui/Block/ui/DataEl";
export const Block = ({ data }) => {
  return (
    <Box sx={{ bgcolor: colors.blackBg, p: 2, maxWidth: 300 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{shortenMiddle(data.hash)}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack>
            {data.blockType && (
              <Typography sx={{ fontWeight: 600 }}>{data.blockType}</Typography>
            )}
            <DataEl title={"Дата"}>{formatTimestamp(data.timestamp)}</DataEl>
            <DataEl title={"Множитель"}>{data.rewardMultiplier}</DataEl>
            <DataEl title={"Nonce"}>{data.nonce}</DataEl>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Handle
        type="source"
        position={Position.Left}
        isConnectable={true}
        id="left"
      />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={true}
        id="right"
      />
    </Box>
  );
};
