import { Footer } from "@/widgets/welcome/ui/footer";
import { Header } from "@/widgets/welcome/ui/headres";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
