import { cn } from "@/utils/cn";

type AvatarProps = {
  className?: string;
  children: React.ReactNode
}

const Avatar = ({ className, children }: AvatarProps) => {
  return (
    <div className={cn(
      "relative flex  shrink-0 overflow-hidden rounded-full ",
      className
    )}>
      {children}
    </div>
  )
}

type AvatarImageProps = {
  className?: string;
  src: string;
  alt?: string
}

const AvatarImage = ({ className, src, alt, ...props }: AvatarImageProps) => {
  return (
    <img
      className={cn(
        "aspect-square size-full",
        className
      )}
      src={src}
      alt={alt}
      {...props}
    />
  )
}

const AvatarImageFallback = ({ className, text, ...props }:
  {
    text: string, className?: string;
    alt?: string
  }) => {
  return (
    <div
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {text}
    </div>
  )
}





export { Avatar, AvatarImage, AvatarImageFallback }
