import React, { PropsWithChildren } from "react";
import { Box, ChakraProps, Flex, useTheme } from "@chakra-ui/react";

interface Props extends ChakraProps {}

export const DefaultCotainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  return (
    <Flex {...props} bg={"CARD_BACKGROUND"}>
      {children}
    </Flex>
  );
};
