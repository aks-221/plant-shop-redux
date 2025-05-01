export interface Plant {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}