export interface CompanyCard {
  company: {
    id: number;
    name: string;
    description: string;
    whatsapp: string;
    instagram: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  fileWallpaper: {
    url: string;
    name: string;
    path: string;
    size: string;
  };
  fileLogo?: {
    url: string;
    name: string;
    path: string;
    size: string;
  };
}

export interface Sorter {
  id: number;
  name: string;
  description: string;
}
