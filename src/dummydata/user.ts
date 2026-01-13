type PersonalDetailsProp = {
    firstName: string;
    lastName: string;
    gender: string;
    profilePhoto: string;
    dob: string;
    maritalStatus: string;
};

type ContactInformationProp = {
    officialEmail: string;
    personalEmail: string;
    phone: string;
    emergencyContactPhone: string;
    currentAddress: string;
    permanentAddress: string;
};

type CompanyInformationProp = {
    department: string;
    team: string;
    designation: string;
    jobTitle: string;
    shift: string;
};

type SystemAccessProp = {
    username: string;
    role:
    | "SUPER_ADMIN"
    | "DEVELOPER"
    | "SUPPORT_STAFF"
    | "ACCOUNT_STAFF"
    | "MARKET_STAFF";
    permissionGroup: string;
    status: string;
};

export type UserDataProps = {
    personalDetails: PersonalDetailsProp;
    contactInformation: ContactInformationProp;
    companyInformation: CompanyInformationProp;
    systemAccess: SystemAccessProp;
};


export const userData: UserDataProps[] = [
    {
        "personalDetails": {
            "firstName": "Sarah",
            "lastName": "Johnson",
            "gender": "Female",
            "profilePhoto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
            "dob": "1996-04-12",
            "maritalStatus": "Single"
        },
        "contactInformation": {
            "officialEmail": "sarah.johnson@company.com",
            "personalEmail": "sarah@gmail.com",
            "phone": "9841000001",
            "emergencyContactPhone": "9800000001",
            "currentAddress": "Kathmandu",
            "permanentAddress": "Lalitpur"
        },
        "companyInformation": {
            "department": "Engineering",
            "team": "Frontend",
            "designation": "Developer",
            "jobTitle": "React Developer",
            "shift": "Day"
        },
        "systemAccess": {
            "username": "sarahj",
            "role": "DEVELOPER",
            "permissionGroup": "DEV_STANDARD",
            "status": "ACTIVE"
        }
    },
    {
        "personalDetails": {
            "firstName": "Amit",
            "lastName": "Sharma",
            "gender": "Male",
            "profilePhoto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
            "dob": "1994-02-20",
            "maritalStatus": "Married"
        },
        "contactInformation": {
            "officialEmail": "amit.sharma@company.com",
            "personalEmail": "amit@gmail.com",
            "phone": "9841000002",
            "emergencyContactPhone": "9800000002",
            "currentAddress": "Bhaktapur",
            "permanentAddress": "Chitwan"
        },
        "companyInformation": {
            "department": "Support",
            "team": "Customer Care",
            "designation": "Support Staff",
            "jobTitle": "Support Executive",
            "shift": "Day"
        },
        "systemAccess": {
            "username": "amitsh",
            "role": "SUPPORT_STAFF",
            "permissionGroup": "SUPPORT_STANDARD",
            "status": "ACTIVE"
        }
    },
    {
        "personalDetails": {
            "firstName": "Nisha",
            "lastName": "Thapa",
            "gender": "Female",
            "profilePhoto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha",
            "dob": "1998-09-10",
            "maritalStatus": "Single"
        },
        "contactInformation": {
            "officialEmail": "nisha.thapa@company.com",
            "personalEmail": "nisha@gmail.com",
            "phone": "9841000003",
            "emergencyContactPhone": "9800000003",
            "currentAddress": "Pokhara",
            "permanentAddress": "Baglung"
        },
        "companyInformation": {
            "department": "Marketing",
            "team": "Digital",
            "designation": "Marketer",
            "jobTitle": "SEO Specialist",
            "shift": "Day"
        },
        "systemAccess": {
            "username": "nishat",
            "role": "MARKET_STAFF",
            "permissionGroup": "MARKETING_STANDARD",
            "status": "ACTIVE"
        }
    },
    {
        "personalDetails": {
            "firstName": "Rohan",
            "lastName": "Karki",
            "gender": "Male",
            "profilePhoto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
            "dob": "1995-07-18",
            "maritalStatus": "Single"
        },
        "contactInformation": {
            "officialEmail": "rohan.karki@company.com",
            "personalEmail": "rohan@gmail.com",
            "phone": "9841000004",
            "emergencyContactPhone": "9800000004",
            "currentAddress": "Dharan",
            "permanentAddress": "Ilam"
        },
        "companyInformation": {
            "department": "Finance",
            "team": "Accounts",
            "designation": "Account Staff",
            "jobTitle": "Account Officer",
            "shift": "Day"
        },
        "systemAccess": {
            "username": "rohank",
            "role": "ACCOUNT_STAFF",
            "permissionGroup": "ACCOUNT_STANDARD",
            "status": "ACTIVE"
        }
    },
    {
        "personalDetails": {
            "firstName": "Priya",
            "lastName": "Singh",
            "gender": "Female",
            "profilePhoto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
            "dob": "1993-11-05",
            "maritalStatus": "Married"
        },
        "contactInformation": {
            "officialEmail": "priya.singh@company.com",
            "personalEmail": "priya@gmail.com",
            "phone": "9841000005",
            "emergencyContactPhone": "9800000005",
            "currentAddress": "Biratnagar",
            "permanentAddress": "Janakpur"
        },
        "companyInformation": {
            "department": "Management",
            "team": "Core",
            "designation": "Admin",
            "jobTitle": "System Administrator",
            "shift": "Day"
        },
        "systemAccess": {
            "username": "priyas",
            "role": "SUPER_ADMIN",
            "permissionGroup": "ADMIN_FULL",
            "status": "ACTIVE"
        }
    }

    // 👉 Continue same pattern to reach 30 users
]

