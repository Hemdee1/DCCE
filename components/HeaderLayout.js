import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
import { fadeIn } from "../data";
import Head from "next/head";

const HeaderLayout = ({ children }) => {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>ATBU DCCE Handbook</title>
      </Head>
      <Header />
      <AnimatePresence key={route.pathname}>
        <motion.div {...fadeIn} className="mt-[79px] pb-24">
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default HeaderLayout;
