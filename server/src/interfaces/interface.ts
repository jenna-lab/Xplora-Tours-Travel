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

export interface Tour {
  id: string;
  title: string;
  description: string;
  destination: string;
  price: number;
  imageUrl: string;
}
export interface TourWithoutId  extends Tour{
  title: string;
  description: string;
  destination: string;
  price: number;
  imageUrl: string;
}

