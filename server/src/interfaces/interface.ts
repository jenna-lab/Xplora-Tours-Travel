export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Data {
  id: string;
  name: string;
  role: string;
  email: string;
  iat: number;
  exp: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  end_date: string;
  user_id: string;
  email: string;
}
