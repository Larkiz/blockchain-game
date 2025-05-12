import { GridCellAddress } from "@/pages/Index/features/Transactions/entities/ui/GridCellAddress";
import { colors } from "@/shared/lib/utils/colors";
import moment from "moment";
function formatTimestamp(timestamp) {
  const date = moment(timestamp).format("YYYY-MM-DD HH:mm");

  return date;
}

export const gridRef = [
  {
    field: "opType",
    headerName: "Тип",

    renderCell: ({ value }) => {
      return (
        <span
          style={{
            fontWeight: 800,
            letterSpacing: 1,
            backgroundColor: colors.blackBg,
            color: colors.whiteText,
            textAlign: "center",
            borderRadius: 5,
            padding: 10,
          }}
        >
          {value}
        </span>
      );
    },
    width: 120,
  },
  {
    field: "amount",
    headerName: "Сумма",
    renderCell: ({ value }) => {
      return (
        <div>
          <span style={{ fontWeight: 600 }}>{value}</span> OC
        </div>
      );
    },
    width: 90,
  },
  {
    field: "timestamp",
    headerName: "Дата",
    valueGetter: (value) => {
      return formatTimestamp(value);
    },
    width: 200,
  },
  {
    field: "toAddress",
    headerName: "Кошелек",

    renderCell: ({ value, row }) => {
      return <GridCellAddress from={row.fromAddress} to={value} />;
    },
    width: 200,
  },
];
