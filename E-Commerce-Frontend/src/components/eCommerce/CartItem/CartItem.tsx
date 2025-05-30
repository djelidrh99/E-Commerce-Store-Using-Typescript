import { Table } from "@chakra-ui/react";
import  Remove from "@assets/svg/delete.svg?react"
import { memo } from "react";


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

};

const CartItem = memo( ({ items,removeProductFromCart,incrementQuantity,decrementQuantity }: CartItemComponentProps) => {
 
  return (
    <Table.ScrollArea className="rounded flex-grow sm:overflow-x-visible overflow-x-hidden  !border-[var(--text-secondary)]" borderWidth="1px" maxW="full">

    <Table.Root
      className=""
      borderColor={"white"}
      outlineColor={"red.600"}
      size="sm"
      variant="outline"
    >
      <Table.Header className="bg-[var(--bg-primary)] min-w-full ">
        <Table.Row>
          <Table.ColumnHeader className="py-5 px-2">Product</Table.ColumnHeader>
          <Table.ColumnHeader className="py-5 px-2">Price</Table.ColumnHeader>
          <Table.ColumnHeader className="py-5 px-2">
            Quantity
          </Table.ColumnHeader>
          <Table.ColumnHeader className="py-5 px-2" textAlign="end">
            SubTotal
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body className="bg-[var(--bg-tertiary)] min-w-full ">
        {items.map((item) => (
         
          <Table.Row key={item.id}>
            <Table.Cell className="px-5  text-black flex items-center gap-5">
              <div className="bg-white rounded-md flex  px-1 py-1 w-14 justify-center items-center">
                <img
                  className="h-full w-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <h6 className=""> {item.name}</h6>
            </Table.Cell>
            <Table.Cell className="px-5  text-black ">${item.price}</Table.Cell>
            <Table.Cell className="px-5  text-black" textAlign="end">
              <div className="flex items-center gap-1 bg-white rounded-full px-1.5 py-2">
                <button onClick={()=>{decrementQuantity(item.id)}} className="text-black/60 w-6 h-6 cursor-pointer   md:w-9 md:h-9  flex justify-center items-center  bg-[var(--bg-tertiary)] rounded-full  font-bold text-lg md:text-xl">-</button>
                <span className="flex-grow text-center ">{item.quantity}</span>
                <button onClick={()=>{incrementQuantity(item.id)}} className="text-black/60 w-6 h-6 md:w-9 md:h-9 cursor-pointer flex justify-center items-center  bg-[var(--bg-tertiary)] rounded-full  font-bold text-lg md:text-xl">+</button>

              </div>
            </Table.Cell>
            <Table.Cell className="px-5  text-black " textAlign="end">
              <div className="flex justify-center items-center gap-5">
              <h6 className="">${(+item.price*item.quantity).toFixed(2)}</h6>
              <div className="bg-white rounded-full p-1.5">
              <Remove onClick={()=>{removeProductFromCart(item.id)}} className="w-5 cursor-pointer h-5"/>
              </div>
              </div>
              
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </Table.ScrollArea>

  );
});

export default CartItem;


