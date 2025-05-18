import SuspenseLoadinsg from "@/components/feedback/Suspense/SuspenseLoadinsg";
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
const Wishlist = lazy(() => import("@/pages/Wishlist"));
const Register = lazy(() => import("@/pages/Register"));
const Login = lazy(() => import("@/pages/Login"));
import ProtectedComponent from "@/components/auth/ProtectedComponent";

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
          <Suspense fallback={<SuspenseLoadinsg/>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "aboutUs",
        element: (
          <Suspense fallback={<SuspenseLoadinsg/>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "contactUs",
        element: (
          <Suspense fallback={<SuspenseLoadinsg/>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense >
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense >
            <Register />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense >
            <Login />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<SuspenseLoadinsg/>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<SuspenseLoadinsg/>}>
            <ProtectedComponent>
            <Wishlist />
            </ProtectedComponent>
          </Suspense>
        ),
      },
      
      {
        path: "products/:prefixId",
        element: (
          <Suspense fallback={<SuspenseLoadinsg/>}>
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
        path: "productDetails/:Id",
        element: (
          <Suspense fallback={<SuspenseLoadinsg/>}>
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
