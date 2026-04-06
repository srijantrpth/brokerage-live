export interface User {
  id: string
  email: string
  avatar?: string
  createdAt?: Date
}

export interface Listing {
  _id: string
  title: string
  description: string
  address: string
  type: 'rent' | 'sale'
  bedrooms: number
  bathrooms: number
  regularPrice: number
  discountPrice?: number
  imageUrls: string[]
  offer: boolean
  userRef: string
  createdAt?: Date
}

export interface SearchParams {
  searchTerm?: string
  type?: 'all' | 'rent' | 'sale'
  parking?: boolean
  furnished?: boolean
  offer?: boolean
  sort?: string
  order?: 'desc' | 'asc'
}
