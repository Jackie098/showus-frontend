export interface Company {
  id: number;
  name: string;
  description: string;
  whatsapp: string;
  instagram: string;
  email: string;
}

export interface filesCompany {
  url: string;
  name: string;
  path: string;
  size: number;
  wallpaper: boolean;
  logo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Size {
  initials: string;
  name: string;
  description: string;
}

export interface Menu {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    type: string;
    size: Size;
  };
}

export interface CompanyDetails {
  company: Company;
  filesCompany: filesCompany[];
  logoCompany: filesCompany[];
  menu: Menu[];
}

export interface TypesInMenu {
  id: number;
  name: string;
}
