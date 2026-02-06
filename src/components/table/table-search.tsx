import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Input } from '../ui/input'
import type { Table } from '@tanstack/react-table'

interface DataTableSearchingProps<TData> {
    table: Table<TData>,
    className?:string
}



const TableSearch = <TData,>({
    table,
    className,
    searchKey = "email" // Default to email for now, but should be passed from parent
}: DataTableSearchingProps<TData> & { searchKey?: string }) => {
    // 1. Use local state for immediate feedback
    const [value, setValue] = useState<string>((table.getColumn(searchKey)?.getFilterValue() as string) ?? "")

    return (
        <div className={cn(
            'w-full text-foreground/85',
            className,
        )}>
            <Input
                placeholder={`Filter ${searchKey}...`}
                value={value}
                onChange={(event) => {
                    const newValue = event.target.value
                    setValue(newValue)
                    // 2. Sync with table filter
                    table.getColumn(searchKey)?.setFilterValue(newValue)
                }}
                className="w-full text-foreground border-kd active:outline-none text-sm rounded-sm"
            />
        </div>
    )
}

export default TableSearch