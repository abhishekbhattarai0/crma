import type { Row } from '@tanstack/react-table';
import type { LoginHistoryProps } from '@/dummydata/loginHistory';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

type ActiveSessionRowProps<TData extends LoginHistoryProps> = {
    row: Row<TData>;
}
const ActiveSessionRow = <TData extends LoginHistoryProps>({ row }: ActiveSessionRowProps<TData>) => {
    const navigate = useNavigate()

    const handleActiveSession = (username:string,authId:string) => {
        navigate(`/user-management/active-session/${username}`,{state:{authId}})
    }
    return (
        <Button variant={"default"}
            size={'extra-sm'}
            onClick={() => handleActiveSession(row.original.username,row.original.authId)}
        >
           Active Session 
        </Button>
    )
}

export default ActiveSessionRow