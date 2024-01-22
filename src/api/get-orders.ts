import { api } from '@/lib/axios'
import { OrderType } from '@/models/order-type'

interface GetOrdersResponse {
  orders: OrderType[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders() {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })
  return response.data
}
