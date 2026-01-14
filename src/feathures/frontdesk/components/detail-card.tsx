export default function Detail({
    label,
    value,
    link
}: {
    label: string
    value?: string
    link?: string
}) {
    return (
        <div>
            <p className="text-xs font-semibold uppercase text-foreground/65 mb-1">{label}</p>

            {link && <a href={link} className="text-primary hover:underline">
                {link}
            </a>}
            {value && <p className="font-medium text-xs text-foreground/80">{value}</p>}
        </div>
    )
}