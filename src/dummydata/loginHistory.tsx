export interface LoginHistoryProps {
    id: string;
    createdAt: string;
    expiresAt: string;
    revoked: boolean;
    ipAddress: string;
    userAgent: string;
    username: string;
    authId: string;
}


export const loginHistory: LoginHistoryProps[] = [
    {
        "id": "1",
        "createdAt": "2026-02-12T01:51:53.827Z",
        "expiresAt": "2026-02-13T01:51:53.824Z",
        "revoked": false,
        "ipAddress": "::1",
        "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
        "username": "admin",
        "authId":'jjk'
    },
    {
        "id": "2",
        "createdAt": "2026-02-12T01:36:35.031Z",
        "expiresAt": "2026-02-13T01:36:35.028Z",
        "revoked": false,
        "ipAddress": "::1",
        "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
        "username": "admin",
        authId: 'dlj'
    }
]