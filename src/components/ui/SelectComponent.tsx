

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export function SelectComponent({ placeholder, options, onValueChange, value }: {
    placeholder: string;
    options: {
        label: string, value: string
    }[];
    onValueChange: (value: string) => void;
    value?: string;
}) {
    return (
        <Select onValueChange={onValueChange} value={value} key={value ?? 'empty'} >
            <SelectTrigger className="w-full text-foreground/85 border-foreground/20 " size="sm">
                <SelectValue placeholder={placeholder} className="" />
            </SelectTrigger>
            <SelectContent>

                {options?.map((option) => (
                    <SelectItem value={option.value} key={option.label} className="text-foreground/85">{option.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}