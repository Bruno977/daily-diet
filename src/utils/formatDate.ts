import { format } from "date-fns";

function formatDate(date: Date) {
  return format(date, "dd/MM/yyyy");
}

function formatTime(date: Date) {
  return format(date, "HH:mm");
}
export {formatDate, formatTime}