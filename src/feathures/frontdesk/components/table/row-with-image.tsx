import type { Row } from "@tanstack/react-table";

type RowCellProps<TData> = {
    row: Row<TData>;
    columnId: keyof TData;
};

const RowWithImage = <TData,>({ row, columnId }: RowCellProps<TData>) => {

    const images = row.getValue(columnId as string) as string[]
    return (
        <div >
            <div className=" font-normal text-foreground/80 flex gap-2">
                {images.map((item: string) =>
                    <img src={item} />
                )}
            </div>
        </div>
    )
}

export default RowWithImage