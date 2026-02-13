import type { Row } from '@tanstack/react-table';
import type { LoginHistoryProps } from '@/dummydata/loginHistory';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

type LoginActionRowProps<TData extends LoginHistoryProps> = {
    row: Row<TData>;
}
const LoginActionRow = <TData extends LoginHistoryProps>({ row }: LoginActionRowProps<TData>) => {
    const navigate = useNavigate()

    const handleLoginHistory = (username:string,userId:string) => {
        console.log(userId)
        navigate(`/user-management/user/login-history/${username}`,{state:{userId}})
    }
    return (
        <Button variant={"default"}
            size={'extra-sm'}
            onClick={() => handleLoginHistory(row.original.username,row.original.authId)}
        >
           Login History 
        </Button>
    )
}

export default LoginActionRow