import type { Row } from "@tanstack/react-table";
import { Avatar, AvatarImage } from "../ui/avatar";

type AvatarCellProps<TData> = {
  row: Row<TData>;
  columnId: string;
};

export const AvatarCell = <TData,>({
  row,
  columnId,
}: AvatarCellProps<TData>) => {
  return (
    <Avatar className="size-8">
      <AvatarImage src={row.getValue(columnId)} />
    </Avatar>
  );
};
