import type { Row } from "@tanstack/react-table";

type RowCellProps<TData> = {
    row: Row<TData>;
    columnId: keyof TData;
};

const RowCellWithTags = <TData,>({ row, columnId }: RowCellProps<TData>) => {

    return (
        <div >
            <div className=" font-normal text-foreground/80 flex gap-2">
                {row.getValue(columnId as string)}
                {/* {row.getValue(columnId ).map((item: string) => <div className="bg-blue-500 text-white px-2 py-0.5 rounded-md">{item}</div>)} */}
            </div>
        </div>
    )
}

export default RowCellWithTags;