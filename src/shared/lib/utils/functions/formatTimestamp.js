import moment from "moment";

export function formatTimestamp(timestamp) {
  const date = moment(timestamp).format("YYYY-MM-DD HH:mm");

  return date;
}
