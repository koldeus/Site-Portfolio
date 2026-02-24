import { motion } from "framer-motion";
import "./hero-banner.css";

export default function ScrollIndicator() {
  return (
    <div className="scrolldown-indicator">
      <motion.div
        className="fixed bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-7 h-11 border-2 border-gray-700 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-2 bg-gray-800 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-xs text-gray-700 font-light">Scroll down</span>
      </motion.div>
    </div>
  );
}
