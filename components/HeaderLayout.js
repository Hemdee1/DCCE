import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
import { fadeIn } from "../data";

const HeaderLayout = ({ children }) => {
  const route = useRouter();
  return (
    <>
      <Header />
      <AnimatePresence key={route.pathname}>
        <motion.div {...fadeIn} className="mt-[79px] pb-24 overflow-hidden">
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default HeaderLayout;
