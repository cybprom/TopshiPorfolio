interface sanitybody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface pageInfo extends sanitybody {
  _type: "pageInfo";
  Address: string;
  backgroundInformation: string;
  Email: string;
  heroImage: string;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  role: string;
}
export interface Socials extends sanitybody {
  _type: "socials";
  title: string;
  url: string;
}

export interface Technology extends sanitybody {
  _type: "skill";
  image: image;
  progress: number;
  title: string;
}
export interface Skill extends sanitybody {
  _type: "skill";
  image: image;
  progress: number;
  title: string;
}

export interface Project extends sanitybody {
  title: string;
  _type: "project";
  image: image;
  linkToBuild: string;
  summary: string;
  technology: Technology[];
}

export interface Experience extends sanitybody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}
