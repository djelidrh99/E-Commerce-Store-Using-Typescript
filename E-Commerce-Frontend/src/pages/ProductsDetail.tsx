import Heading from "@/components/common/Heading/Heading";
import ProductDetail from "@/components/eCommerce/ProductDetail/ProductDetail";

const ProductsDetail = () => {
  return (
    <div>
      <Heading title={"Product Details"} />
      <div className="bg-white ">
        <div className="container  grid grid-cols-1   py-10 mx-auto max-lg:px-2 lg:px-10">
            <ProductDetail/>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
