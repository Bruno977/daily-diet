import { format } from "date-fns";

function formatDate(date: Date) {
  return format(date, "dd/MM/yyyy");
}

function formatDateTitle(date: Date) {
  return format(date, "dd.MM.yyyy");
}

function formatTime(date: Date) {
  return format(date, "HH:mm");
}

function formatDetailsMealTime(date: Date) {
  return format(new Date(date), "dd/MM/yyyy 'às' HH:mm");
}

export { formatDate, formatTime, formatDateTitle, formatDetailsMealTime };
