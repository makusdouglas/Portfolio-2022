import { Box, ChakraProps } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface Props extends ChakraProps {}

export const DefaultCard: React.FC<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  return (
    <Box
      {...props}
      bg="CARD_BACKGROUND"
      rounded="2xl"
      boxShadow=" 4px 4px 3px 1px rgba(0, 0, 0, 0.2)"
    >
      {children}
    </Box>
  );
};
