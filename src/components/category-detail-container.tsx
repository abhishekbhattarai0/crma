import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react';

const CategoryDetailContainer = ({
  title,
  children,
  icon: Icon
}: {
  title: string;
  icon: LucideIcon;
  children: ReactNode;

}) => {
  return (
    <Card className="px-0 py-1 shadow-xs">
      <CardHeader className="border-b flex  items-center px-4 ">
        <div className="text-xs text-foreground/75">
          {Icon && <Icon size={14} />}
        </div>
        <CardTitle className="text-foreground/75 font-semibold text-md">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className=" space-y-3 text-xs px-4  py-2 w-full">
        {children}
      </CardContent>
    </Card>

  )
}

export default CategoryDetailContainer
