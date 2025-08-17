import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
