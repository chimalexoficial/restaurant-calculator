import { MenuItem, OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderContentProps = {
    order: OrderItem[];
    removeItem: (id: MenuItem['id']) => void;
}


export default function OrderContents({ order, removeItem }: OrderContentProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Your order</h2>

            <div className="space-y-3 mt-5">
                {(
                    order.map(item => (
                        <div
                            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                            key={item.id}>
                            <div>
                                <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                                <p className="font-black">Quantity: {item.quantity} - Total: {formatCurrency(item.price * item.quantity)} </p>
                            </div>

                            <button 
                            className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={() => removeItem(item.id)}>X</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
