import type { Row } from "@tanstack/react-table";


type RowCellProps<TData> = {
    row: Row<TData>;
    columnId: string;
};

const StatusCell = <TData,>({ row, columnId }: RowCellProps<TData>) => {
    const status = row.getValue(columnId) as string;

    const statusStyles: Record<string, string> = {
        ACTIVE: "bg-green-100 text-green-700",
        INACTIVE: "bg-gray-100 text-gray-700",
        SUSPENDED: "bg-red-100 text-red-700",
    };

    return (
        <span
            className={`px-2 py-0.5 rounded-md text-xs font-medium ${statusStyles[status]
                }`}
        >
            {status}
        </span>
    );
};

export default StatusCell;