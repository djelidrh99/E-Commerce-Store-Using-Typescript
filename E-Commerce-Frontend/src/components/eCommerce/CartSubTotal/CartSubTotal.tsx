import { Table } from "@chakra-ui/react";

type SubTotalProps = {
  totalPrice:number
}

const CartSubTotal = ({totalPrice}:SubTotalProps) => {
  return (
    <Table.Root
      className="rounded  md:w-fit flex-grow !border-[var(--text-secondary)]"
      borderColor={"red.500"}
      outlineColor={"red.600"}
      size="sm"
      variant="outline"
    >
      <Table.Header className="bg-[var(--bg-primary)] ">
        <Table.Row>
          <Table.ColumnHeader className="py-5 px-2 whitespace-nowrap">Order Summary</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body className="bg-[var(--bg-tertiary)]  ">
        
          <Table.Row >
           
            <Table.Cell className="px-5 flex items-center justify-between gap-5 text-black">
              <div className="flex-grow">SubTotal</div>
              <div className="flex-grow text-end">${totalPrice}</div>
            </Table.Cell>
           
          
          </Table.Row>

          <Table.Row >
           
           <Table.Cell className="px-5 flex items-center justify-between gap-5 text-black">
             <div className="flex-grow">Shipping</div>
             <div className="flex-grow text-end text-[var(--bg-secondary)]">Free</div>
           </Table.Cell>
          
         
         </Table.Row>

         <Table.Row className="bg-white" >
           
           <Table.Cell className="px-5 flex items-center justify-between gap-5 text-black">
             <div className="">Total</div>
             <div className="flex-grow text-end">${totalPrice}</div>
           </Table.Cell>
          
         
         </Table.Row>
         <Table.Row className="h-full" >
           
           <Table.Cell className="px-5 flex items-center justify-center mt-5 flex-grow text-black">
             <button className="bg-[var(--bg-secondary)] text-white px-5 py-2 rounded-full w-full whitespace-nowrap">Proceed To Checkout</button>
           </Table.Cell>
          
         
         </Table.Row>
       
      </Table.Body>
    </Table.Root>
  );
};

export default CartSubTotal;


