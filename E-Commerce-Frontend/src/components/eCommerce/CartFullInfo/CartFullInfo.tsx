import CartItem from "@components/eCommerce/CartItem/CartItem";
import CartSubTotal from "@components/eCommerce/CartSubTotal/CartSubTotal";

type CartItemProps = {
    id: number;
    name: string;
    price: string;
    quantity: number;
    image: string;
   };
  
  type CartItemComponentProps = {
    items: CartItemProps[];
    removeProductFromCart: (id: number) => void;
  };

const CartFullInfo = ({ items,removeProductFromCart }: CartItemComponentProps) => {
  return (
    <div className="flex  gap-5">
        <CartItem items={items} removeProductFromCart={removeProductFromCart}/>
        <CartSubTotal/>
    </div>
  )
}

export default CartFullInfo