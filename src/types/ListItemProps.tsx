import { GroceryList } from "@prisma/client";

export interface ListItemProps {
  item: GroceryList;
  onUpdate?: (item: GroceryList) => void;
}
