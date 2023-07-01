import Footer from "./Footer";
import Header from "./Header";

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-[79px] pb-24">{children}</div>
      <Footer />
    </>
  );
};

export default HeaderLayout;
