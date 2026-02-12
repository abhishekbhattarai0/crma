import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "./ui/alert-dialog"

const ConfirmationDialog = ({
    title,
    description,
    onConfirm,
    onCancel,
    children
}: {
    title: string,
    description: string,
    onConfirm: () => void,
    onCancel: () => void,
    children: React.ReactNode
}) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger >
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
                    <AlertDialogAction variant={'destructive'} onClick={onConfirm}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ConfirmationDialog