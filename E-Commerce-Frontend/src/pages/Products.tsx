import GridList from "@/components/common/GridList/GridList";
import Heading from "@/components/common/Heading/Heading";
import Product from "@/components/eCommerce/Product/Product";
import ProductsFilter from "@/components/eCommerce/ProductFilter/ProductsFilter";
import Loading from "@/components/feedback/Loading/Loading";
import useProducts from "@/hooks/useProducts";
import { AnimatePresence, motion } from "framer-motion";

const Products = () => {
  const { productList, productsCategory, productsMatrial, loading } =
    useProducts();

  return (
    <div>
      <Heading title={"Products"} />
      <div className="bg-white ">
        <Loading loading={loading} type="products" error={null}>
          <div className="container  grid grid-cols-1  md:grid-cols-4 gap-4 py-10 mx-auto max-lg:px-2 lg:px-10">
            <ProductsFilter
              productsFullInfo={productsCategory}
              productByMatrial={productsMatrial}
            />
            <motion.div
              layout
              className=" md:col-span-3 grid grid-cols-3 max-sm:grid-cols-2 gap-2 sm:gap-5"
            >
              <AnimatePresence>
                <GridList
                  itemArray={productList}
                  callBackFunc={(item) => (
                    <Product
                      key={item.id}
                      id={item.id}
                      title={item?.title}
                      price={item.price}
                      img={item.img}
                      cat_prefix={item.cat_prefix}
                    />
                  )}
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </Loading>
      </div>
    </div>
  );
};

export default Products;
