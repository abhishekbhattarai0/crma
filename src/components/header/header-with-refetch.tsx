import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";


const HeaderWithRefetch = ({refetch,isFetching}: {refetch: () => void,isFetching: boolean}) => {
  return (
   <div className="flex ">
                <Button
                    variant={"outline"}
                    size={"icon"}
                    onClick={refetch}
                >
                    <RefreshCcw
                        className={cn(
                            "transition-transform",
                            isFetching && "animate-spin"
                        )}
                    />
                </Button>
            </div> 
  )
}

export default HeaderWithRefetch