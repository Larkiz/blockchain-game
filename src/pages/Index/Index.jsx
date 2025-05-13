import { KeyBlock } from "@/pages/Index/features/KeyBlock";
import { TransactionModal } from "@/pages/Index/features/TransactionModal/TransactionModal";
import { Transactions } from "@/pages/Index/features/Transactions/Transactions";
import { colors } from "@/shared/lib/utils/colors";
import { Title } from "@/shared/ui/Title/Title";

import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const typographySx = { color: colors.blackText, fontWeight: 600, fontSize: 40 };

export const Index = () => {
  const wallet = useSelector((store) => store.walletStore);

  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction={{ xs: "column", sm750: "row" }}>
        <Stack
          sx={{
            bgcolor: colors.whiteBg,
            maxWidth: { xs: "100%", sm750: 400 },
            width: { sm750: 400 },
            borderRadius: 5,
            p: 3,
            height: 250,
          }}
        >
          <Box flexGrow={1}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Title colorCheme="black">{wallet.balance}</Title>
              <Typography sx={typographySx}>OCoins</Typography>
            </Stack>
          </Box>
          <TransactionModal />
        </Stack>
        <Stack>
          <Title sx={{ mb: 1 }}>Ключи доступа</Title>
          <KeyBlock
            title={"Публичный (Адрес кошелька)"}
            content={wallet.publicKey}
          />
          <KeyBlock title={"Приватный"} content={wallet.privateKey} />
        </Stack>
      </Stack>
      <Transactions transactions={wallet.transactions} />
    </Stack>
  );
};
