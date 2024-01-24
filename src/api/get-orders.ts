import { api } from '@/lib/axios'
import { OrderType } from '@/models/order-type'

interface GetOrdersQuery {
  pageIndex?: number | null
}

interface GetOrdersResponse {
  orders: OrderType[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })
  return response.data
}
