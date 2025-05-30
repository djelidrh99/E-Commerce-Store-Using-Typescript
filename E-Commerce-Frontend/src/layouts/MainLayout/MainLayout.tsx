import Header from "@components/common/Header/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[var(--bg-primary)]">
    <div className=" relative flex flex-col min-h-screen">
      <header className="w-full left-0 top-0 mx-auto z-50 shadow-md sticky bg-[var(--bg-primary)]">
        <Header />
      </header>
      <div className="flex-1  flex flex-col  ">
        <Outlet />
      </div>{" "}
      <div className="bg-white border border-red-600">
        <div className="container mx-auto max-lg:px-2 lg:px-10">
        footer
        </div>
       
        </div>
    </div>
    </div>
  );
};

export default MainLayout;
