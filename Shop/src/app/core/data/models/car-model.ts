export interface CarItem {
  _id?: string; // opcional si lo genera MongoDB
  name: string;
  image: string;
  price: number;
  description: string;
  offSale: number;
  size: string[]; // tallas disponibles
  category: number;
  gender: 'hombre' | 'mujer' | 'unisex'; // puedes ajustarlo a string si no quieres limitar
  stock: {
    [talla: string]: number; // ejemplo: "M": 10, "L": 5
  };
  sizeSelected: string;
  quantity: number;
}