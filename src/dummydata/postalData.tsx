export interface PostalProps {
  referenceNo: string
  date: string
  fromDate: string
  address: string
  note: string
  toTitle: string
  letterNo: string
  docs: string[]
}

export const postal: PostalProps[] = [
  {
    referenceNo: "REF-2024-001",
    date: "2024-01-05",
    fromDate: "2024-01-04",
    address: "Kathmandu Metropolitan City, Nepal",
    note: "Request for project proposal submission.",
    toTitle: "Project Manager",
    letterNo: "LTR-001",
    docs: ["https://example.com/docs/proposal-request.pdf"]
  },
  {
    referenceNo: "REF-2024-002",
    date: "2024-01-18",
    fromDate: "2024-01-17",
    address: "Lalitpur Sub-Metropolitan City, Nepal",
    note: "Submission of company profile and credentials.",
    toTitle: "Procurement Department",
    letterNo: "LTR-002",
    docs: [
      "https://example.com/docs/company-profile.pdf",
      "https://example.com/docs/credentials.pdf"
    ]
  },
  {
    referenceNo: "REF-2024-003",
    date: "2024-02-02",
    fromDate: "2024-02-01",
    address: "Bhaktapur Municipality, Nepal",
    note: "Signed NDA document dispatch.",
    toTitle: "Legal Department",
    letterNo: "LTR-003",
    docs: ["https://example.com/docs/nda-signed.pdf"]
  },
  {
    referenceNo: "REF-2024-004",
    date: "2024-02-15",
    fromDate: "2024-02-14",
    address: "Pokhara Metropolitan City, Nepal",
    note: "Software development contract delivery.",
    toTitle: "Finance Department",
    letterNo: "CTR-004",
    docs: ["https://example.com/docs/software-contract.pdf"]
  },
  {
    referenceNo: "REF-2024-005",
    date: "2024-03-01",
    fromDate: "2024-02-28",
    address: "Biratnagar Industrial Area, Nepal",
    note: "Invoice for milestone one payment.",
    toTitle: "Accounts Section",
    letterNo: "INV-005",
    docs: ["https://example.com/docs/invoice-milestone-1.pdf"]
  },
  {
    referenceNo: "REF-2024-006",
    date: "2024-03-14",
    fromDate: "2024-03-13",
    address: "Butwal Sub-Metropolitan City, Nepal",
    note: "Delivery of system architecture documents.",
    toTitle: "Technical Team",
    letterNo: "DOC-006",
    docs: [
      "https://example.com/docs/system-architecture.pdf",
      "https://example.com/docs/api-specification.pdf"
    ]
  },
  {
    referenceNo: "REF-2024-007",
    date: "2024-03-28",
    fromDate: "2024-03-27",
    address: "Hetauda Industrial Zone, Nepal",
    note: "Progress report submission for Q1.",
    toTitle: "Project Oversight Committee",
    letterNo: "RPT-007",
    docs: ["https://example.com/docs/q1-progress-report.pdf"]
  },
  {
    referenceNo: "REF-2024-008",
    date: "2024-04-10",
    fromDate: "2024-04-09",
    address: "Dharan Sub-Metropolitan City, Nepal",
    note: "Request for payment clearance.",
    toTitle: "Finance Controller",
    letterNo: "REQ-008",
    docs: ["https://example.com/docs/payment-request.pdf"]
  },
  {
    referenceNo: "REF-2024-009",
    date: "2024-04-22",
    fromDate: "2024-04-21",
    address: "Janakpur Sub-Metropolitan City, Nepal",
    note: "Submission of revised project timeline.",
    toTitle: "Operations Manager",
    letterNo: "UPD-009",
    docs: ["https://example.com/docs/revised-timeline.pdf"]
  },
  {
    referenceNo: "REF-2024-010",
    date: "2024-05-06",
    fromDate: "2024-05-05",
    address: "Nepalgunj Sub-Metropolitan City, Nepal",
    note: "Final invoice and completion certificate.",
    toTitle: "Accounts Department",
    letterNo: "INV-010",
    docs: [
      "https://example.com/docs/final-invoice.pdf",
      "https://example.com/docs/completion-certificate.pdf"
    ]
  },
  {
    referenceNo: "REF-2024-011",
    date: "2024-05-20",
    fromDate: "2024-05-19",
    address: "Internal Records Department",
    note: "Archival of project-related correspondence.",
    toTitle: "Records Officer",
    letterNo: "ARC-011",
    docs: ["https://example.com/docs/archive-summary.pdf"]
  }
]
