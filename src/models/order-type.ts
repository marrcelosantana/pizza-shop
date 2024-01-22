export type OrderType = {
  orderId: number
  createdAt: string
  status: 'pending' | 'processing' | 'delivering' | 'canceled' | 'delivered'
  customerName: string
  total: number
}
