import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

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
  const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
  return (
     (
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        onClick={scrollToTop}
        className={`cursor-pointer fixed bottom-20 right-12 h-10 w-10 md:h-14 md:w-14 bg-primary-light rounded-full  justify-center items-center z-30 flex`}
      >
        <BsArrowUp className="text-primary text-2xl mt-1  md:text-3xl  md:mt-2 animate-bounce" />
      </motion.div>
    )
  );
};

export default ScrollToTop;
