import { Table } from "@chakra-ui/react";

const CartSubTotal = () => {
  return (
    <Table.Root
      className="rounded w-fit  !border-[var(--text-secondary)]"
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
      <Table.Body className="bg-[var(--bg-tertiary)] ">
        
          <Table.Row >
           
            <Table.Cell className="px-5 text-black">hello</Table.Cell>
          
          </Table.Row>
       
      </Table.Body>
    </Table.Root>
  );
};

export default CartSubTotal;


