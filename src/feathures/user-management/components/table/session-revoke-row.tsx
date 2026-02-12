import { Button } from '@/components/ui/button'
import type { LoginHistoryProps } from '@/dummydata/loginHistory'
import type { Row } from '@tanstack/react-table'
import { useRevokeLoginSessionMutation } from '../../userStore/userApi';
import { toast } from 'sonner';
import ConfirmationDialog from '@/components/confirmation-dialog';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

type SessionRevokeRowProps<TData extends LoginHistoryProps> = {
    row: Row<TData>;
}
const SessionRevokeRow = <TData extends LoginHistoryProps>({ row }: SessionRevokeRowProps<TData>) => {

    const [revokeLoginSession] = useRevokeLoginSessionMutation()
    const revokeSession = async (sessionId: string) => {
        console.log('first login history id', sessionId)
        try {
            const response = await revokeLoginSession(sessionId).unwrap()
            console.log('response', response)
            toast.success(response.message)
        } catch (error) {
            const err = error as FetchBaseQueryError as { data: { message: string } };
            console.log('error', err)
            toast.error(err.data.message)
        }
    }

    const isRevoked = row.original.revoked
    return (
        <ConfirmationDialog
            title={"Revoke User Session"}
            description={isRevoked ? "Session is already revoked" : "Are you sure you want to revoke this session?"}
            onConfirm={() => revokeSession(row.original.id)}
            onCancel={() => { return }}
        >
            <Button variant={isRevoked ? "default" : "destructive"} size={'extra-sm'} disabled={isRevoked}>
                {isRevoked ? "Revoked" : "Revoke"}
            </Button>
        </ConfirmationDialog>
    )
}

export default SessionRevokeRow