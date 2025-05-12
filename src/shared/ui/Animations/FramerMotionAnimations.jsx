import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useCallback } from "react";

export const Appearance = ({
  children,
  horizontal = false,
  reverse = false,
  noTranslate = false,
  delay = 0.2,
  distance = 40,
  sx,
}) => {
  const variants = horizontal
    ? {
        visible: { opacity: 1, x: 0 },
        hidden: {
          opacity: 0,
          x: noTranslate ? 0 : reverse ? -distance : distance,
        },
      }
    : {
        visible: { opacity: 1, y: 0 },
        hidden: {
          opacity: 0,
          y: noTranslate ? 0 : reverse ? -distance : distance,
        },
      };
  return (
    <Box sx={sx}>
      <motion.div
        initial="hidden"
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        whileInView="visible"
        variants={variants}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export const AppearanceList = ({
  children,
  noTranslate = false,
  delay = 0.2,
}) => {
  const item = useCallback(
    () => ({
      hidden: { y: noTranslate ? 0 : 10, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    }),
    []
  )();

  const containerVariants = useCallback(
    () => ({
      hidden: {
        opacity: 0,
        transition: { staggerChildren: delay },
      },
      visible: {
        opacity: 1,
        transition: { staggerChildren: delay },
      },
    }),
    []
  )();

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {children.map((el, index) => (
        <motion.div key={index} variants={item}>
          {el}
        </motion.div>
      ))}
    </motion.div>
  );
};
