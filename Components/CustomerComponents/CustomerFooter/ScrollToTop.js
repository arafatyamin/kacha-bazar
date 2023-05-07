import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScrolled > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  
  return (
    isVisible && (
      <motion.div
        initial={{
          x: 0,
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        onClick={scrollToTop}
        className={`cursor-pointer fixed bottom-20 right-12 z-30`}
      >
        <BsArrowUpSquareFill className="text-primary text-2xl mt-1  md:text-4xl" />
      </motion.div>
    )
  );
};

export default ScrollToTop;
