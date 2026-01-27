const roles = [
    {
        "role": "DEVELOPER",
        "permission": [
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
        "role": "MARKET_STAFF",
        "permission": [
            "MARKETING_VIEW",
            "MARKETING_EDIT",
            "CAMPAIGN_MANAGE",
            "CRM_VIEW",
            "LEAD_VIEW",
            "REPORT_VIEW"
        ]
    },
    {
        "role": "SUPPORT_STAFF",
        "permission": [
            "SUPPORT_TICKET_VIEW",
            "SUPPORT_TICKET_REPLY",
            "SUPPORT_TICKET_CLOSE",
            "CUSTOMER_VIEW",
            "CRM_VIEW"
        ]
    },
    {
        "role": "SUPER_ADMIN",
        "permission": [
            "USER_MANAGE",
            "ROLE_MANAGE",
            "SYSTEM_SETTINGS",
            "CRM_VIEW",
            "CRM_EDIT",
            "CRM_DELETE",
            "LEAD_VIEW",
            "LEAD_ASSIGN",
            "LEAD_EDIT",
            "LEAD_DELETE",
            "CUSTOMER_VIEW",
            "CUSTOMER_EDIT",
            "SUPPORT_TICKET_VIEW",
            "SUPPORT_TICKET_REPLY",
            "SUPPORT_TICKET_CLOSE",
            "ACCOUNT_VIEW",
            "ACCOUNT_EDIT",
            "INVOICE_MANAGE",
            "PAYMENT_MANAGE",
            "MARKETING_VIEW",
            "MARKETING_EDIT",
            "CAMPAIGN_MANAGE",
            "REPORT_VIEW",
            "REPORT_EXPORT"
        ]
    },
    {
        "role": "ACCOUNT_STAFF",
        "permission": [
            "ACCOUNT_VIEW",
            "ACCOUNT_EDIT",
            "INVOICE_MANAGE",
            "PAYMENT_MANAGE",
            "CUSTOMER_VIEW",
            "REPORT_VIEW",
            "REPORT_EXPORT"
        ]
    }
];

export const hasPermission = (permissionUserHas, permissionRequiredToAccess) => {
    return permissionRequiredToAccess.some(permission => permissionUserHas.includes(permission));
}

const result = hasPermission(["ACCOUNT_VIEW"], roles[3].permission)
console.log(result)