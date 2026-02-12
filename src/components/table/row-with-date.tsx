import type { Row } from "@tanstack/react-table";

type RowCellProps<TData> = {
    row: Row<TData>;
    columnId: string;
};



const RowWithDate = <TData,>({ row, columnId }: RowCellProps<TData>) => {
    return (
        <div className="font-normal text-foreground/80">
            {new Date(row.getValue(columnId)).toLocaleString()}
        </div>
    );
};

export default RowWithDate;