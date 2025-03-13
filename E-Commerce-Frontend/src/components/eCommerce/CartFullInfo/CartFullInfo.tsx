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
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
    totalPrice:number
    
  };

const CartFullInfo = ({ items,removeProductFromCart ,incrementQuantity,decrementQuantity,totalPrice }: CartItemComponentProps) => {
  return (
    <div className="flex md:flex-nowrap flex-wrap  gap-5">
        <CartItem items={items} removeProductFromCart={removeProductFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
        <CartSubTotal totalPrice={totalPrice}/>
    </div>
  )
}

export default CartFullInfo