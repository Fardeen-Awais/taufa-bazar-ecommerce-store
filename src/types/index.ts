export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviewCount: number
  inStock: boolean
  tags: string[]
}

export interface CartItem {
  id: string
  product: Product
  quantity: number
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  date: string
} 