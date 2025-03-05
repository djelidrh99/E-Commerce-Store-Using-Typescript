import MainLayout from "@layouts/MainLayout/MainLayout";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("@pages/Home"));
const Products = lazy(() => import("@pages/Products"));
const Categories = lazy(() => import("@pages/Categories"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const ContactUs = lazy(() => import("@pages/ContactUs"));
const Error = lazy(() => import("@pages/Error"));
const ProductsDetail = lazy(() => import("@/pages/ProductsDetail"));
const Cart = lazy(() => import("@/pages/Cart"));

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "aboutUs",
        element: (
          <Suspense>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "contactUs",
        element: (
          <Suspense>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
      
      {
        path: "products/:prefixId",
        element: (
          <Suspense>
            <Products />
          </Suspense>
        ),
        loader: async ({params})=>{
          if(!/^[A-Za-z]/.test(params.prefix as string) ) {
            throw new Response("Not Found",{statusText:"page not fund",status:400})
          }
          return true

        }
      },
      {
        path: "productDetails",
        element: (
          <Suspense>
            <ProductsDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
