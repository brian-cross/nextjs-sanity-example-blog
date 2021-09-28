import { parseISO, format } from "date-fns";

export default function formatIsoDate(isoDate) {
  return format(parseISO(isoDate), "PPP");
}
