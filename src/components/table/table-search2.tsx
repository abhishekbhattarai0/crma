// components/table-search.tsx
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
// import { useDebounce } from "@/hooks/use-debounce"

interface SearchFieldOption {
    label: string
    value: string
}

interface TableSearchProps {
    fields: SearchFieldOption[]   // 🔹 NEW: dropdown options
    defaultField?: string         // 🔹 NEW
    onSearch: (params: {
        field: string
        term: string
    }) => void
    className?: string
}

const TableSearch = ({
    fields,
    defaultField,
    onSearch,
    className,
}: TableSearchProps) => {

    const [field, setField] = useState(defaultField ?? fields[0]?.value)
    const [term, setTerm] = useState("")

    const debouncedTerm = useDebounce(term, 500) // 🔹 NEW: debounce

    // 🔹 NEW: fire only when debounce finishes
    useEffect(() => {
        const trimmed = term.trim();

        if (!trimmed) {
            onSearch({ field, term: "" })
            return;
        }
        onSearch({ field, term: debouncedTerm })
    }, [debouncedTerm, field])

    return (
        <div className={cn("flex gap-2 w-full", className)}>

            {/* 🔹 NEW: Field Dropdown */}
            <select
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="border rounded-sm px-2 text-sm"
            >
                {fields.map((f) => (
                    <option key={f.value} value={f.value}>
                        {f.label}
                    </option>
                ))}
            </select>

            <Input
                placeholder={`Search ${field}`}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full text-sm"
            />
        </div>
    )
}

export default TableSearch


// hooks/use-debounce.ts

function useDebounce<T>(value: T, delay = 400) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounced(value)
        }, delay)

        return () => clearTimeout(handler)
    }, [value, delay])

    return debounced
}