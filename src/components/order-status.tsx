import clsx from 'clsx'

type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={clsx('h-2 w-2 rounded-full', {
          'bg-slate-400': status === 'pending',
          'bg-rose-500': status === 'canceled',
          'bg-amber-500': status === 'processing' || status === 'delivering',
          'bg-emerald-500': status === 'delivered',
        })}
      />
      <span>{orderStatusMap[status]}</span>
    </div>
  )
}
