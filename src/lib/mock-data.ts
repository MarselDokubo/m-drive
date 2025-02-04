export interface File {
  id: string;
  name: string;
  url: string;
  parent: string;
  size: string;
}

export type Folder = {
  id: string;
  name: string;
  parent: string | null;
};

export const mockFolders: Folder[] = [
  { id: "root", name: "root", parent: null },
  { id: "1", name: "Documents", parent: "root" },
  { id: "2", name: "Images", parent: "root" },
  { id: "3", name: "Work", parent: "root" },
  { id: "4", name: "Presentations", parent: "3" },
];

export const mockFiles: File[] = [
  {
    id: "4",
    name: "Resume.pdf",
    url: "/files/resume.pdf",
    parent: "root",
    size: "1.2 MB",
  },
  {
    id: "5",
    name: "Project Proposal.docx",
    url: "/files/proposal.docx",
    parent: "1",
    size: "2.5 MB",
  },
  {
    id: "6",
    name: "Vacation.jpg",
    url: "/files/vacation.jpg",
    parent: "2",
    size: "3.7 MB",
  },
  {
    id: "7",
    name: "Profile Picture.png",
    url: "/files/profile.png",
    parent: "2",
    size: "1.8 MB",
  },
  {
    id: "9",
    name: "Q4 Report.pptx",
    url: "/files/q4-report.pptx",
    parent: "8",
    size: "5.2 MB",
  },
  {
    id: "10",
    name: "Budget.xlsx",
    url: "/files/budget.xlsx",
    parent: "3",
    size: "1.5 MB",
  },
];
