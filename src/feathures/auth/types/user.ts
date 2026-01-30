export type User = {
    id: string;
    username: string;
    isSuperUser: boolean;
    email: string;
    isVerified: string;
    roleId: string;
}

export type RolePermission = {
    id: string;
    role: string;
    permission: string[]
} | null