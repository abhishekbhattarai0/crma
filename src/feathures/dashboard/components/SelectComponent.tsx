

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export function SelectComponent({ placeholder, options, onValueChange }: {
    placeholder: string;
    options: {
        label: string, value: string
    }[];
    onValueChange: (value: string) => void;
}) {
    return (
        <Select onValueChange={onValueChange}>
            <SelectTrigger className="w-full ">
                <SelectValue placeholder={placeholder} className=" "/>
            </SelectTrigger>
            <SelectContent>

                {options.map((option) => (
                    <SelectItem value={option.value} className="text-foreground/85">{option.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}