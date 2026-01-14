import { cn } from "@/lib/utils";

export function DetailField({
  label,
  value,
  className
}: {
  label: string,
  value: string,
  className?: string
}) {
  return (
    <div className={cn(
      'flex flex-col gap-2 w-full ',
      className
    )}>
      <p className="text-sm text-foreground/75">{label}</p>
      <p className="border border-foreground/20 text-foreground/75 px-2 py-1.5 rounded-sm text-sm">
        {value || "-"}
      </p>
    </div>
  );
}
