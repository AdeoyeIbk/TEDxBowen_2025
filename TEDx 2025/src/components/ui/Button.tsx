import { motion } from "motion/react"

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  id?: string;
};



export default function Button({ children, onClick, id }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      id={id}
      className="px-6 py-2 bg-red-500 text-white rounded-xs shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-4 sm:mt-0"
    whileHover={{ 
                  scale: 1.05,
      boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
                  cursor: "pointer"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}