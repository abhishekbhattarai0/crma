// type PersonalDetailsProp = {
//     firstName: string;
//     lastName: string;
//     gender: string;
//     profilePhoto: string;
//     dob: string;
//     maritalStatus: string;
// };

// type ContactInformationProp = {
//     officialEmail: string;
//     personalEmail: string;
//     phone: string;
//     emergencyContactPhone: string;
//     currentAddress: string;
//     permanentAddress: string;
// };

// type CompanyInformationProp = {
//     department: string;
//     team: string;
//     designation: string;
//     jobTitle: string;
//     shift: string;
// };

// type SystemAccessProp = {
//     username: string;
//     role:
//     | "SUPER_ADMIN"
//     | "DEVELOPER"
//     | "SUPPORT_STAFF"
//     | "ACCOUNT_STAFF"
//     | "MARKET_STAFF";
//     permissionGroup: string;
//     status: string;
// };

// export type UserDataProps = {
//     personalDetails: PersonalDetailsProp;
//     contactInformation: ContactInformationProp;
//     companyInformation: CompanyInformationProp;
//     systemAccess: SystemAccessProp;
// };

//  {
//             "id": "310b2ca7-7ace-4b19-938b-5cdf671b6695",
//             "firstName": "Rohan",
//             "lastName": "Shrestha",
//             "gender": "MALE",
//             "avatar": "https://cdn.example.com/avatars/rohan.png",
//             "dob": "1998-04-17",
//             "maritalStatus": "UNMARRIED",
//             "officialEmail": "rohan.shrestha@company.com",
//             "personal_email": "rohan98@gmail.com",
//             "phone": "+9779812345678",
//             "emergency_contact_phone": "+9779800001122",
//             "current_address": "Baneshwor, Kathmandu",
//             "permanent_address": "Pokhara, Nepal",
//             "department": "Engineering",
//             "team": "Platform",
//             "designation": "Software Engineer",
//             "job_title": "Backend Developer",
//             "shift": null,
//             "is_active": "ACTIVE",
//             "is_locked": null,
//             "locked_till": null,
//             "created_at": "2026-02-04T05:41:41.815Z",
//             "updatedAt": "2026-02-04T05:41:41.815Z"
//         },

// export const userData: UserDataProps[] = [
//     {
//         "personalDetails": {
//             "firstName": "Sarah",
//             "lastName": "Johnson",
//             "gender": "Female",
//             "profilePhoto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
//             "dob": "1996-04-12",
//             "maritalStatus": "Single"
//         },
//         "contactInformation": {
//             "officialEmail": "sarah.johnson@company.com",
//             "personalEmail": "sarah@gmail.com",
//             "phone": "9841000001",
//             "emergencyContactPhone": "9800000001",
//             "currentAddress": "Kathmandu",
//             "permanentAddress": "Lalitpur"
//         },
//         "companyInformation": {
//             "department": "Engineering",
//             "team": "Frontend",
//             "designation": "Developer",
//             "jobTitle": "React Developer",
//             "shift": "Day"
//         },
//         "systemAccess": {
//             "username": "sarahj",
//             "role": "DEVELOPER",
//             "permissionGroup": "DEV_STANDARD",
//             "status": "ACTIVE"
//         }
//     },
//     {
//         "personalDetails": {
//             "firstName": "Amit",
//             "lastName": "Sharma",
//             "gender": "Male",
//             "profilePhoto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
//             "dob": "1994-02-20",
//             "maritalStatus": "Married"
//         },
//         "contactInformation": {
//             "officialEmail": "amit.sharma@company.com",
//             "personalEmail": "amit@gmail.com",
//             "phone": "9841000002",
//             "emergencyContactPhone": "9800000002",
//             "currentAddress": "Bhaktapur",
//             "permanentAddress": "Chitwan"
//         },
//         "companyInformation": {
//             "department": "Support",
//             "team": "Customer Care",
//             "designation": "Support Staff",
//             "jobTitle": "Support Executive",
//             "shift": "Day"
//         },
//         "systemAccess": {
//             "username": "amitsh",
//             "role": "SUPPORT_STAFF",
//             "permissionGroup": "SUPPORT_STANDARD",
//             "status": "ACTIVE"
//         }
//     },
//     {
//         "personalDetails": {
//             "firstName": "Nisha",
//             "lastName": "Thapa",
//             "gender": "Female",
//             "profilePhoto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha",
//             "dob": "1998-09-10",
//             "maritalStatus": "Single"
//         },
//         "contactInformation": {
//             "officialEmail": "nisha.thapa@company.com",
//             "personalEmail": "nisha@gmail.com",
//             "phone": "9841000003",
//             "emergencyContactPhone": "9800000003",
//             "currentAddress": "Pokhara",
//             "permanentAddress": "Baglung"
//         },
//         "companyInformation": {
//             "department": "Marketing",
//             "team": "Digital",
//             "designation": "Marketer",
//             "jobTitle": "SEO Specialist",
//             "shift": "Day"
//         },
//         "systemAccess": {
//             "username": "nishat",
//             "role": "MARKET_STAFF",
//             "permissionGroup": "MARKETING_STANDARD",
//             "status": "ACTIVE"
//         }
//     },
//     {
//         "personalDetails": {
//             "firstName": "Rohan",
//             "lastName": "Karki",
//             "gender": "Male",
//             "profilePhoto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
//             "dob": "1995-07-18",
//             "maritalStatus": "Single"
//         },
//         "contactInformation": {
//             "officialEmail": "rohan.karki@company.com",
//             "personalEmail": "rohan@gmail.com",
//             "phone": "9841000004",
//             "emergencyContactPhone": "9800000004",
//             "currentAddress": "Dharan",
//             "permanentAddress": "Ilam"
//         },
//         "companyInformation": {
//             "department": "Finance",
//             "team": "Accounts",
//             "designation": "Account Staff",
//             "jobTitle": "Account Officer",
//             "shift": "Day"
//         },
//         "systemAccess": {
//             "username": "rohank",
//             "role": "ACCOUNT_STAFF",
//             "permissionGroup": "ACCOUNT_STANDARD",
//             "status": "ACTIVE"
//         }
//     },
//     {
//         "personalDetails": {
//             "firstName": "Priya",
//             "lastName": "Singh",
//             "gender": "Female",
//             "profilePhoto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
//             "dob": "1993-11-05",
//             "maritalStatus": "Married"
//         },
//         "contactInformation": {
//             "officialEmail": "priya.singh@company.com",
//             "personalEmail": "priya@gmail.com",
//             "phone": "9841000005",
//             "emergencyContactPhone": "9800000005",
//             "currentAddress": "Biratnagar",
//             "permanentAddress": "Janakpur"
//         },
//         "companyInformation": {
//             "department": "Management",
//             "team": "Core",
//             "designation": "Admin",
//             "jobTitle": "System Administrator",
//             "shift": "Day"
//         },
//         "systemAccess": {
//             "username": "priyas",
//             "role": "SUPER_ADMIN",
//             "permissionGroup": "ADMIN_FULL",
//             "status": "ACTIVE"
//         }
//     }

//     // 👉 Continue same pattern to reach 30 users
// ]

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';
export type MaritalStatus = 'SINGLE' | 'MARRIED';
export type ActiveStatus = 'ACTIVE' | 'INACTIVE';

export interface userDataProps {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  avatar: string | null;
  dob: string;
  maritalStatus: MaritalStatus;
  officialEmail: string;
  personalEmail: string;
  phone: string;
  emergencyContactPhone: string;
  currentAddress: string;
  permanentAddress: string;
  department: string;
  team: string;
  designation: string;
  jobTitle: string;
  shift: string;
  isActive: ActiveStatus;
  isLocked: boolean | null;
  lockedTill: string | null;
  createdAt: string;
  updatedAt: string;
}

export const userData: userDataProps[] = [
  {
    id: 'f1a07990-a606-4a4c-9621-3b120c89861d',
    username: 'sarah',
    firstName: 'Sarah',
    lastName: 'Johnson',
    gender: 'FEMALE',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    dob: '1996-04-12',
    maritalStatus: 'MARRIED',
    officialEmail: 'sarah.johnson@company.com',
    personalEmail: 'sarah@gmail.com',
    phone: '9841000001',
    emergencyContactPhone: '9800000001',
    currentAddress: 'Kathmandu',
    permanentAddress: 'Lalitpur',
    department: 'Engineering',
    team: 'Frontend',
    designation: 'Developer',
    jobTitle: 'React Developer',
    shift: 'Day',
    isActive: 'ACTIVE',
    isLocked: null,
    lockedTill: null,
    createdAt: '2026-02-04T10:07:00.545Z',
    updatedAt: '2026-02-04T10:07:00.545Z',
  },
  {
    id: 'b2c1d3e4-1111-4b2a-9d22-aaaa11111111',
    username: 'john',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'MALE',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    dob: '1993-09-18',
    maritalStatus: 'SINGLE',
    officialEmail: 'john.doe@company.com',
    personalEmail: 'john@gmail.com',
    phone: '9841000002',
    emergencyContactPhone: '9800000002',
    currentAddress: 'Kathmandu',
    permanentAddress: 'Bhaktapur',
    department: 'Engineering',
    team: 'Backend',
    designation: 'Developer',
    jobTitle: 'Node Developer',
    shift: 'Day',
    isActive: 'ACTIVE',
    isLocked: false,
    lockedTill: null,
    createdAt: '2026-02-04T10:07:00.545Z',
    updatedAt: '2026-02-04T10:07:00.545Z',
  },
  {
    id: 'c3d2e1f0-2222-4c3b-8e33-bbbb22222222',
    username: 'emily',
    firstName: 'Emily',
    lastName: 'Clark',
    gender: 'FEMALE',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    dob: '1998-01-25',
    maritalStatus: 'SINGLE',
    officialEmail: 'emily.clark@company.com',
    personalEmail: 'emily@gmail.com',
    phone: '9841000003',
    emergencyContactPhone: '9800000003',
    currentAddress: 'Pokhara',
    permanentAddress: 'Pokhara',
    department: 'Design',
    team: 'UI/UX',
    designation: 'Designer',
    jobTitle: 'UI/UX Designer',
    shift: 'Day',
    isActive: 'ACTIVE',
    isLocked: false,
    lockedTill: null,
    createdAt: '2026-02-04T10:07:00.545Z',
    updatedAt: '2026-02-04T10:07:00.545Z',
  },
  {
    id: 'd4e5f6a7-3333-4d4c-7f44-cccc33333333',
    firstName: 'Michael',
    username: 'michael',
    lastName: 'Brown',
    gender: 'MALE',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    dob: '1991-06-10',
    maritalStatus: 'MARRIED',
    officialEmail: 'michael.brown@company.com',
    personalEmail: 'michael@gmail.com',
    phone: '9841000004',
    emergencyContactPhone: '9800000004',
    currentAddress: 'Lalitpur',
    permanentAddress: 'Lalitpur',
    department: 'Engineering',
    team: 'DevOps',
    designation: 'Engineer',
    jobTitle: 'DevOps Engineer',
    shift: 'Night',
    isActive: 'ACTIVE',
    isLocked: false,
    lockedTill: null,
    createdAt: '2026-02-04T10:07:00.545Z',
    updatedAt: '2026-02-04T10:07:00.545Z',
  },
  {
    id: 'e5f6a7b8-4444-4e5d-6g55-dddd44444444',
    firstName: 'Aisha',
    username: 'aisha',
    lastName: 'Khan',
    gender: 'FEMALE',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha',
    dob: '1995-11-02',
    maritalStatus: 'SINGLE',
    officialEmail: 'aisha.khan@company.com',
    personalEmail: 'aisha@gmail.com',
    phone: '9841000005',
    emergencyContactPhone: '9800000005',
    currentAddress: 'Biratnagar',
    permanentAddress: 'Biratnagar',
    department: 'HR',
    team: 'Recruitment',
    designation: 'Officer',
    jobTitle: 'HR Officer',
    shift: 'Day',
    isActive: 'ACTIVE',
    isLocked: false,
    lockedTill: null,
    createdAt: '2026-02-04T10:07:00.545Z',
    updatedAt: '2026-02-04T10:07:00.545Z',
  },
  {
    id: 'f6a7b8c9-5555-4f6e-5h66-eeee55555555',
    firstName: 'David',
    lastName: 'Wilson',
    username: 'david',
    gender: 'MALE',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    dob: '1989-03-14',
    maritalStatus: 'MARRIED',
    officialEmail: 'david.wilson@company.com',
    personalEmail: 'david@gmail.com',
    phone: '9841000006',
    emergencyContactPhone: '9800000006',
    currentAddress: 'Kathmandu',
    permanentAddress: 'Chitwan',
    department: 'Finance',
    team: 'Accounts',
    designation: 'Manager',
    jobTitle: 'Finance Manager',
    shift: 'Day',
    isActive: 'ACTIVE',
    isLocked: false,
    lockedTill: null,
    createdAt: '2026-02-04T10:07:00.545Z',
    updatedAt: '2026-02-04T10:07:00.545Z',
  },
  {
    id: 'a7b8c9d0-6666-4a7f-4i77-ffff66666666',
    username: 'nina',
    firstName: 'Nina',
    lastName: 'Sharma',
    gender: 'FEMALE',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nina',
    dob: '1997-07-07',
    maritalStatus: 'SINGLE',
    officialEmail: 'nina.sharma@company.com',
    personalEmail: 'nina@gmail.com',
    phone: '9841000007',
    emergencyContactPhone: '9800000007',
    currentAddress: 'Butwal',
    permanentAddress: 'Butwal',
    department: 'Engineering',
    team: 'Mobile',
    designation: 'Developer',
    jobTitle: 'Flutter Developer',
    shift: 'Day',
    isActive: 'ACTIVE',
    isLocked: false,
    lockedTill: null,
    createdAt: '2026-02-04T10:07:00.545Z',
    updatedAt: '2026-02-04T10:07:00.545Z',
  },
  {
    id: 'b8c9d0e1-7777-4b8a-3j88-aaaa77777777',
    username: 'robert',
    firstName: 'Robert',
    lastName: 'Lee',
    gender: 'MALE',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
    dob: '1990-12-30',
    maritalStatus: 'MARRIED',
    officialEmail: 'robert.lee@company.com',
    personalEmail: 'robert@gmail.com',
    phone: '9841000008',
    emergencyContactPhone: '9800000008',
    currentAddress: 'Dharan',
    permanentAddress: 'Dharan',
    department: 'Operations',
    team: 'Support',
    designation: 'Supervisor',
    jobTitle: 'Operations Supervisor',
    shift: 'Night',
    isActive: 'ACTIVE',
    isLocked: false,
    lockedTill: null,
    createdAt: '2026-02-04T10:07:00.545Z',
    updatedAt: '2026-02-04T10:07:00.545Z',
  },
  {
    id: 'c9d0e1f2-8888-4c9b-2k99-bbbb88888888',
    username: 'sophia',
    firstName: 'Sophia',
    lastName: 'Martinez',
    gender: 'FEMALE',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia',
    dob: '1994-05-21',
    maritalStatus: 'MARRIED',
    officialEmail: 'sophia.martinez@company.com',
    personalEmail: 'sophia@gmail.com',
    phone: '9841000009',
    emergencyContactPhone: '9800000009',
    currentAddress: 'Kathmandu',
    permanentAddress: 'Hetauda',
    department: 'Marketing',
    team: 'Digital',
    designation: 'Executive',
    jobTitle: 'Digital Marketing Executive',
    shift: 'Day',
    isActive: 'ACTIVE',
    isLocked: false,
    lockedTill: null,
    createdAt: '2026-02-04T10:07:00.545Z',
    updatedAt: '2026-02-04T10:07:00.545Z',
  },
];
