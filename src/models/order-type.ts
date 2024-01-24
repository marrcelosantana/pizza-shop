export type OrderType = {
  orderId: string
  createdAt: string
  status: 'pending' | 'processing' | 'delivering' | 'canceled' | 'delivered'
  customerName: string
  total: number
}
