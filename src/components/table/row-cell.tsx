import type { Row } from "@tanstack/react-table";

type RowCellProps<TData> = {
  row: Row<TData>;
  columnId: string;
  onClick?: () => void
};

// export const RowCell = <TData,>({ row, name }: RowCellProps<TData>) => {
//   return (
//     <div>
//       <div className="font-normal text-foreground/80">
//         {row.getValue(name as string)}
//       </div>
//     </div>
//   );
// };

const RowCell = <TData,>({ row, columnId, onClick }: RowCellProps<TData>) => {
  return (
    <div onClick={onClick} className="font-normal text-foreground/80">
      {row.getValue(columnId)}
    </div>
  );
};

export default RowCell;