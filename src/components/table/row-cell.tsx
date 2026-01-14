import type { Row } from "@tanstack/react-table";

type RowCellProps<TData> = {
  row: Row<TData>;
  columnId: string;
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

const RowCell = <TData,>({ row, columnId }: RowCellProps<TData>) => {
  return (
    <div className="font-normal text-foreground/80">
      {row.getValue(columnId)}
    </div>
  );
};

export default RowCell;