import { EnumStatus } from "../../types/deals.types";
import type { IColumn } from "./kanban.types";

export const KANBAN_DATA: IColumn[] = [
  {
    id: EnumStatus.todo,
    name: "Inbox",
    items: [],
  },
  {
    id: EnumStatus["to-be-agreed"],
    name: "To be agreed",
    items: [],
  },
  {
    id: EnumStatus["in-progress"],
    name: "In production",
    items: [],
  },
  {
    id: EnumStatus.produced,
    name: "Produced",
    items: [],
  },
  {
    id: EnumStatus.done,
    name: "For shipment",
    items: [],
  },
];
