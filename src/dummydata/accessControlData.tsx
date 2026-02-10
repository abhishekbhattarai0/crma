export type accessControlProps = {
    role: string,
    description: string,
    totalUsers: number,
    permission: string[]
}

export const permissionCategories = [
    {
        category: "Finance",
        permissions: [
            { key: "ACCOUNT_VIEW", label: "View Accounts" },
            { key: "ACCOUNT_EDIT", label: "Edit Accounts" },
            { key: "INVOICE_MANAGE", label: "Manage Invoices" },
            { key: "PAYMENT_MANAGE", label: "Manage Payments" },
        ],
    },
    {
        category: "CRM",
        permissions: [
            { key: "CUSTOMER_VIEW", label: "View Customers" },
            { key: "CUSTOMER_EDIT", label: "Edit Customers" },
        ],
    },
    {
        category: "Reports",
        permissions: [
            { key: "REPORT_VIEW", label: "View Reports" },
            { key: "REPORT_EXPORT", label: "Export Reports" },
        ],
    },
];

export const accessControlData: accessControlProps[] = [
    {
        role: "Super Admin",
        description: "Full system access",
        totalUsers: 3,
        permission: [
            "ACCOUNT_VIEW",
            "ACCOUNT_EDIT",
            "INVOICE_MANAGE",
            "PAYMENT_MANAGE",
            "CUSTOMER_VIEW",
            "REPORT_VIEW",
            "REPORT_EXPORT"
        ]
    },
    {
        role: "Developer",
        description: "Code & technical access",
        totalUsers: 12,
        permission: [
            "SYSTEM_SETTINGS",
            "CRM_VIEW",
            "LEAD_VIEW",
            "CUSTOMER_VIEW",
            "SUPPORT_TICKET_VIEW",
            "ACCOUNT_VIEW",
            "MARKETING_VIEW",
            "REPORT_VIEW"
        ]
    },
    {
        role: "Manager",
        description: "Team & sales overview",
        totalUsers: 8,
        permission: [
            "CRM_VIEW",
            "LEAD_VIEW",
            "LEAD_EDIT",
            "CUSTOMER_VIEW",
            "CUSTOMER_EDIT",
            "ACCOUNT_VIEW",
            "ACCOUNT_EDIT",
            "INVOICE_VIEW",
            "PAYMENT_VIEW",
            "REPORT_VIEW",
            "REPORT_EXPORT"
        ]
    },
    {
        role: "Support",
        description: "Customer ticket access",
        totalUsers: 15,
        permission: [
            "SUPPORT_TICKET_VIEW",
            "SUPPORT_TICKET_EDIT",
            "CUSTOMER_VIEW",
            "ACCOUNT_VIEW",
            "REPORT_VIEW"
        ]
    },
    {
        role: "Analyst",
        description: "Reporting & analytics",
        totalUsers: 5,
        permission: [
            "REPORT_VIEW",
            "REPORT_EXPORT",
            "ACCOUNT_VIEW",
            "CUSTOMER_VIEW",
            "LEAD_VIEW"
        ]
    }
]
