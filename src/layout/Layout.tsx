import { ReactNode } from "react";
import { Footer, Header } from "../components/common/ui-components";
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-black w-full min-h-screen flex">
        <div className="w-full">
          <Header />
          <div >
            <div className="pt-[70px] w-full">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
