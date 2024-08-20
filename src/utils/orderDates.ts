import { compareDesc } from "date-fns";
import { DataStorageProps } from "../@types/storage";

function orderDates(items: DataStorageProps[]) {
  return items
    .sort((a, b) => compareDesc(new Date(a.title), new Date(b.title)))
    .map(({ title, data }) => ({
      title,
      data: data.sort((a, b) =>
        compareDesc(new Date(a.hour), new Date(b.hour))
      ),
    }));
}
export { orderDates };
