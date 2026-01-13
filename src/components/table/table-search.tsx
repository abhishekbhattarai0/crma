import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import type { Table } from '@tanstack/react-table'

interface DataTableSearchingProps<TData> {
    table: Table<TData>,
    className?:string
}



const TableSearch = <TData,>({
    table,
    className
}: DataTableSearchingProps<TData>) => {
    return (
        <div className={cn(
            'w-full text-foreground/85',
            className,
        )}>
            <Input
                placeholder="Filter emails..."
                value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                    table.getColumn("email")?.setFilterValue(event.target.value)
                }
                className="w-full text-foreground border-kd active:outline-none text-sm rounded-sm"
            />
        </div>
    )
}

export default TableSearch